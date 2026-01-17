"use client";

import { motion } from "framer-motion";

export default function Preloader() {
    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white"
        >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                >
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                </motion.div>

                <p className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase">
                    Loading Experience
                </p>
            </div>
        </motion.div>
    );
}
