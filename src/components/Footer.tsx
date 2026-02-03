"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Facebook, ArrowUp, Download } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (

        <footer className="relative bg-obsidian border-t border-gold/10 pt-32 pb-10 overflow-hidden snap-start snap-always">
            {/* Background Texture - Consistent Noise */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Gradient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8 lg:col-span-1">
                        <Link href="/" className="block group">
                            <h3 className="text-4xl md:text-5xl font-serif text-ivory tracking-tight group-hover:text-white transition-colors">
                                Pradipta <br />
                                <span className="text-gold italic font-light group-hover:tracking-wide transition-all duration-500">Khan.</span>
                            </h3>
                        </Link>
                        <p className="text-ivory/50 text-sm leading-relaxed max-w-xs font-light">
                            Turning raw data into strategic clarity.
                            <br />
                            Designing the future of analytics.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-8">
                        <h4 className="text-gold text-xs uppercase tracking-[0.3em] font-bold opacity-80">Explore</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-ivory/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group w-fit"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-gold transition-colors duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div className="space-y-8">
                        <h4 className="text-gold text-xs uppercase tracking-[0.3em] font-bold opacity-80">Connect</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/" },
                                { icon: Github, href: "https://github.com/pradipta2005" },
                                { icon: Facebook, href: "https://www.facebook.com/share/18GK4nxfT6/" },
                                { icon: Mail, href: "mailto:pradiptakhan005@gmail.com" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ivory/60 hover:text-obsidian hover:bg-gold hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>

                        <a href="/PradiptaKhan.pdf" download className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300 group">
                            <Download size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
                            <span className="text-xs uppercase tracking-[0.2em] font-bold">Download CV</span>
                        </a>
                    </div>

                    {/* Back to Top Column */}
                    <div className="flex flex-col items-start md:items-end justify-between h-full py-2">
                        <button
                            onClick={scrollToTop}
                            className="group flex flex-col items-center gap-2 text-gold/40 hover:text-gold transition-colors duration-500 text-[10px] uppercase tracking-[0.3em]"
                        >
                            <div className="w-12 h-20 rounded-full border border-white/10 flex items-start justify-center pt-2 group-hover:border-gold/50 transition-colors duration-500 overflow-hidden relative">
                                <ArrowUp size={16} className="group-hover:-translate-y-10 transition-transform duration-500" />
                                <ArrowUp size={16} className="absolute top-full group-hover:-translate-y-[45px] transition-transform duration-500 text-gold" />
                            </div>
                            Top
                        </button>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest text-ivory/30 font-medium">
                    <p>&copy; {currentYear} Pradipta Khan. / Architected with precision.</p>
                    <div className="flex items-center gap-3 select-none group">
                        <span className="h-[1px] w-6 bg-gold/30 group-hover:w-12 transition-all duration-700 ease-out"></span>
                        <span className="font-serif italic text-gold/50 text-xs md:text-sm tracking-wider group-hover:text-gold transition-colors duration-500">
                            Be Happy & Kind.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
