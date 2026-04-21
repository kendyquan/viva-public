"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImageModel } from "@/lib/marketing/dto";

interface MediaGalleryProps {
  images: GalleryImageModel[];
  videoUrl?: string;
}

export function MediaGallery({
  images,
  videoUrl,
}: MediaGalleryProps) {
  const gallery = images.length > 0 ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (gallery.length === 0) {
    return null;
  }

  const current = gallery[activeIndex];
  const previous = gallery[(activeIndex - 1 + gallery.length) % gallery.length];
  const next = gallery[(activeIndex + 1) % gallery.length];

  const playButton = (
    <span
      className="marketing-gallery__play"
      aria-hidden="true"
    />
  );

  return (
    <section className="marketing-gallery" aria-label="Featured property media">
      <div className="marketing-gallery__desktop">
        <div className="marketing-gallery__side" aria-hidden="true">
          <Image
            src={previous.src}
            alt=""
            fill
            sizes="(max-width: 900px) 0vw, 20vw"
          />
        </div>

        <div className="marketing-gallery__main">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(max-width: 900px) 0vw, 50vw"
          />
          {videoUrl ? (
            <a
              href={videoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Play showcase video"
            >
              {playButton}
            </a>
          ) : (
            playButton
          )}
        </div>

        <div className="marketing-gallery__side" aria-hidden="true">
          <Image
            src={next.src}
            alt=""
            fill
            sizes="(max-width: 900px) 0vw, 20vw"
          />
        </div>
      </div>

      <div className="marketing-gallery__mobile">
        <div className="marketing-gallery__slide">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 0vw"
          />
          {videoUrl ? (
            <a
              href={videoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Play showcase video"
            >
              {playButton}
            </a>
          ) : (
            playButton
          )}
        </div>

        <div className="marketing-gallery__dots">
          {gallery.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={[
                "marketing-gallery__dot",
                index === activeIndex ? "marketing-gallery__dot--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
