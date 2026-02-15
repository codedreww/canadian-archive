"use client";
import { useAudio } from "@/ui/AudioProvider";

export default function MusicButton({ className = "" }) {
  const audio = useAudio();
  if (!audio) return null;

  return (
    <button
      onClick={audio.toggle}
      className={
        "pointer-events-auto rounded-md border border-black bg-white px-3 py-2 text-xs font-semibold text-black shadow " +
        className
      }
    >
      {audio.enabled ? "🔊 Music" : "🔇 Music"}
    </button>
  );
}
