"use client";

import { useState } from "react";
import MuxVideo from "@mux/mux-video-react";
import { motion } from "framer-motion";
import { TransitionLink } from "./components/TransitionLink";

export default function Home() {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <main className="relative h-dvh w-full overflow-hidden flex items-end justify-center py-10 md:py-16">
      <MuxVideo
        playbackId="QfnB4SbExEoa27n5zsXi2mf02KrMqJMmZjJ1wGrkYoMI"
        streamType="on-demand"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover -z-10 scale-110 transition-opacity duration-1000 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        style={{ "--media-object-fit": "cover" } as React.CSSProperties}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: [0.16, 1, 0.3, 1], // premium custom easeOutExpo/easeOutQuart
        }}
        className="z-10"
      >
        <TransitionLink
          href="/home"
          className="inline-flex items-center justify-center uppercase tracking-widest transition-all duration-500 ease-out border border-[#CEC7BF] text-h4 text-white backdrop-blur-[7.5px] bg-[rgba(0,0,0,0.35)] rounded-full aspect-square hover:bg-[rgba(0,0,0,0.45)] h-[110px] md:h-[140px] mb-8 md:mb-16"
        >
          Enter
        </TransitionLink>
      </motion.div>
    </main>
  );
}
