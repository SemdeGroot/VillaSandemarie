"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type RevealImageProps = ImageProps & {
  /**
   * For above-the-fold images inside a rounded `overflow-hidden` box. Skips the
   * opacity fade-in so the image is not promoted to its own compositing layer,
   * which is what makes the parent's rounded clip apply only after the photo
   * has already painted square. Pair with `Reveal immediate`.
   */
  immediate?: boolean;
};

export function RevealImage({
  className,
  alt,
  priority,
  immediate,
  ...props
}: RevealImageProps) {
  const [loaded, setLoaded] = React.useState(false);

  if (immediate) {
    return <Image alt={alt} priority={priority} {...props} className={cn(className)} />;
  }

  return (
    <Image
      alt={alt}
      priority={priority}
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      className={cn(
        "transition-opacity duration-1000 ease-out",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
}
