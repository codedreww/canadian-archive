"use client";

import { useState } from "react";

/**
 * Floating era-specific chatbot used on all era pages.
 *
 * Stateless: each question is sent independently, no history stored.
 */
export default function EraChatbot({ era }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    setIsLoading(true);
    setReply("");
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          eraId: era?.id ?? null,
          eraTitle: era?.title ?? null,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        console.error("Chat request failed", res.status, data);
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "Chat request failed",
        );
      }

      setReply(
        typeof data?.reply === "string"
          ? data.reply
          : "I couldn't find a good answer to that. Try rephrasing your question or asking about another topic in history or the game.",
      );
    } catch (err) {
      console.error("Chat error", err);
      setError(
        "Sorry, I couldn't answer that right now. Please try again in a moment.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = () => {
    // As soon as the user clicks back into the box, start fresh.
    if (!isLoading && input) {
      setInput("");
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex items-end justify-end p-4 sm:p-6">
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={toggleOpen}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#dc3b32] bg-[#ececec] text-[#1c1f26] shadow-[0_4px_0_#b32721] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#b32721] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#05070b] focus:ring-[#dc3b32]"
        aria-label={isOpen ? "Close history helper" : "Open history helper"}
      >
        <span className="text-xl">💬</span>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="pointer-events-auto mr-3 mb-16 w-full max-w-sm sm:max-w-md">
          <div className="retro-panel overflow-hidden">
            <div className="retro-bar flex items-center justify-between px-3 py-2">
              <div className="retro-copy text-[11px] font-bold uppercase tracking-[0.12em]">
                History Helper
              </div>
              {era?.title && (
                <div className="retro-meta ml-2 hidden text-[10px] sm:block">
                  Era: {era.title}
                </div>
              )}
            </div>

            <div className="retro-copy retro-scanlines relative bg-[#ececec] px-3 py-3">
              <div className="relative space-y-2 text-xs leading-relaxed sm:text-sm">
                <p>Ask a question about Canadian history.</p>
                <form onSubmit={handleSubmit} className="space-y-2">
                  <textarea
                    rows={3}
                    data-disable-game-keys="true"
                    className="w-full resize-none border-2 border-[#1c1f26] bg-white px-2 py-1 text-xs leading-relaxed outline-none focus:border-[#dc3b32]"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={handleFocus}
                    placeholder="e.g. “How did this era shape Canada?”
"
                  />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setInput("");
                        setReply("");
                        setError("");
                      }}
                      className="retro-link-btn px-2 py-1 text-[10px]"
                    >
                      Clear
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="retro-close-btn px-3 py-1 text-[11px] disabled:opacity-60"
                    >
                      {isLoading ? "Thinking..." : "Ask"}
                    </button>
                  </div>
                </form>

                {error && (
                  <p className="retro-meta mt-1 text-[11px] text-red-700">
                    {error}
                  </p>
                )}

                {reply && !error && (
                  <div className="retro-callout mt-3 px-2 py-2 text-[11px] leading-relaxed sm:text-xs">
                    <div className="retro-callout-title mb-1 text-[11px] font-bold uppercase tracking-[0.12em]">
                      Answer
                    </div>
                    <div>{reply}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
