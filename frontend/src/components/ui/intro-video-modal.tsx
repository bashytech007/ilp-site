"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { EASE_ILP } from "@/lib/motion";

const STORAGE_KEY = "hasSeenIntroVideo";

/**
 * YouTube Video ID — the part after "v=" in a YouTube URL.
 * Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ the ID is "dQw4w9WgXcQ".
 *
 * Replace the placeholder below with your actual video ID from the
 * I. Lawrence Practice channel: https://www.youtube.com/@i.lawrencepractice
 */
const YOUTUBE_VIDEO_ID = "occycDAXmAA";

/** Delay (ms) before the modal appears after mount */
const SHOW_DELAY_MS = 1000;

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: EASE_ILP } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: EASE_ILP } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_ILP, delay: 0.05 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 12,
    transition: { duration: 0.25, ease: EASE_ILP },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function IntroVideoModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  /* --- Show once logic ------------------------------------------------ */
  React.useEffect(() => {
    // SSR guard
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  /* --- Scroll lock while open ---------------------------------------- */
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* --- Escape key handler -------------------------------------------- */
  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  /* --- Close & persist flag ------------------------------------------ */
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* quota full — ignore */
    }
  }, []);

  /* --- Click backdrop ------------------------------------------------ */
  const handleBackdropClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Only close when clicking the backdrop itself, not the modal card
      if (e.target === e.currentTarget) handleClose();
    },
    [handleClose],
  );

  /* --- YouTube embed URL ---------------------------------------------- */
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="intro-video-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6"
          style={{ backgroundColor: "rgba(10, 15, 20, 0.75)", backdropFilter: "blur(6px)" }}
          aria-modal="true"
          role="dialog"
          aria-label="Intro video"
        >
          {/* Modal Card */}
          <motion.div
            key="intro-video-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-charcoal-950 ring-1 ring-white/10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close intro video"
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* YouTube Embed — responsive 16:9 container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={youtubeEmbedUrl}
                title="I. Lawrence Practice — Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

