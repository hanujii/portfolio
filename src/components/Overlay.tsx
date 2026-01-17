"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Opacity transforms
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
            {/* Section 1: Center */}
            <div className="sticky top-0 h-screen flex items-center justify-center px-4">
                <motion.div style={{ opacity: opacity1, y: y1 }} className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
                        Ayush Gupta.
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 font-light text-gray-400">
                        Pharma-Tech Innovator.
                    </p>
                </motion.div>
            </div>

            {/* Section 2: Left */}
            <div className="sticky top-0 h-screen flex items-center justify-start px-6 md:px-20 mt-[-100vh]">
                <motion.div style={{ opacity: opacity2, y: y2 }} className="max-w-xl md:max-w-2xl">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                        Merging Science <br /> & Technology.
                    </h2>
                </motion.div>
            </div>


            {/* Section 3: Right */}
            <div className="sticky top-0 h-screen flex items-center justify-end px-6 md:px-20 mt-[-100vh]">
                <motion.div style={{ opacity: opacity3, y: y3 }} className="max-w-xl md:max-w-2xl text-right">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                        From Clinical Data <br /> to Code.
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
