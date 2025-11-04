"use client";

import Image from "next/image";

type FigureProps = {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: "square" | "video" | "wide";
  className?: string;
};

const aspectToClass: Record<NonNullable<FigureProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "[aspect-ratio:3/1]",
};

export default function Figure({ src = "/placeholder.jpg", alt, caption, aspect = "video", className }: FigureProps) {
  return (
    <figure className={"overflow-hidden rounded-lg border border-border/60 bg-card " + (className ?? "") }>
      <div className={"relative w-full " + aspectToClass[aspect]}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      {caption ? (
        <figcaption className="px-3 py-2 text-xs text-foreground/70 border-t border-border/60">{caption}</figcaption>
      ) : null}
    </figure>
  );
}


