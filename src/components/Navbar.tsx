"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Code } from "lucide-react";

const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "About", icon: User, href: "#about" },
    { name: "Work", icon: Briefcase, href: "#work" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs md:max-w-md">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                className="flex items-center justify-between gap-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg ring-1 ring-black/5"
            >
                {navItems.map((item) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 md:p-3 rounded-full text-white/80 hover:text-white transition-colors relative group"
                        aria-label={item.name}
                    >
                        <item.icon size={20} strokeWidth={2} className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none mb-2 hidden md:block">
                            {item.name}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}
