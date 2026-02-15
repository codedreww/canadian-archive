/*
  FILE: src/ui/OpenEventModal.js

  PURPOSE:
  Event content overlay that appears when player interacts with a hotspot.
  Designed to be content-flexible for teammates adding historical entries.
*/

"use client";

import { useEffect, useMemo } from "react";

// Normalize text fields so teammates can provide either a single string or paragraph array.
function toParagraphs(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

// Normalize image input to one shape:
// - image: "url"
// - images: ["url", ...]
// - images: [{ src, alt?, caption? }, ...]
function toImages(event) {
  const raw = Array.isArray(event?.images)
    ? event.images
    : event?.image
      ? [event.image]
      : [];
  return raw
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          src: item,
          alt: `${event?.title ?? "Event"} image ${index + 1}`,
        };
      }
      if (!item?.src) return null;
      return {
        src: item.src,
        alt: item.alt || `${event?.title ?? "Event"} image ${index + 1}`,
        caption: item.caption || "",
      };
    })
    .filter(Boolean);
}

// Normalize archive links so content authors can provide strings or { href, label } objects.
function toLinks(event) {
  const raw = Array.isArray(event?.archivesLinks) ? event.archivesLinks : [];
  return raw
    .map((item, index) => {
      if (typeof item === "string") {
        return { label: `Archive source ${index + 1}`, href: item };
      }
      if (!item?.href) return null;
      return {
        label: item.label || `Archive source ${index + 1}`,
        href: item.href,
      };
    })
    .filter(Boolean);
}

export default function OpenEventModal({ era, event, onClose }) {
  const images = useMemo(() => toImages(event), [event]);
  const hasSingleImage = images.length === 1;
  const summaryParagraphs = useMemo(
    () => toParagraphs(event?.summary),
    [event?.summary],
  );
  const whyParagraphs = useMemo(
    () => toParagraphs(event?.whyItMatters),
    [event?.whyItMatters],
  );
  const archiveLinks = useMemo(() => toLinks(event), [event]);

  // Accessibility + expected UX: Esc closes modal.
  useEffect(() => {
    if (!event) return undefined;
    const onKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="retro-overlay absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop click closes modal, dialog click is isolated below. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={event?.title || "Historical event"}
        className="retro-panel relative max-h-[88vh] w-full max-w-4xl overflow-hidden"
        onClick={(clickEvent) => clickEvent.stopPropagation()}
      >
        {/* Visual texture layer to reinforce CRT/pixel look. */}
        <div className="retro-scanlines pointer-events-none absolute inset-0 opacity-20" />
        <div className="retro-pixel-noise pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative flex max-h-[88vh] flex-col">
          {/* Static top bar: era metadata + event title. */}
          <header className="retro-bar px-4 py-3 sm:px-6">
            <div className="retro-meta text-[11px] uppercase tracking-[0.18em]">
              {era?.title || "Era"} | {era?.years || "Dates not set"}
            </div>
            <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
              {event?.title}
            </h2>
          </header>

          {/* Scrollable content section keeps footer/header visible for long articles. */}
          <section className="overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
            {!!images.length && (
              <div
                className={`mb-5 grid gap-3 ${hasSingleImage ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}
              >
                {images.map((image) => (
                  <figure
                    key={image.src}
                    className={`retro-frame ${hasSingleImage ? "mx-auto w-fit max-w-full" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`retro-pixel-image w-full bg-black/10 ${
                        hasSingleImage
                          ? "block h-auto w-auto max-h-[52vh] max-w-full bg-transparent object-contain"
                          : "h-44 object-cover sm:h-52"
                      }`}
                    />
                    {!!image.caption && (
                      <figcaption className="retro-caption px-3 py-2 text-xs">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}

            {/* Main historical content body. */}
            {!!summaryParagraphs.length && (
              <div className="retro-copy space-y-3 text-sm leading-relaxed sm:text-base">
                {summaryParagraphs.map((paragraph, index) => (
                  <p key={`${event?.id || "event"}-summary-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Optional highlighted interpretation section. */}
            {!!whyParagraphs.length && (
              <div className="retro-callout mt-6 p-3 sm:p-4">
                <h3 className="retro-copy retro-callout-title text-sm font-bold uppercase tracking-[0.1em]">
                  Why This Matters
                </h3>
                <div className="retro-copy mt-2 space-y-2 text-sm leading-relaxed">
                  {whyParagraphs.map((paragraph, index) => (
                    <p key={`${event?.id || "event"}-why-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Optional primary-source links. */}
            {!!archiveLinks.length && (
              <div className="mt-6">
                <h3 className="retro-copy retro-meta text-sm font-bold uppercase tracking-[0.1em]">
                  Sources & Archives
                </h3>
                <ul className="mt-2 space-y-2">
                  {archiveLinks.map((link) => (
                    <li key={`${event?.id || "event"}-${link.href}`}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="retro-link-btn inline-block px-2 py-1 text-xs"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Persistent close action for keyboard/touch/mouse users. */}
          <footer className="retro-footer flex items-center justify-end px-4 py-3 sm:px-6">
            <button
              onClick={onClose}
              className="retro-close-btn px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] transition"
            >
              Close [Esc]
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
