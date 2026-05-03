"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export function RevealImage({ className, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Image
      alt={alt}
      {...props}
      onLoad={(e) => {
        setLoaded(true);
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
