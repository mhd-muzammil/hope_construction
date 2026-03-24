import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative w-full h-[75vh] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/interior/interior21.jpeg"
                    alt="Interior Design - Hope Construction Projects"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-[1] bg-black/40"></div>

            {/* Subtle gradient overlays for depth */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-white font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase mb-8 md:mb-12"
                >
                    Projects
                </motion.h1>

                {/* Breadcrumb Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-0"
                >
                    <Link
                        to="/"
                        className="px-6 py-2.5 bg-white/90 hover:bg-white text-[#111111] text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300"
                    >
                        Home
                    </Link>
                    <span
                        className="px-6 py-2.5 bg-[#FFB703] text-[#111111] text-xs sm:text-sm font-semibold uppercase tracking-widest"
                    >
                        Projects
                    </span>
                </motion.div>
            </div>

            {/* Bottom caution tape accent */}
            {/* <div className="absolute bottom-0 left-0 right-0 z-10 h-1 caution-tape animate-stripe-slide"></div> */}
        </section>
    )
}

export default Hero
