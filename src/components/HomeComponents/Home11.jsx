import React from 'react';
import { motion } from 'framer-motion';

const Home11 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative w-full flex flex-col bg-white overflow-hidden group/section min-h-[600px]">

            {/* Background layers - Hidden on small mobile to keep focus on text, visible from LG up */}
            <div className="absolute inset-0 flex flex-col lg:flex-row z-0">
                <div className="w-full lg:w-1/2 bg-[#f4f9fd] h-full"></div>
                <div className="w-full lg:w-1/2 h-full relative overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover/section:bg-transparent pointer-events-none"></div>
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        src="/home11-bg.png"
                        alt="Construction Team"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover/section:scale-105 transition-transform duration-[2.5s] ease-out"
                    />
                </div>
            </div>

            {/* Main Content Wrapper */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col flex-grow">
                <div className="flex flex-col lg:flex-row w-full flex-grow">

                    {/* LEFT COLUMN: Content + Contact Info */}
                    <div className="w-full lg:w-1/2 flex flex-col bg-[#f4f9fd] lg:bg-transparent">

                        {/* Upper Content Area */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="px-6 py-16 sm:px-12 md:px-16 lg:pl-20 xl:pl-28 lg:pr-10 lg:pt-32 xl:pt-40 flex-grow"
                        >
                            {/* Badge */}
                            <motion.div variants={itemVariants} className="inline-flex items-center bg-[#FFC107] text-[#111] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs px-4 py-2 mb-8 shadow-sm">
                                <span className="mr-2">//</span> LET'S WORK TOGETHER
                            </motion.div>

                            {/* Heading */}
                            <motion.h2 variants={itemVariants} className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.8rem] font-black text-[#111] leading-[0.95] mb-8 tracking-tighter uppercase font-heading italic lg:not-italic">
                                Connect with <br />
                                our team today
                            </motion.h2>

                            <motion.p variants={itemVariants} className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                                Contact our team today for reliable support, clear communication, and professional assistance with your construction needs.
                            </motion.p>

                            {/* Action Link */}
                            <motion.button variants={itemVariants} className="flex items-center group cursor-pointer appearance-none bg-transparent border-none p-0">
                                <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center mr-4 group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all duration-300">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                    </svg>
                                </div>
                                <span className="text-sm font-black text-[#111] uppercase tracking-widest border-b-2 border-transparent group-hover:border-[#FFC107] transition-all">
                                    JOIN US NOW
                                </span>
                            </motion.button>
                        </motion.div>

                        {/* Integrated Contact Row (Pinned to bottom of left col on desktop) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row w-full mt-auto"
                        >
                            {/* Phone Box */}
                            <div className="flex-1 bg-[#FFC107] p-8 sm:p-10 lg:pl-20 xl:pl-28 flex flex-col justify-center border-r border-black/5">
                                <span className="text-[10px] font-bold text-[#111]/70 mb-1 uppercase tracking-widest">Call Us</span>
                                <a href="tel:+917418828814" className="text-lg sm:text-base md:text-lg xl:text-xl font-black text-[#111] hover:opacity-80 transition-opacity">
                                    +91 7418828814 <br className="hidden lg:block"/> +91 9025787074
                                </a>
                            </div>

                            {/* Email Box */}
                            <div className="flex-1 bg-[#111] p-8 sm:p-10 lg:px-10 flex flex-col justify-center">
                                <h3 className="text-gray-400 font-medium text-sm lg:text-base mb-2">EMAIL US</h3>
                                <a href="mailto:Hopeconstruction81@gmail.com" className="text-xl sm:text-lg md:text-xl xl:text-2xl font-black text-white hover:text-[#FFC107] transition-colors break-all">
                                    HOPECONSTRUCTION81@GMAIL.COM
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Just Image Space (Visible on desktop) */}
                    <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-0 relative lg:block">
                        {/* On mobile, this acts as an image spacer to show the background */}
                    </div>
                </div>
            </div>

            {/* Animated Hazard Border */}
            <div className="w-full h-4 sm:h-6 relative z-30 bg-hazard-stripes shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"></div>

            <style jsx>{`
                .bg-hazard-stripes {
                    background-image: repeating-linear-gradient(
                        -45deg,
                        #FFC107,
                        #FFC107 20px,
                        #111 20px,
                        #111 40px
                    );
                    background-size: 56.57px 56.57px;
                    animation: stripe-marquee 2s linear infinite;
                }
                
                @keyframes stripe-marquee {
                    0% { background-position: 0 0; }
                    100% { background-position: 56.57px 0; }
                }

                .font-heading {
                    font-family: 'Inter', system-ui, sans-serif;
                }
            `}</style>
        </section >
    );
};

export default Home11;