import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

const Home5 = () => {

    const projects = [
        {
            category: "RESIDENTIAL",
            title: "ROYAL STONE\nAPARTMENTS",
            desc: "Developed eco-friendly residential homes offering comfort, energy efficiency, and durable materials for long-term living.",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" // Abstract yellow building
        },
        {
            category: "COMMERCIAL",
            title: "CRYSTAL POINT\nVILLAS",
            desc: "Created a residential community combining aesthetic appeal, quality materials, and sustainable construction techniques.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" // Modern glass building
        }
    ]

    return (
        <section className="w-full bg-white pt-24 pb-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 xl:px-24">

                {/* Header Section (Label, Title, Arrows) */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">

                    {/* Left: Label & Title */}
                    <div className="flex flex-col flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 self-start"
                        >
                            <div className="bg-[#FFB800] px-4 py-2 font-bold text-sm tracking-wider uppercase text-black inline-flex items-center gap-2">
                                <span>//</span> FEATURED PROJECTS
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold text-black uppercase leading-[1.05] tracking-tight max-w-4xl"
                        >
                            Showcasing Exceptional<br />
                            Projects With Quality
                        </motion.h2>
                    </div>

                    {/* Right: Slider Navigation Arrows */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center gap-4 lg:pb-4 self-start lg:self-auto"
                    >
                        <button className="w-14 h-14 md:w-16 md:h-16 border border-gray-200 flex items-center justify-center text-black hover:bg-[#FFB800] hover:border-[#FFB800] transition-colors duration-300">
                            <ArrowLeftIcon className="w-6 h-6" />
                        </button>
                        <button className="w-14 h-14 md:w-16 md:h-16 border border-gray-200 flex items-center justify-center text-black hover:bg-[#FFB800] hover:border-[#FFB800] transition-colors duration-300">
                            <ArrowRightIcon className="w-6 h-6" />
                        </button>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                            className="w-full lg:w-1/2 flex flex-col group cursor-pointer relative"
                        >
                            {/* Image Container with Label inside */}
                            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden mb-[-80px] z-0">
                                <img
                                    src={project.image}
                                    alt={project.title.replace('\n', ' ')}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                />

                                {/* Category Label - overlayed on bottom left of image */}
                                <div className="absolute bottom-0 left-0 bg-[#F4F7F9] px-6 py-3 z-10">
                                    <span className="text-black font-extrabold text-xs tracking-widest uppercase">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* White Content Card - Pulling up to overlap the image */}
                            <div className="relative z-10 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 xl:p-12 self-start ml-0 w-[90%] md:w-[85%] lg:w-[90%] flex flex-col items-start transition-shadow duration-300 group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]">
                                <h3 className="text-black font-extrabold text-2xl md:text-3xl xl:text-4xl uppercase leading-[1.15] tracking-tight whitespace-pre-wrap mb-6 group-hover:text-[#FFB800] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light mb-0">
                                    {project.desc}
                                </p>

                                {/* Arrow Button / Box at bottom right of the white card */}
                                <div className="absolute bottom-0 right-0 w-14 h-14 md:w-16 md:h-16 bg-white overflow-hidden flex items-center justify-center border-l border-t border-gray-100">
                                    <div className="absolute inset-0 bg-[#FFB800] transform -translate-x-[101%] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0"></div>
                                    <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6 text-black relative z-10" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Home5