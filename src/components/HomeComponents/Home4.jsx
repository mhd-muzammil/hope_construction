import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const Home4 = () => {
    return (
        <section className="w-full bg-white relative overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full min-h-[800px]">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[500px] lg:min-h-full">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full group"
                    >
                        <img
                            src="sec2img2.png"
                            alt="Construction workers on site"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </motion.div>
                </div>

                {/* Right Side - Content */}
                {/* Using a subtle very light blue/gray background to match the design */}
                <div className="w-full lg:w-1/2 bg-[#F4F7F9] px-8 py-16 md:px-16 md:py-24 lg:px-24 lg:py-32 flex flex-col justify-center">

                    {/* Yellow Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 self-start"
                    >
                        <div className="bg-[#FFB800] px-4 py-2 font-bold text-sm tracking-wider uppercase text-black inline-flex items-center gap-2">
                            <span>//</span> ABOUT COMPANY
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-black uppercase leading-[0.95] tracking-tight mb-8"
                    >
                        Innovative<br />
                        Solutions For<br />
                        Every Build
                    </motion.h2>

                    {/* Description Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
                    >
                        We deliver innovative solutions for every build,
                        combining modern technology and expert
                        craftsmanship to ensure exceptional results.
                    </motion.p>

                    {/* CTA Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-16"
                    >
                        <a href="#about" className="group inline-flex items-center gap-3 text-black font-extrabold text-sm tracking-widest uppercase hover:text-[#FFB800] transition-colors duration-300">
                            <ArrowUpRightIcon className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            ABOUT US NOW
                        </a>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full h-[1px] bg-gray-300 mb-12 origin-left"
                    ></motion.div>

                    {/* Mission & Vision Section */}
                    <div className="flex flex-col gap-10">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 group cursor-default"
                        >
                            <h4 className="text-black font-extrabold text-xl md:text-2xl uppercase tracking-tight min-w-[140px] group-hover:text-[#FFB800] transition-colors duration-300">
                                OUR MISSION
                            </h4>
                            <p className="text-gray-600 text-base leading-relaxed font-light">
                                Our mission is to create durable, efficient construction projects that prioritize safety, innovation, and customer satisfaction.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 group cursor-default"
                        >
                            <h4 className="text-black font-extrabold text-xl md:text-2xl uppercase tracking-tight min-w-[140px] group-hover:text-[#FFB800] transition-colors duration-300">
                                OUR VISION
                            </h4>
                            <p className="text-gray-600 text-base leading-relaxed font-light">
                                Our vision is to build innovative, sustainable environments that inspire growth and create long-term value.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home4