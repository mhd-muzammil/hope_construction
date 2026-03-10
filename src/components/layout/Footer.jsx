import React from 'react'
import { Link } from 'react-router-dom'

const quickLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Features', href: '/' },
    { label: 'Solutions', href: '/service' },
    { label: 'Tutorials', href: '/' },
    { label: 'Pricing', href: '/' },
]

const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/' },
    { label: 'News', href: '/blog' },
    { label: 'Media Kit', href: '/' },
    { label: 'Contact', href: '/contact' },
]

const resourceLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'Help Center', href: '/' },
    { label: 'Tutorials', href: '/' },
    { label: 'Support', href: '/contact' },
    { label: 'Services', href: '/service' },
]

const collaborateLinks = [
    { label: 'Partners', href: '/' },
    { label: 'Partners Program', href: '/' },
    { label: 'Affiliate Program', href: '/' },
    { label: 'Community', href: '/' },
    { label: 'HR Partner Program', href: '/' },
]

const socials = ['Facebook', 'Twitter', 'Instagram', 'Pinterest']

const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] text-white overflow-hidden">

            {/* ══════════ MAIN FOOTER ══════════ */}
            <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 pt-16 md:pt-20 pb-12 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

                    {/* ── Brand Column ── */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <Link to="/" className="inline-flex items-center gap-4 mb-6 group">
                            <img src="/logo.png" alt="Hope Construction Logo" className="h-20 md:h-24 w-auto object-contain" />
                            <span className="font-heading font-black text-white text-[1.15rem] tracking-[0.04em] uppercase">
                                Hope Construction
                            </span>
                        </Link>

                        <p className="text-white/40 text-[13px] leading-[1.7] mb-5 max-w-[260px]">
                            349/B1
Vallam New Colony, Brindha Nagar
Chengalpattu, Tamil Nadu,<br />
                             India, 603001
                        </p>

                        <p className="text-white font-bold text-[14px] tracking-[0.02em] mb-2">
                            +91 7418828814, +91 9025787074
                        </p>
                        <a
                            href="mailto:Hopeconstruction81@gmail.com"
                            className="text-white/50 text-[13px] hover:text-[#FFB703] transition-colors duration-300"
                        >
                            Hopeconstruction81@gmail.com
                        </a>
                    </div>

                    {/* ── Link Columns ── */}
                    <LinkColumn title="Quick Links" links={quickLinks} color="#FFB703" />
                    <LinkColumn title="Our Company" links={companyLinks} color="#00B4D8" />
                    <LinkColumn title="Resources" links={resourceLinks} color="#06D6A0" />
                    <LinkColumn title="Collaborate" links={collaborateLinks} color="#EF476F" />
                </div>
            </div>

            {/* ══════════ BOTTOM BAR ══════════ */}
            <div className="border-t border-white/10">
                <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {socials.map((s) => (
                            <a
                                key={s}
                                href="#"
                                className="text-white/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] hover:text-[#FFB703] transition-colors duration-300"
                            >
                                {s}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-white/30 text-[11px] sm:text-[12px] tracking-[0.04em]">
                        Copyright © 2025 <span className="text-white/60 font-bold">Hope.</span> All rights reserved
                    </p>

                    {/* Legal Links */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        {[
                            { label: 'Privacy Policy', href: '/privacy-policy' },
                            { label: 'Contact', href: '/contact' },
                            { label: 'Terms and Conditions', href: '/terms-conditions' }
                        ].map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="text-white/40 text-[10px] sm:text-[11px] font-medium tracking-[0.04em] hover:text-white/70 transition-colors duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════ GIANT BRAND TEXT ══════════ */}
            <div className="relative overflow-hidden select-none pointer-events-none" style={{ height: '280px' }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                    <span
                        className="font-heading font-black uppercase text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] leading-none tracking-[-0.03em]"
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '4px rgba(255,255,255,0.08)',
                            textStroke: '4px rgba(255,255,255,0.08)',
                        }}
                    >
                        HOPE
                    </span>
                </div>
            </div>
        </footer>
    )
}

/* ── Reusable Link Column ── */
const LinkColumn = ({ title, links, color }) => (
    <div>
        <h4 className="font-heading font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.14em] mb-6" style={{ color }}>
            // {title}
        </h4>
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        to={link.href}
                        className="text-white/45 text-[13px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default Footer
