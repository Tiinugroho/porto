"use client"

import type React from "react"
import { useState } from "react"
import GradientText from "../GradientText/GradientText"
import AnimatedContent from "../AnimatedContent/AnimatedContent"

export default function Footer() {
    const [email, setEmail] = useState("")
    const [isSubscribing, setIsSubscribing] = useState(false)

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.trim()) return

        setIsSubscribing(true)

        // Simulasi subscribe
        await new Promise((resolve) => setTimeout(resolve, 1000))

        alert("Terima kasih! Anda akan mendapat update terbaru dari saya.")
        setEmail("")
        setIsSubscribing(false)
    }

    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    const services = [
        { name: "Web Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Mobile Apps", href: "#" },
        { name: "Consulting", href: "#" },
    ]

    const socialLinks = [
        {
            name: "GitHub",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            href: "https://github.com",
            color: "hover:text-gray-300",
        },
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: "https://linkedin.com",
            color: "hover:text-blue-400",
        },
        {
            name: "Instagram",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43c-.537.233-.99.542-1.44.992-.45.45-.76.903-.992 1.44-.226.5-.348 1.074-.382 2.021C2.175 6.99 2.162 7.397 2.162 11.017s.013 4.027.048 4.975c.034.947.156 1.521.382 2.021.233.537.542.99.992 1.44.45.45.903.76 1.44.992.5.226 1.074.348 2.021.382.948.035 1.355.048 4.975.048s4.027-.013 4.975-.048c.947-.034 1.521-.156 2.021-.382.537-.233.99-.542 1.44-.992.45-.45.76-.903.992-1.44.226-.5.348-1.074.382-2.021.035-.948.048-1.355.048-4.975s-.013-4.027-.048-4.975c-.034-.947-.156-1.521-.382-2.021-.233-.537-.542-.99-.992-1.44-.45-.45-.903-.76-1.44-.992-.5-.226-1.074-.348-2.021-.382C16.044.013 15.637 0 12.017 0zM12.017 2.162c3.584 0 4.01.014 5.425.048.31.014.478.064.59.107.148.058.254.127.365.238.111.111.18.217.238.365.043.112.093.28.107.59.034 1.415.048 1.841.048 5.425s-.014 4.01-.048 5.425c-.014.31-.064.478-.107.59-.058.148-.127.254-.238.365-.111.111-.217.18-.365.238-.112.043-.28.093-.59.107-1.415.034-1.841.048-5.425.048s-4.01-.014-5.425-.048c-.31-.014-.478-.064-.59-.107-.148-.058-.254-.127-.365-.238-.111-.111-.18-.217-.238-.365-.043-.112-.093-.28-.107-.59-.034-1.415-.048-1.841-.048-5.425s.014-4.01.048-5.425c.014-.31.064-.478.107-.59.058-.148.127-.254.238-.365.111-.111.217-.18.365-.238.112-.043.28-.093.59-.107 1.415-.034 1.841-.048 5.425-.048zm0 3.676c-3.74 0-6.773 3.033-6.773 6.773s3.033 6.773 6.773 6.773 6.773-3.033 6.773-6.773-3.033-6.773-6.773-6.773zm0 11.164c-2.426 0-4.391-1.965-4.391-4.391s1.965-4.391 4.391-4.391 4.391 1.965 4.391 4.391-1.965 4.391-4.391 4.391zm8.615-11.428c-.874 0-1.584-.71-1.584-1.584s.71-1.584 1.584-1.584 1.584.71 1.584 1.584-.71 1.584-1.584 1.584z" />
                </svg>
            ),
            href: "https://instagram.com",
            color: "hover:text-pink-400",
        },
        {
            name: "Twitter",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
            href: "https://twitter.com",
            color: "hover:text-blue-400",
        },
        {
            name: "WhatsApp",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306" />
                </svg>
            ),
            href: "https://wa.me/6281234567890",
            color: "hover:text-green-400",
        },
    ]

    return (
        <footer className="relative bg-[#0F1419] border border-gray-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                    }}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419] via-[#0F1419]/95 to-[#19222D]/50"></div>

            <div className="container mx-auto relative">
                {/* Main Footer Content */}
                <div className="py-16">
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={1}
                        ease="power2.out"
                        initialOpacity={0}
                        animateOpacity
                        threshold={0.3}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {/* Brand Section */}
                            <div className="lg:col-span-2">
                                <div className="mb-6">
                                    <GradientText
                                        colors={["#C6F10E", "#40ffaa", "#C6F10E"]}
                                        animationSpeed={3}
                                        showBorder={false}
                                        className="text-3xl font-bold"
                                    >
                                        Jati Nugroho
                                    </GradientText>
                                    <p className="text-gray-400 mt-2 text-lg">FullStack Developer</p>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                                    Mengubah ide menjadi solusi digital yang inovatif. Spesialisasi dalam pengembangan web modern dengan
                                    fokus pada pengalaman pengguna yang luar biasa.
                                </p>

                                {/* Newsletter */}
                                <div className="space-y-4">
                                    <h4 className="text-white font-semibold flex items-center gap-2">
                                        <span className="text-[#C6F10E]">📧</span>
                                        Stay Updated
                                    </h4>
                                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6F10E]/50 focus:border-[#C6F10E] transition-colors"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubscribing}
                                            className="px-6 py-2 bg-[#C6F10E] text-black font-medium rounded-lg hover:bg-[#C6F10E]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubscribing ? "..." : "Subscribe"}
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                    <span className="text-[#C6F10E]">🔗</span>
                                    Quick Links
                                </h4>
                                <ul className="space-y-3">
                                    {quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-[#C6F10E] transition-colors duration-200 flex items-center gap-2 group"
                                            >
                                                <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#C6F10E] transition-colors"></span>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                    <span className="text-[#C6F10E]">⚡</span>
                                    Services
                                </h4>
                                <ul className="space-y-3">
                                    {services.map((service) => (
                                        <li key={service.name}>
                                            <a
                                                href={service.href}
                                                className="text-gray-400 hover:text-[#C6F10E] transition-colors duration-200 flex items-center gap-2 group"
                                            >
                                                <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#C6F10E] transition-colors"></span>
                                                {service.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800"></div>

                {/* Bottom Footer */}
                <div className="py-8">
                    
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            {/* Copyright */}
                            <div className="text-center md:text-left">
                                <p className="text-gray-400 text-sm">© {currentYear} Jati Nugroho. All rights reserved.</p>
                                <p className="text-gray-500 text-xs mt-1">Built with ❤️ using Next.js, TypeScript & Tailwind CSS</p>
                            </div>
                        </div>
                </div>
            </div>
        </footer>
    )
}
