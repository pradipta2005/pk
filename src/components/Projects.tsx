"use client";
import { useRef } from "react";
// Forced update to clear cache
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import ParallaxHeading from "./ui/ParallaxHeading";

// Project Data (Keep exact existing data)
const projects = [
    {
        title: "Plotiva",
        subtitle: "No-Code Data Analytics Platform",
        description: "A democratized analytics engine enabling non-technical users to clean datasets, train machine learning models, and evaluate predictive results—all without writing a single line of code.",
        tags: ["Python", "Streamlit", "Pandas", "AutoML"],
        links: {
            github: "https://github.com/pradipta2005/Plotiva",
            demo: "https://plotiva.streamlit.app/"
        },
        type: "Web Application",
        color: "#0A0A0B", // Dark backing for contrast
        image: "/projects/plotiva_v2.png"
    },
    {
        title: "Customer Behavior",
        subtitle: "Analytics & Churn Prediction",
        description: "Comprehensive analysis of customer retention metrics. Designed KPI-driven dashboards to identify churn patterns and uncover revenue optimization opportunities.",
        tags: ["Data Analysis", "EDA", "Visualization", "BI"],
        links: {
            github: "https://github.com/pradipta2005/Customer-Behavoiur-Analysis",
            demo: null
        },
        type: "Case Study",
        color: "#0F0F10",
        image: "/projects/customer_behavior_v2.png"
    },
    {
        title: "Car Price Predictor",
        subtitle: "Regression Modeling Engine",
        description: "End-to-end deployment of a regression model. Features a custom Flask API for real-time inference, backed by rigorous data engineering pipelines.",
        tags: ["Python", "Flask", "Scikit-learn", "Regression"],
        links: {
            github: "https://github.com/pradipta2005/Car_Price_Predictor",
            demo: "https://car-price-predictor-l3al.onrender.com/"
        },
        type: "ML Deployment",
        color: "#141415",
        image: "/projects/car_prices_v2.png"
    }
];

const Card = ({
    i,
    title,
    subtitle,
    description,
    tags,
    links,
    image,
    progress,
    range,
    targetScale,
}: {
    i: number;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    links: { github: string; demo: string | null };
    image: string;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    // Parallax Tech Elements
    const yTech1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yTech2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 perspective-1000">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="flex flex-col relative w-full max-w-6xl h-[65vh] md:h-[70vh] bg-obsidian rounded-2xl border border-white/5 overflow-hidden shadow-2xl origin-top group/card"
            >
                {/* Tech Background Grid (Subtle Parallax) */}
                <motion.div style={{ y: yTech1 }} className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none" />

                {/* Decoration Border */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-20" />

                <div className="flex h-full flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
                    {/* Content Section (Left) */}
                    <div className="md:w-5/12 p-6 md:p-10 flex flex-col justify-between relative z-10 bg-obsidian/90 backdrop-blur-sm">

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/50 text-xs font-serif italic group-hover/card:border-gold/50 group-hover/card:text-gold transition-colors duration-500">
                                    0{i + 1}
                                </span>
                                <span className="text-gold/60 uppercase tracking-[0.2em] text-[10px] font-bold">
                                    {subtitle}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-[0.95] group-hover/card:translate-x-2 transition-transform duration-500">
                                {title}
                            </h2>

                            <p className="text-white/60 text-sm md:text-sm leading-relaxed mb-6 font-light">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider text-white/40 hover:text-white hover:border-white/20 transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-6">
                            {links.demo && (
                                <MagneticButton strength={0.2}>
                                    <a
                                        href={links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold px-4 py-2 hover:bg-gold/10 rounded-full transition-all relative z-50 cursor-pointer pointer-events-auto"
                                    >
                                        <span>Visit Site</span>
                                        <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-obsidian transition-all duration-300">
                                            <ArrowUpRight size={14} />
                                        </div>
                                    </a>
                                </MagneticButton>
                            )}
                            {links.github && (
                                <MagneticButton strength={0.2}>
                                    <a
                                        href={links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center gap-2 text-gold/90 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold px-4 py-2 hover:bg-white/5 rounded-full relative z-50 cursor-pointer pointer-events-auto"
                                    >
                                        <span>Code</span>
                                        <Github size={14} className="group-hover/btn:text-white transition-colors" />
                                    </a>
                                </MagneticButton>
                            )}
                        </div>
                    </div>

                    {/* Image Section (Right) */}
                    <div className="md:w-7/12 h-full relative overflow-hidden group/image">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                            <Image
                                fill
                                src={image}
                                alt="project"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                                className="object-cover transition-all duration-700 group-hover/card:scale-105 filter grayscale-[80%] group-hover/card:grayscale-0"
                            />
                            {/* Overlay Layers */}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-obsidian/30 to-obsidian opacity-60 pointer-events-none" />
                            <div className="absolute inset-0 bg-gold/5 mix-blend-overlay opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>

                        {/* Interactive Tech HUD Overlay */}
                        <div className="absolute top-6 right-6 flex flex-col items-end gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[10px] text-white/80 font-mono uppercase tracking-widest">Live System</span>
                            </div>
                            <div className="text-[10px] text-white/40 font-mono">
                                REF: {title.substring(0, 3).toUpperCase()}-{Math.abs(title.length * i * 37).toString().padStart(3, '0')}
                            </div>
                        </div>

                        {/* Center Interaction Hint */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-20 h-20 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center scale-0 group-hover/image:scale-100 transition-transform duration-300">
                                <span className="text-white text-[10px] uppercase tracking-widest font-bold">View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={container} className="relative mt-[20vh] mb-[20vh]" id="projects">
            {/* Section Header */}
            <div className="w-full flex flex-col items-center justify-center mb-32 pt-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                        Engineering Showcase
                    </span>
                    <ParallaxHeading speed={0.3}>
                        <h2 className="text-5xl md:text-8xl font-serif text-ivory font-bold tracking-tight">
                            Selected <span className="text-gold italic">Works</span>
                        </h2>
                    </ParallaxHeading>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-gold via-gold/50 to-transparent mx-auto mt-10" />
                </motion.div>
            </div>

            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}
