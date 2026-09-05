import Link from "next/link";
import { cn } from "@/lib/utils";

const CONTACT_GRID_CLASS =
  "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-b1 text-brand-5 mt-1";
const EMAIL_CLASS = "break-words";

export default function Footer() {
  return (
    <footer className="bg-brand-4 relative flex flex-col items-center overflow-hidden font-mona mt-10">
      {/* Top Section */}
      <div className="container w-full mx-auto flex flex-col xl:flex-row gap-16 xl:gap-[120px] px-5 sm:px-8 lg:px-12 xl:px-16 py-16 md:py-[100px]">
        {/* Enquiries */}
        <div className="flex-1 flex flex-col gap-8 md:gap-10">
          <h2 className="font-serif text-2xl md:text-[32px] font-semibold uppercase text-brand-6">
            Enquiries
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
            {/* Sale */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Sale</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6 whitespace-pre-line leading-snug">
                {"Sotheby's International\nKelly Brown"}
              </div>
              <div className={CONTACT_GRID_CLASS}>
                <div>M/</div>
                <Link href="tel:+64921471661" className="hover:opacity-70 transition-opacity">+64 9 21 471 661</Link>
                <div>E/</div>
                <Link href="mailto:kelly.brown@northnzsir.com" className={cn(EMAIL_CLASS, "hover:opacity-70 transition-opacity")}>kelly.brown@northnzsir.com</Link>
              </div>
            </div>

            {/* Developer */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Developer</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6 whitespace-pre-line leading-snug">
                {"Blue Sky Ltd\n "}
              </div>
              <div className={CONTACT_GRID_CLASS}>
                <div>M/</div>
                <Link href="tel:+64921471661" className="hover:opacity-70 transition-opacity">+64 9 21 471 661</Link>
                <div>E/</div>
                <Link href="mailto:kelly.brown@northnzsir.com" className={cn(EMAIL_CLASS, "hover:opacity-70 transition-opacity")}>kelly.brown@northnzsir.com</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="flex-1 flex flex-col gap-8 md:gap-10">
          <h2 className="font-serif text-2xl md:text-[32px] font-semibold uppercase text-brand-6">
            Project Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 xl:gap-x-16 2xl:gap-x-[120px] gap-y-8 md:gap-y-10">
            {/* Developer */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Developer</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                Blue Sky Ltd
              </div>
              <div className={CONTACT_GRID_CLASS}>
                <div>M/</div>
                <Link href="tel:+64921471661" className="hover:opacity-70 transition-opacity">+64 9 21 471 661</Link>
                <div>E/</div>
                <Link href="mailto:kelly.brown@northnzsir.com" className={cn(EMAIL_CLASS, "hover:opacity-70 transition-opacity")}>kelly.brown@northnzsir.com</Link>
              </div>
            </div>

            {/* Interior Design */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Interior Design</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                OneIdea
              </div>
              <div className={CONTACT_GRID_CLASS}>
                <div>M/</div>
                <Link href="tel:+64921471661" className="hover:opacity-70 transition-opacity">+64 9 21 471 661</Link>
                <div>E/</div>
                <Link href="mailto:kelly.brown@northnzsir.com" className={cn(EMAIL_CLASS, "hover:opacity-70 transition-opacity")}>kelly.brown@northnzsir.com</Link>
              </div>
            </div>

            {/* Architect */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Architect</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                Alchemy
              </div>
              <div className={CONTACT_GRID_CLASS}>
                <div>P/</div>
                <Link href="tel:+6492168118" className="hover:opacity-70 transition-opacity">+64 9 216 8118</Link>
                <div>M/</div>
                <Link href="tel:+64226775695" className="hover:opacity-70 transition-opacity">+64 22 677 5695</Link>
                <div>E/</div>
                <Link
                  href="mailto:sean.pinfold@alchemybespoke.co.nz"
                  className={cn(EMAIL_CLASS, "hover:opacity-70 transition-opacity")}
                >
                  sean.pinfold@alchemybespoke.co.nz
                </Link>
              </div>
            </div>

            {/* Builder */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Builder</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                Lewis Build
              </div>
              <div className={CONTACT_GRID_CLASS}>
                <div>P/</div>
                <Link href="tel:+6498880725" className="hover:opacity-70 transition-opacity">+64 9 888 0725</Link>
                <div>M/</div>
                <Link href="tel:+64225394725" className="hover:opacity-70 transition-opacity">+64 22 539 4725</Link>
                <div>E/</div>
                <Link href="mailto:ben@lewisbuild.co.nz" className={cn(EMAIL_CLASS, "hover:opacity-70 transition-opacity")}>ben@lewisbuild.co.nz</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-brand-3"></div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center gap-6 px-5 sm:px-8 lg:px-12 xl:px-16 py-16 md:py-[100px] container mx-auto">
        {/* Addresses */}
        <div className="w-full flex flex-col items-center gap-1 text-white text-h3! text-center font-mona!">
          <div>97 Ahumoana Drive &nbsp;|&nbsp; Weiti Bay</div>
          <div>Okura Bush &nbsp;|&nbsp; Auckland &nbsp;|&nbsp; New Zealand</div>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-[60px] md:h-[100px] bg-brand-3 my-2"></div>

        <div className="w-full">
          {/* AURUM */}
          <div className="font-serif text-[20vw] xl:text-hero leading-[0.9] text-white text-center uppercase">
            AURUM
          </div>

          {/* Visual Comms */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-white text-h3! font-mona! mt-4 md:mt-2">
            <div className="text-center md:text-left w-full md:w-auto">
              Visual Communications
            </div>
            <Link
              href="https://junn.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center md:text-right w-full md:w-auto hover:opacity-70 transition-opacity"
            >
              junn.com.au
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
