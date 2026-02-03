"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX);
        y.set(middleY);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ position: "relative", x: mouseX, y: mouseY }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </motion.div>
    );
}
