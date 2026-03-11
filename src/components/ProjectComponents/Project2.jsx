import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const projectsData = [
    {
        category: "COMMERCIAL",
        title: "PRESTIGE CENTRAL TOWERS",
        description: "Constructed a modern high-rise with innovative design, ensuring safety, sustainability, and exceptional quality throughout construction.",
        image: "project1"
    },
    {
        category: "DESIGN & BUILD",
        title: "MAPLEWOOD URBAN COMPLEX",
        description: "Developed eco-friendly residential homes offering comfort, energy efficiency, and durable materials for long-term living.",
        image: "project2"
    },
    {
        category: "NEW BUILD",
        title: "SUNRISE MEADOW HOMES",
        description: "Constructed a modern high-rise with innovative design, ensuring safety, sustainability, and exceptional quality throughout construction.",
        image: "project3"
    },
    {
        category: "RENOVATION",
        title: "HARBORLINE LIVING PROJECT",
        description: "Built luxury villas with contemporary design, spacious interiors, and lasting structural integrity for discerning clients.",
        image: "project4"
    },
];

const Project2 = () => {
    return (
        <section className="py-20 md:py-28 bg-[#f8f9fa] overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">
                
                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-10 xl:gap-8">
                    {projectsData.map((project, i) => (
                        <div key={i} className="group relative w-full h-[500px] sm:h-[600px] flex flex-col justify-end overflow-hidden">
                            
                            {/* Background Image Container */}
                            <div className="absolute top-0 right-0 w-[90%] h-[80%] overflow-hidden z-0">
                                <img 
                                    srcSet={`/sm/${project.image}.webp 400w, /md/${project.image}.webp 800w, /lg/${project.image}.webp 1200w`}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    src={`/lg/${project.image}.webp`} 
                                    alt={project.title} 
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                />
                            </div>

                            {/* Overlapping Content Box (Bottom Left) */}
                            <div className="relative z-10 w-[85%] bg-white mt-auto pt-8 pr-12 pb-6 pl-0 sm:pt-10 sm:pr-14 sm:pb-8 flex flex-col justify-end">
                                
                                {/* Category Tag (Top-Left of Image overlap) */}
                                <div className="absolute -top-[1.75rem] left-0 bg-[#eef1f6] px-4 py-1.5 z-20">
                                    <span className="text-[#111] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.05em]">
                                        {project.category}
                                    </span>
                                </div>
                                
                                <h3 className="font-heading font-black text-[#111] text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] leading-[1.1] mb-4 tracking-tight uppercase group-hover:text-[#F5B400] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-500 text-[13px] sm:text-[14px] leading-[1.65] font-medium max-w-[90%] pr-4 md:pr-0">
                                    {project.description}
                                </p>
                                
                                {/* Yellow Arrow Button */}
                                <div className="absolute bottom-0 right-0 w-[50px] h-[50px] bg-[#F5B400] flex items-center justify-center cursor-pointer">
                                    <ArrowUpRightIcon className="w-5 h-5 text-[#111] transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Project2
