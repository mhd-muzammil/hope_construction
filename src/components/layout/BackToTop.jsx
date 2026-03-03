import React, { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

const BackToTop = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`
                fixed bottom-6 right-6 z-50
                w-12 h-12 rounded-full
                bg-[#FFB703] hover:bg-[#e5a503]
                text-[#111] shadow-lg
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                cursor-pointer
                ${visible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }
                hover:shadow-xl hover:scale-110
                active:scale-95
            `}
        >
            <ArrowUpIcon className="w-5 h-5" />
        </button>
    )
}

export default BackToTop
