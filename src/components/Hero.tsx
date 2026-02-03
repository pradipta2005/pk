"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import SignatureName from "./SignatureName";
import MagneticButton from "./ui/MagneticButton";

const LiquidEther = dynamic(() => import("./LiquidEther"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative h-full w-full flex items-center justify-center overflow-hidden bg-obsidian">
            {/* Premium Liquid Ether Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <LiquidEther
                    colors={['#000000', '#1a1a1a', '#FFD700', '#FFFACD', '#DAA520']}
                    mouseForce={40}
                    cursorSize={120}
                    isViscous={false}
                    viscous={20}
                    autoDemo={true}
                    autoSpeed={0.4}
                    autoIntensity={2.5}
                    iterationsPoisson={8}
                    iterationsViscous={10}
                    resolution={0.2}
                    BFECC={false}
                />
            </div>

            {/* Noise Texture removed (Global applied in Layout) */}

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-gold-light/80 text-sm md:text-base tracking-[0.2em] uppercase mb-4 font-sans"
                >
                    Data Scientist <span className="font-serif italic text-gold mx-2 text-lg">&</span> Analytics Engineer
                </motion.h2>

                <div className="text-6xl md:text-8xl lg:text-9xl mb-8 relative">
                    {/* Glow effect behind text for better visibility */}
                    <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -z-10" />
                    <SignatureName />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="max-w-xl text-ivory/70 text-lg md:text-xl font-light leading-relaxed mb-12"
                >
                    I turn raw data into strategic clarity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <MagneticButton strength={0.25}>
                        <Link
                            href="#projects"
                            className="group relative px-8 py-4 bg-gold/10 border border-gold/20 text-gold overflow-hidden rounded-sm uppercase tracking-widest text-xs font-bold backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-obsidian hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] cursor-pointer inline-flex items-center justify-center min-w-[180px] z-50"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">View Projects</span>
                            <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[0.22,1,0.36,1]" />
                        </Link>
                    </MagneticButton>
                    <MagneticButton strength={0.25}>
                        <Link
                            href="#contact"
                            className="group px-8 py-4 border border-ivory/10 text-ivory/60 hover:text-ivory hover:border-ivory/30 hover:bg-ivory/5 transition-all duration-300 rounded-sm uppercase tracking-widest text-xs font-bold backdrop-blur-sm cursor-pointer inline-flex items-center justify-center min-w-[180px] z-50"
                        >
                            Contact Me
                        </Link>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
}
