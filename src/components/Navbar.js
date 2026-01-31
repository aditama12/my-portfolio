"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skill", href: "#skill" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-8 w-full z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-6 md:gap-8 bg-black/50 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[12px] md:text-[13px] font-bold text-slate-400 hover:text-cyan-400 transition-all uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}
      </motion.nav>
    </div>
  );
}
