import React from 'react'
import { ArrowUpRightIcon, ArrowUpIcon, PlayIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    return (
        <section className="relative w-full min-h-[100svh] flex items-center pt-24 lg:pt-0 overflow-hidden bg-[#050505]">
            {/* Background Image & Premium Overlays */}
            <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0 select-none"
            >
                <img
                    srcSet="/sm/hero-back.webp 400w, /md/hero-back.webp 800w, /lg/hero-back.webp 1200w"
                    sizes="100vw"
                    src="/lg/hero-back.webp"
                    alt="Hope Construction - Building Contractor in Tamil Nadu"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover opacity-80"
                />

                {/* Advanced Gradient Overlay for a sleek look */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30"></div>
            </motion.div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full lg:mb-0 pb-32 lg:pb-0">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl pt-8 sm:pt-0"
                >
                    {/* Modern Badge / Pill */}
                    <motion.div variants={textVariants} className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-10 shadow-sm cursor-pointer hover:bg-white/10 transition-colors">
                        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB800] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#FFB800]"></span>
                        </span>
                        <p className="text-gray-200 font-medium tracking-wide text-[10px] sm:text-xs md:text-sm uppercase">
                            Next-Gen Construction Solutions
                        </p>
                    </motion.div>

                    {/* Refined SaaS Typography */}
                    <motion.h1 variants={textVariants} className="text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[1.05] mb-4 sm:mb-8 tracking-tight font-sans">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Dreams</span><br />
                        With Quality & Trust.
                    </motion.h1>

                    <motion.p variants={textVariants} className="text-gray-400 text-sm sm:text-base md:text-lg max-w-[100%] sm:max-w-[90%] md:max-w-[650px] mb-8 sm:mb-12 leading-relaxed font-light">
                        From Plan to Key Handover – Complete Construction Solution. We deliver individual houses, villas, and turnkey projects customized to your vision.
                    </motion.p>

                    {/* Premium Buttons */}
                    <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 w-full sm:w-auto">
                        {/* Primary CTA */}
                        <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-[#050505] transition-all duration-300 bg-[#FFB800] hover:bg-white overflow-hidden shadow-md hover:shadow-lg rounded-sm w-full sm:w-auto">
                            <span className="relative z-10 tracking-widest text-xs sm:text-[13px] uppercase">Get Started</span>
                            <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                        </button>

                        {/* For Sales CTA */}
                        <Link to="/project?tab=sales" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-bold transition-all duration-300 border border-white/20 hover:border-[#FFB800] hover:bg-[#FFB800] hover:text-[#050505] text-white overflow-hidden shadow-md hover:shadow-lg rounded-sm w-full sm:w-auto">
                            <span className="relative z-10 tracking-widest text-xs sm:text-[13px] uppercase">For Sales</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Premium Experience Box - Positioned Bottom Right (Desktop Only) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="hidden lg:flex absolute bottom-0 right-0 z-20 w-[350px] xl:w-[420px] backdrop-blur-2xl bg-[#0a0a0a]/85 border-t border-l border-white/5 p-8 xl:p-12 flex-col justify-end transition-all duration-500 hover:bg-[#0a0a0a]/95"
            >
                {/* Subtle colored glow blur in corner */}
                <div className="absolute top-0 right-0 w-24 h-24 xl:w-32 xl:h-32 bg-[#FFB800]/5 blur-[40px] xl:blur-[60px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-baseline mb-1 xl:mb-2">
                        <span className="text-white text-[3.5rem] xl:text-[5.5rem] font-bold leading-none tracking-tighter">11</span>
                        <span className="text-[#FFB800] text-[2.5rem] xl:text-[4.5rem] leading-none font-light ml-1">+</span>
                    </div>
                    <h3 className="text-white font-semibold text-xs xl:text-sm uppercase tracking-widest mb-2 xl:mb-3 opacity-90">
                        Years of Excellence
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-[95%] xl:max-w-[90%] font-light">
                        Decades of unparalleled expertise, setting the benchmark for trusted construction services globally.
                    </p>
                </div>

                {/* Modern circular scroll action */}
                <div className="absolute bottom-8 right-8 xl:bottom-12 xl:right-12 w-10 h-10 xl:w-12 xl:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#050505] text-white transition-all duration-300 group shadow-sm">
                    <ArrowUpIcon className="w-4 h-4 xl:w-5 xl:h-5 transition-transform group-hover:-translate-y-1 stroke-[1.5]" />
                </div>
            </motion.div>

            {/* Mobile Experience Box - Below Content (Mobile/Tablet Only) */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="lg:hidden absolute bottom-0 left-0 w-full z-10 backdrop-blur-xl bg-[#0a0a0a]/90 border-t border-white/5 p-5 sm:p-8 shadow-2xl"
            >
                <div className="container mx-auto px-4 sm:px-6 flex flex-row items-center justify-between gap-4">
                    <div className="flex items-baseline shrink-0">
                        <span className="text-white text-3xl sm:text-5xl font-bold leading-none">11</span>
                        <span className="text-[#FFB800] text-2xl sm:text-4xl leading-none font-light ml-0.5">+</span>
                    </div>
                    <div className="text-right sm:text-left">
                        <h3 className="text-white font-semibold text-[10px] sm:text-sm uppercase tracking-wider sm:tracking-widest mb-0.5 sm:mb-1">
                            Years of Excellence
                        </h3>
                        <p className="hidden sm:block text-gray-400 text-xs leading-relaxed max-w-sm font-light">
                            Decades of unparalleled expertise, setting the benchmark globally.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero;