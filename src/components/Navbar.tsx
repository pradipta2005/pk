"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Navbar() {
    const { scrollY, scrollYProgress } = useScroll();
    const [isHero, setIsHero] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    // Track scroll to toggle between Hero Capsule and FAB
    useMotionValueEvent(scrollY, "change", (latest) => {
        // Switch to FAB when scrolled past 80% of the viewport (Hero section)
        const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
        if (latest > viewportHeight * 0.8) {
            setIsHero(false);
        } else {
            setIsHero(true);
            setMenuOpen(false); // Close menu if returning to Hero
        }
    });

    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const navLinks = [
        { name: "Home", href: "#hero", label: "Origin" },
        { name: "About", href: "#about", label: "Philosophy" },
        { name: "Education", href: "#education", label: "Foundation" },
        { name: "Skills", href: "#skills", label: "Arsenal" },
        { name: "Experience", href: "#experience", label: "Journey" },
        { name: "Projects", href: "#projects", label: "Case Studies" },
        { name: "Certifications", href: "#certifications", label: "Credentials" },
        { name: "Contact", href: "#contact", label: "Connect" },
    ];

    return (
        <>
            <AnimatePresence mode="wait">
                {isHero ? (
                    // --------------------------------------------------------------------------
                    //                                HERO CAPSULE                                
                    // --------------------------------------------------------------------------
                    <motion.nav
                        key="hero-navbar"
                        initial={{ y: -100, opacity: 0, x: "-50%" }}
                        animate={{ y: 0, opacity: 1, x: "-50%" }}
                        exit={{ y: -100, opacity: 0, x: "-50%", transition: { duration: 0.3 } }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-8 left-1/2 z-50 flex items-center gap-2 p-2 pl-6 pr-2 rounded-full border border-white/5 bg-obsidian/40 backdrop-blur-md shadow-lg shadow-black/10"
                    >
                        {/* Logo */}
                        <a href="#" className="font-serif font-bold text-gold tracking-tight mr-4 text-lg hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                            PK.
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-xs uppercase tracking-widest text-ivory/60 hover:text-gold hover:bg-white/5 rounded-full transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Toggle (Hero Mode) */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="md:hidden p-3 rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 cursor-pointer"
                        >
                            <Menu size={18} />
                        </button>
                    </motion.nav>
                ) : (
                    // --------------------------------------------------------------------------
                    //                                SCROLLED FAB                                
                    // --------------------------------------------------------------------------
                    <div className="fixed top-8 right-8 z-50">
                        <MagneticButton strength={0.2}>
                            <motion.button
                                key="scrolled-fab"
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: -180, transition: { duration: 0.3 } }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setMenuOpen(true)}
                                className="w-16 h-16 rounded-full bg-obsidian/60 text-gold shadow-[0_0_30px_rgba(212,175,55,0.2)] border border-white/10 cursor-pointer flex items-center justify-center backdrop-blur-xl group relative"
                            >
                                {/* Circular Scroll Progress */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="46" stroke="rgba(255, 215, 0, 0.1)" strokeWidth="3" fill="none" />
                                    <motion.circle
                                        cx="50"
                                        cy="50"
                                        r="46"
                                        stroke="#FFD700"
                                        strokeWidth="3"
                                        fill="none"
                                        style={{ pathLength: scrollYProgress }}
                                    />
                                </svg>

                                <Menu size={24} strokeWidth={2.5} className="relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                            </motion.button>
                        </MagneticButton>
                    </div>
                )}
            </AnimatePresence>

            {/* -------------------------------------------------------------------------- */}
            {/*                             NAVIGATION OVERLAY                             */}
            {/* -------------------------------------------------------------------------- */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-sm flex flex-col items-center justify-center"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-8 right-8 p-4 rounded-full bg-white/5 text-ivory hover:bg-gold hover:text-obsidian transition-all duration-300 cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        {/* Background Noise for Texture */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                        {/* Menu Items */}
                        <div className="flex flex-col gap-6 md:gap-8 text-center relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: hoveredLink && hoveredLink !== link.name ? 0.2 : 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                                    onClick={() => setMenuOpen(false)}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className="group relative cursor-pointer"
                                >
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Label (Left aligned for visual balance) */}
                                        <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-gold/40 group-hover:text-gold transition-colors duration-300 w-24 text-right">
                                            {link.label}
                                        </span>

                                        {/* Main Text */}
                                        <span className="block text-4xl md:text-6xl font-serif text-ivory transition-all duration-500 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-white">
                                            {link.name}
                                        </span>

                                        {/* Label (Right aligned for mobile/balance) */}
                                        <span className="md:hidden block text-[10px] uppercase tracking-[0.3em] text-gold/40 group-hover:text-gold transition-colors duration-300 mt-1">
                                            {link.label}
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
