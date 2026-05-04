"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export function RevealImage({ className, alt, priority, ...props }: ImageProps) {
  const [loaded, setLoaded] = React.useState(priority || false);

  return (
    <Image
      alt={alt}
      priority={priority}
      {...props}
      onLoad={(e) => {
        if (!loaded) setLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      className={cn(
        "image-reveal",
        loaded && "is-loaded",
        className
      )}
    />
  );
}
