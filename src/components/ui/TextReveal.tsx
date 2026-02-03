"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    type?: "word" | "char" | "line";
}

export default function TextReveal({ children, className = "", delay = 0, type = "word" }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = true;

    const words = children.split(" ");
    const chars = children.split("");

    if (type === "char") {
        return (
            <span ref={ref} className={`inline-block ${className}`}>
                <span className="sr-only">{children}</span>
                <span aria-hidden="true">
                    {chars.map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                            transition={{
                                duration: 0.5,
                                delay: delay + index * 0.03,
                                ease: [0.2, 0.65, 0.3, 0.9],
                            }}
                            className="inline-block whitespace-pre"
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            </span>
        );
    }

    return (
        <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
            <span className="sr-only">{children}</span>
            <span aria-hidden="true" className="inline-flex flex-wrap gap-x-[0.25em]">
                {words.map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden">
                        <motion.span
                            className="inline-block"
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: delay + index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1], // Premium cubic bezier
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </span>
        </span>
    );
}
