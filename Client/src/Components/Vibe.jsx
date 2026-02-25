import React from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

const Vibe = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E8B57]/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl w-full"
      >
        {/* header */}
        <div className="text-center mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#2E8B57]">
            <Music size={20} />
            <span className="text-sm font-medium tracking-wide uppercase">
              Now Playing
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 font-outfit tracking-tight">
            Vibe With Me{" "}
            <motion.span
              whileHover={{ rotate: 20, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              className="inline-block cursor-default"
            >
              🎧
            </motion.span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            A curated playlist I listen to while coding, and building
            ideas. Press play and catch the vibe.
          </p>
        </div>

        {/* card */}
        <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl p-4 md:p-6">
          {/* soft glow ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />

          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/playlist/6WiH6cEjtId18uBlzpojlp?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
            className="rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Vibe;
