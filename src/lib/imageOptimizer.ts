// Helpers for serving + precaching gallery images through the Next.js image
// optimizer (`/_next/image`). The lightbox used to render a raw <img> pointing
// at the 5-10 MB source webp, which made the first view of an unseen photo slow
// and janky. By routing through the optimizer and precaching every photo on
// open via the *same* URL, the displayed <img> is a guaranteed cache hit.
//
// Next.js 16 REQUIRES an explicit `q` and only allows values in
// `images.qualities` (default `[75]`). Using 75 keeps us on that default
// allowlist, so no `next.config.ts` `images` block is needed. Both the
// displayed <img> and the precache go through buildOptimizedUrl, so the URL
// (incl. q) is byte-identical -> guaranteed HTTP cache hit. Keep
// NEXT_DEVICE_SIZES in sync if a custom `images.deviceSizes` is ever added.

export const NEXT_DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840] as const;
export const OPTIMIZED_QUALITY = 75;

// The lightbox photo spans ~100vw. We freeze one width bucket per modal open so
// the displayed <img> and the precache request resolve to an identical URL.
// DPR is clamped to 2: beyond 2x the gain is invisible at fullscreen while the
// byte cost (and the 3840 bucket on retina laptops) re-introduces the lag.
export function pickWidthBucket(viewportCssWidth: number, dpr: number): number {
  const target = Math.ceil(viewportCssWidth * Math.min(dpr || 1, 2));
  for (const w of NEXT_DEVICE_SIZES) if (w >= target) return w;
  return NEXT_DEVICE_SIZES[NEXT_DEVICE_SIZES.length - 1];
}

// src is an absolute app path, e.g. "/media/villa/zwembad-1.webp". No srcSet is
// used on the <img>, so this exact string is what both the display and the
// precache fetch -> same HTTP cache entry.
export function buildOptimizedUrl(src: string, width: number): string {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${OPTIMIZED_QUALITY}`;
}

// Loads AND decodes one optimized image. Resolves only once the bitmap is
// paint-ready (img.decode()), so the consumer's fade triggers on a real
// paintable frame instead of mid-download, and the decode work stays off the
// critical path (keeps the dot transition / smooth-scroll jank-free).
//
// Resolves with the ORIGINAL src so callers keep using it as the key in their
// loaded-image bookkeeping; only the fetched bytes change.
export function preloadOptimized(
  src: string,
  width: number,
  signal?: AbortSignal,
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }
    const img = new window.Image();
    img.decoding = "async";
    const onAbort = () => {
      img.src = ""; // hint the browser to drop the in-flight fetch
      reject(new DOMException("Aborted", "AbortError"));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
    img.onload = () => {
      const finish = () => {
        signal?.removeEventListener("abort", onAbort);
        resolve(src);
      };
      // decode() can reject (e.g. on the empty-src abort) — finish either way
      // so the loading gate clears and we never hang the queue.
      img.decode().then(finish).catch(finish);
    };
    img.onerror = () => {
      signal?.removeEventListener("abort", onAbort);
      reject(new Error(`Failed to preload ${src}`));
    };
    img.src = buildOptimizedUrl(src, width);
  });
}
