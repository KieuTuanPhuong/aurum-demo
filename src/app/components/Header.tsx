"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TransitionLink } from "./TransitionLink";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from "./nav-links";

const NAV_GROUP_CLASS =
  "hidden lg:flex gap-10 xl:gap-14 uppercase tracking-widest font-mona text-xs text-b1! text-[#876E3D]";

export default function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const pointerEvents = useTransform(scrollY, [200, 201], ["none", "auto"]);
  const textY = useTransform(scrollY, [200, 400], ["100%", "0%"]);

  return (
    <motion.header
      style={{ opacity, pointerEvents }}
      className="px-5 sm:px-8 lg:px-12 xl:px-16 py-4 fixed top-0 left-0 w-full z-50 bg-stone-200 border-b border-stone-400"
    >
      <div className="container flex justify-between items-center mx-auto">
        <nav className={NAV_GROUP_CLASS}>
          {NAV_LINKS_LEFT.map((link) => (
            <TransitionLink
              key={link.label}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </TransitionLink>
          ))}
        </nav>

        <div className="overflow-hidden pt-1 pb-1">
          <motion.div
            style={{ y: textY }}
            className="text-h1 font-medium! text-black leading-none"
          >
            AURUM
          </motion.div>
        </div>

        <nav className={NAV_GROUP_CLASS}>
          {NAV_LINKS_RIGHT.map((link) => (
            <TransitionLink
              key={link.label}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </TransitionLink>
          ))}
        </nav>

        <MobileMenu className="text-black" />
      </div>
    </motion.header>
  );
}
