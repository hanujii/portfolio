"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full py-32 px-6 md:px-12 bg-[#0a0a0a] z-20 text-white">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
                        Let's Create Together
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas.
                    </p>

                    <a
                        href="mailto:ayushgupta.creative@gmail.com"
                        className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors mb-20"
                    >
                        Get in Touch
                    </a>

                    <div className="flex justify-center gap-8">
                        {[
                            { icon: Github, href: "https://github.com" },
                            { icon: Linkedin, href: "https://linkedin.com" },
                            { icon: Instagram, href: "https://instagram.com/hanu30490" },
                            { icon: Twitter, href: "https://twitter.com" },
                            { icon: Mail, href: "mailto:ayushgupta.creative@gmail.com" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <social.icon size={32} />
                            </motion.a>
                        ))}
                    </div>

                    <footer className="mt-32 text-gray-600 text-sm">
                        © {new Date().getFullYear()} Creative Folio. All rights reserved.
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
