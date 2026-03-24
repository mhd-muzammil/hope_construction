import React from 'react';
import { motion } from 'framer-motion';

const Home8 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full flex flex-col lg:flex-row bg-white lg:min-h-[700px]">
            {/* Left Image Area */}
            <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto overflow-hidden group">
               
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    srcSet="/sec7.png 400w, /sec7.png 800w, /sec7.png 1200w"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    src="/sec7.png"
                    alt="Construction worker on rebar"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
            </div>

            {/* Right Content Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16 sm:py-20 md:px-16 lg:px-20 xl:px-28 z-10">
                <motion.div
                    className="max-w-2xl mx-auto lg:mx-0 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="inline-block bg-[#FFC107] text-[#111] font-bold uppercase tracking-wider text-[11px] sm:text-xs md:text-sm px-4 py-2 mb-6 md:mb-8">
                        // OUR GUIDING VALUES
                    </motion.div>

                    {/* Heading */}
                    <motion.h2 variants={itemVariants} className="text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-[#111] leading-[1.05] mb-10 md:mb-14 tracking-tighter uppercase font-heading">
                        Committed to <br className="hidden sm:block" />
                        quality and <br className="hidden sm:block" />
                        integrity
                    </motion.h2>

                    {/* Icon Row */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-12">
                        {/* Box 1 */}
                        <div className="group">
                            <div className="flex items-start mb-4">
                                <div className="mr-4 sm:mr-5 text-[#111] transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 shrink-0">
                                    <svg width="36" height="36" className="md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 3h12l4 6-10 13L2 9Z" />
                                        <path d="M11 3 8 9l4 13" />
                                        <path d="M2 9h20" />
                                        <circle cx="17" cy="5" r="3" fill="white" stroke="#111" strokeWidth="1.5" />
                                        <path d="M16 5l1 1 2-2" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111] font-heading leading-tight transition-colors duration-300 group-hover:text-[#FFC107]">
                                    Quality <br /> Commitment
                                </h3>
                            </div>
                            <p className="text-gray-500 font-medium text-sm sm:text-[15px] leading-relaxed">
                                Delivering high-quality, reliable construction with excellence and precision
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="group">
                            <div className="flex items-start mb-4">
                                <div className="mr-4 sm:mr-5 text-[#111] transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 shrink-0">
                                    <svg width="36" height="36" className="md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                        <path d="M14 2v6h6" />
                                        <path d="m9 15 2 2 4-4" stroke="#FFC107" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111] font-heading leading-tight transition-colors duration-300 group-hover:text-[#FFC107]">
                                    Trusted <br /> Expertise
                                </h3>
                            </div>
                            <p className="text-gray-500 font-medium text-sm sm:text-[15px] leading-relaxed">
                                Providing reliable guidance built on experience, professionalism, and proven capability
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="w-full h-[1px] bg-gray-200 mb-8 md:mb-10"></motion.div>

                    {/* Features List */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 md:gap-y-4">
                        {[
                            "Committed to Quality Construction",
                            "Client Satisfaction Is Our Priority",
                            "Building Strong and Lasting Foundations",
                            "Reliable Project Delivery Every Time",
                            "Innovative Solutions for Every Project",
                            "Integrity and Trust in Every Build"
                        ].map((text, i) => (
                            <motion.div variants={itemVariants} key={i} className="flex items-start group cursor-pointer">
                                <div className="mt-0.5 sm:mt-1 mr-2.5 sm:mr-3 min-w-[18px] sm:min-w-[20px] text-[#FFC107] transform transition-transform duration-300 group-hover:scale-110 shrink-0">
                                    <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <span className="text-[13px] sm:text-[14px] font-bold text-[#111] leading-snug transition-colors duration-300 group-hover:text-[#FFC107]">
                                    {text}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>

            <style>{`
                .font-heading {
                    font-family: 'Inter', 'Roboto', sans-serif;
                }
            `}</style>
        </section>
    );
};

export default Home8;