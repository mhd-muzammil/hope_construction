import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
    { src: '/project1.webp', alt: 'Prestige Central Towers' },
    { src: '/project2.webp', alt: 'Maplewood Urban Complex' },
    { src: '/project3.webp', alt: 'Sunrise Meadow Homes' },
    { src: '/project4.webp', alt: 'Harborline Living Project' },
    { src: '/project6.jpeg', alt: 'Project 6' },
    { src: '/project7.jpeg', alt: 'Project 7' },
    { src: '/project8.jpeg', alt: 'Project 8' },
    { src: '/project10 (1).jpeg', alt: 'Project 10-1' },
    { src: '/project10 (2).jpeg', alt: 'Project 10-2' },
    { src: '/project10 (3).jpeg', alt: 'Project 10-3' },
    { src: '/project10 (4).jpeg', alt: 'Project 10-4' },
    { src: '/project10 (5).jpeg', alt: 'Project 10-5' },
]

const videos = [
    { src: '/project11.mp4', title: 'Project Video 1' },
    { src: '/project9.mp4', title: 'Project Video 2' },
    { src: '/project5.mp4', title: 'Project Video 3' },
]

const ProjectMediaGallery = () => {
    const [activeTab, setActiveTab] = useState('photos')
    const [lightbox, setLightbox] = useState({ open: false, src: '', type: '' })

    const openLightbox = (src, type) => setLightbox({ open: true, src, type })
    const closeLightbox = () => setLightbox({ open: false, src: '', type: '' })

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-[#F5B400] font-bold text-xs tracking-[0.2em] uppercase mb-3"
                    >
                        Our Gallery
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-heading font-black text-[#111] text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] tracking-tight uppercase"
                    >
                        Photos & Videos
                    </motion.h2>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('photos')}
                        className={`relative px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden group ${
                            activeTab === 'photos'
                                ? 'bg-[#F5B400] text-[#111] shadow-lg shadow-[#F5B400]/25'
                                : 'bg-[#f1f1f1] text-[#555] hover:bg-[#e5e5e5]'
                        }`}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Photos
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('videos')}
                        className={`relative px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden group ${
                            activeTab === 'videos'
                                ? 'bg-[#F5B400] text-[#111] shadow-lg shadow-[#F5B400]/25'
                                : 'bg-[#f1f1f1] text-[#555] hover:bg-[#e5e5e5]'
                        }`}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Videos
                        </span>
                    </button>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'photos' && (
                        <motion.div
                            key="photos"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {photos.map((photo, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-100"
                                    onClick={() => openLightbox(photo.src, 'photo')}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="w-12 h-12 rounded-full bg-[#F5B400] flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Bottom Label */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white text-sm font-semibold">{photo.alt}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'videos' && (
                        <motion.div
                            key="videos"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {videos.map((video, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="relative aspect-video bg-[#111] overflow-hidden shadow-xl">
                                        <video
                                            src={video.src}
                                            controls
                                            preload="metadata"
                                            className="w-full h-full object-cover"
                                            poster=""
                                        />
                                    </div>
                                    {/* Video Title Bar */}
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#F5B400] flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#111]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-heading font-bold text-[#111] text-base sm:text-lg uppercase tracking-tight">
                                            {video.title}
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox.open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 text-white hover:text-[#F5B400] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {lightbox.type === 'photo' ? (
                                <img
                                    src={lightbox.src}
                                    alt="Enlarged view"
                                    className="w-full h-auto max-h-[85vh] object-contain"
                                />
                            ) : (
                                <video
                                    src={lightbox.src}
                                    controls
                                    autoPlay
                                    className="w-full h-auto max-h-[85vh]"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ProjectMediaGallery
