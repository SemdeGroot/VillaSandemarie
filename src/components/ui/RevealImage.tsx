"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export function RevealImage({ className, alt, priority, ...props }: ImageProps) {
  const [loaded, setLoaded] = React.useState(false);

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
