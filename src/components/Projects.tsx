"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Clinical Trial Tracker",
        category: "HealthTech App",
        description: "A centralized dashboard for monitoring clinical trial phases and patient data.",
    },
    {
        id: 2,
        title: "PharmaVigil AI",
        category: "AI Solution",
        description: "Machine learning model to detect adverse drug reactions from reports.",
    },
    {
        id: 3,
        title: "MediConnect",
        category: "Web Platform",
        description: "Bridging the gap between patients and specialized pharmaceutical care.",
    },
];

export default function Projects() {
    return (
        <section id="work" className="relative w-full py-32 px-6 md:px-12 bg-[#121212] z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{project.category}</p>
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative gradient glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/30 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
