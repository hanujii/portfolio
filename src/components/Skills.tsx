"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Web Development", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"] },
    { category: "AI & Data", items: ["Python", "Machine Learning", "Data Analysis", "Artificial Intelligence", "SQL"] },
    { category: "Pharma & Research", items: ["Pharmacovigilance", "Clinical Trials", "Drug Safety", "Research Metholodogy", "Medical Writing"] },
];

export default function Skills() {
    return (
        <section id="skills" className="relative w-full py-32 px-6 md:px-12 bg-[#0a0a0a] z-20 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-200 border-b border-white/10 pb-2 inline-block">{group.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill, itemIndex) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
