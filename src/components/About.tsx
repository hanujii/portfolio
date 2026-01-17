"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative w-full py-32 px-6 md:px-12 bg-[#121212] z-20 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        About Me
                    </h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                        I am a B.Pharma graduate bridging the gap between healthcare and artificial intelligence. My unique background allows me to approach problems with a scientific mindset while applying cutting-edge technology to create solutions.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                        My journey began in pharmaceutical sciences, exploring pharmacovigilance and clinical trials. Now, I am leveraging AI and Fullstack development to innovate within the life sciences sector. I believe the future of medicine lies in data and code.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                        When I'm not coding or studying AI models, you can find me diving deep into clinical research papers or exploring the latest advancements in web development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
