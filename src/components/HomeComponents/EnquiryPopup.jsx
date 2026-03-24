import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EnquiryPopup = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Build WhatsApp message
        const text = `Hi, I'm ${formData.name}.%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`
        window.open(`https://wa.me/917418828814?text=${text}`, '_blank')
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setIsOpen(false)
            setFormData({ name: '', phone: '', email: '', service: '', message: '' })
        }, 2000)
    }

    return (
        <>
            {/* Floating Enquiry Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-20 right-6 z-[999] bg-[#FFB800] hover:bg-[#e5a600] text-[#111] px-5 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-bold text-xs tracking-widest uppercase hidden sm:inline">Enquiry</span>
            </motion.button>

            {/* Popup Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="relative bg-white w-full max-w-lg shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-[#111] px-8 py-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-white font-extrabold text-xl uppercase tracking-tight">
                                        Get a Free Quote
                                    </h3>
                                    <p className="text-gray-400 text-xs mt-1 tracking-wide">
                                        We'll get back to you within 24 hours
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Form */}
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-5">
                                    <div className="flex flex-col sm:flex-row gap-5">
                                        <div className="flex-1">
                                            <label className="text-[#111] font-bold text-xs uppercase tracking-wider mb-2 block">Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your Name"
                                                className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 text-[#111] text-sm focus:outline-none focus:border-[#FFB800] transition-colors"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="text-[#111] font-bold text-xs uppercase tracking-wider mb-2 block">Phone *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 text-[#111] text-sm focus:outline-none focus:border-[#FFB800] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[#111] font-bold text-xs uppercase tracking-wider mb-2 block">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 text-[#111] text-sm focus:outline-none focus:border-[#FFB800] transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[#111] font-bold text-xs uppercase tracking-wider mb-2 block">Service Interested In</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 text-[#111] text-sm focus:outline-none focus:border-[#FFB800] transition-colors appearance-none"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Residential Construction">Residential Construction</option>
                                            <option value="Planning & Design">Planning & Design</option>
                                            <option value="Turnkey Construction">Turnkey Construction</option>
                                            <option value="Interior & Finishing">Interior & Finishing</option>
                                            <option value="Plot / Flat Purchase">Plot / Flat Purchase</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-[#111] font-bold text-xs uppercase tracking-wider mb-2 block">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Tell us about your project..."
                                            className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 text-[#111] text-sm focus:outline-none focus:border-[#FFB800] transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#FFB800] hover:bg-[#111] text-[#111] hover:text-white font-bold text-sm uppercase tracking-widest py-4 transition-all duration-300 mt-2"
                                    >
                                        Send Enquiry
                                    </button>
                                </form>
                            ) : (
                                <div className="px-8 py-16 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-[#111] font-extrabold text-xl uppercase tracking-tight mb-2">Thank You!</h4>
                                    <p className="text-gray-500 text-sm">Your enquiry has been sent. We'll contact you soon.</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default EnquiryPopup
