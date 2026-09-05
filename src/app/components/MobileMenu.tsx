"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TransitionLink } from "./TransitionLink";
import { NAV_LINKS } from "./nav-links";

const subscribeNoop = () => () => {};

interface MobileMenuProps {
  /** Extra classes for the trigger button (e.g. icon colour). */
  className?: string;
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  // false on the server, true once hydrated (portal needs document)
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  // Lock page scroll while the overlay is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col bg-stone-200 text-black"
        >
          <div className="flex items-center justify-between border-b border-stone-400 px-5 py-4 sm:px-8">
            <span className="text-h1 font-medium! leading-none">AURUM</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="-mr-2 p-2 text-black transition-opacity hover:opacity-70"
            >
              <X className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex grow flex-col justify-center gap-8 px-5 py-10 sm:px-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <TransitionLink
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-h1 uppercase tracking-widest text-[#876E3D] transition-opacity hover:opacity-70"
                >
                  {link.label}
                </TransitionLink>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-col gap-1 border-t border-stone-400 px-5 py-6 text-b2 uppercase tracking-widest text-brand-5 sm:px-8">
            <span>97 Ahumoana Drive, Weiti Bay</span>
            <span>House and Land &nbsp;|&nbsp; 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn(
          "-mr-2 p-2 transition-opacity hover:opacity-70 lg:hidden",
          className,
        )}
      >
        <Menu className="size-6" strokeWidth={1.5} />
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
