/*
  FILE: src/ui/OpenEventModal.js

  PURPOSE:
  Event content overlay that appears when player interacts with a hotspot.
  Designed to be content-flexible for teammates adding historical entries.
*/

"use client";

import { useEffect, useMemo, useState } from "react";

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

function isHttpUrl(value) {
  return /^https?:\/\//i.test(String(value || ""));
}

function normalizeSourceEntries(rawValue, labelPrefix) {
  const entries = Array.isArray(rawValue)
    ? rawValue
    : rawValue
      ? [rawValue]
      : [];

  return entries
    .map((item, index) => {
      if (typeof item === "string") {
        const trimmed = item.trim();
        if (!trimmed) return null;

        if (isHttpUrl(trimmed)) {
          return {
            key: `${labelPrefix}-${index}-${trimmed}`,
            label: `${labelPrefix} ${index + 1}`,
            href: trimmed,
            note: "",
          };
        }

        return {
          key: `${labelPrefix}-${index}-${trimmed}`,
          label: `${labelPrefix} ${index + 1}`,
          href: "",
          note: trimmed,
        };
      }

      if (!item || typeof item !== "object") return null;

      const href = item.href || item.url || item.link || "";
      const label =
        item.label ||
        item.title ||
        item.name ||
        `${labelPrefix} ${index + 1}`;
      const note = item.note || item.citation || item.text || item.description || "";

      if (!href && !note) return null;
      return {
        key: `${labelPrefix}-${index}-${href || note}`,
        label,
        href,
        note,
      };
    })
    .filter(Boolean);
}

// Normalize all possible source fields so content authors have flexibility.
function toSources(event) {
  const sources = [
    ...normalizeSourceEntries(event?.archivesLinks, "Archive source"),
    ...normalizeSourceEntries(event?.sourceLinks, "Source link"),
    ...normalizeSourceEntries(event?.sources, "Source"),
    ...normalizeSourceEntries(event?.references, "Reference"),
  ];

  const seen = new Set();
  return sources.filter((source) => {
    const dedupeKey = `${source.href}|${source.note}|${source.label}`;
    if (seen.has(dedupeKey)) return false;
    seen.add(dedupeKey);
    return true;
  });
}

export default function OpenEventModal({ era, event, onClose }) {
  const [openSourcesForEventId, setOpenSourcesForEventId] = useState(null);
  const images = useMemo(() => toImages(event), [event]);
  const hasSingleImage = images.length === 1;
  const currentEventId = event?.id ?? null;
  const isSourcesOpen =
    Boolean(currentEventId) && openSourcesForEventId === currentEventId;
  const summaryParagraphs = useMemo(
    () => toParagraphs(event?.summary),
    [event?.summary],
  );
  const whyParagraphs = useMemo(
    () => toParagraphs(event?.whyItMatters),
    [event?.whyItMatters],
  );
  const sources = useMemo(() => toSources(event), [event]);

  // Accessibility + expected UX: Esc closes modal.
  useEffect(() => {
    if (!event) return undefined;
    const onKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key !== "Escape") return;
      if (isSourcesOpen) {
        setOpenSourcesForEventId(null);
        return;
      }
      onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [event, isSourcesOpen, onClose]);

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

          </section>

          {/* Persistent close action for keyboard/touch/mouse users. */}
          <footer className="retro-footer flex items-center justify-end gap-2 px-4 py-3 sm:px-6">
            <button
              onClick={() => {
                if (currentEventId) setOpenSourcesForEventId(currentEventId);
              }}
              className="retro-link-btn px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] transition"
            >
              Sources
            </button>
            <button
              onClick={onClose}
              className="retro-close-btn px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] transition"
            >
              Close [Esc]
            </button>
          </footer>
        </div>

        {isSourcesOpen && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/55 p-4 sm:p-6"
            onClick={() => setOpenSourcesForEventId(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Event sources"
              className="retro-panel relative max-h-[80vh] w-full max-w-2xl overflow-hidden"
              onClick={(clickEvent) => clickEvent.stopPropagation()}
            >
              <div className="retro-scanlines pointer-events-none absolute inset-0 opacity-20" />
              <div className="retro-pixel-noise pointer-events-none absolute inset-0 opacity-30" />

              <div className="relative flex max-h-[80vh] flex-col">
                <header className="retro-bar px-4 py-3 sm:px-6">
                  <div className="retro-meta text-[11px] uppercase tracking-[0.18em]">
                    Sources
                  </div>
                  <h3 className="mt-2 text-lg font-bold leading-tight sm:text-xl">
                    {event?.title}
                  </h3>
                </header>

                <section className="retro-copy overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
                  {!!sources.length ? (
                    <ul className="space-y-3">
                      {sources.map((source) => (
                        <li key={source.key} className="space-y-2">
                          <div className="retro-meta text-xs uppercase tracking-[0.08em]">
                            {source.label}
                          </div>
                          {!!source.note && (
                            <p className="text-sm leading-relaxed">{source.note}</p>
                          )}
                          {!!source.href && (
                            <a
                              href={source.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="retro-link-btn inline-block px-2 py-1 text-xs"
                            >
                              Open Link
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed">
                      No sources added for this event yet.
                    </p>
                  )}
                </section>

                <footer className="retro-footer flex items-center justify-end px-4 py-3 sm:px-6">
                  <button
                    onClick={() => setOpenSourcesForEventId(null)}
                    className="retro-close-btn px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] transition"
                  >
                    Close Sources
                  </button>
                </footer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
