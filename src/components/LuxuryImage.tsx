"use client";

import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string; // e.g. "(max-width: 768px) 100vw, 33vw"
  className?: string;
  aspect?: "16-9" | "4-3" | "square";
};

export default function LuxuryImage({ src, alt, priority = false, sizes = "(max-width: 768px) 100vw, 33vw", className = "", aspect = "16-9" }: Props) {
  const aspectClass = aspect === "square" ? "aspect-square" : aspect === "4-3" ? "aspect-4-3" : "aspect-16-9";
  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspectClass} ${className}`}>
      <div className="aspect-content">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
