"use client"

import type React from "react"
import { useState } from "react"
import SplitText from "../SplitText/SplitText"
import BlurText from "../BlurText/BlurText"
import AnimatedContent from "../AnimatedContent/AnimatedContent"
import GradientText from "../GradientText/GradientText"
import { sendToWhatsApp } from "../../../lib/whatsapp"
import Hyperspeed from "../Hyperspeed/Hyperspeed"

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name.trim() || !formData.message.trim()) {
            alert("Mohon isi nama dan pesan terlebih dahulu!")
            return
        }

        setIsSubmitting(true)

        // Simulasi loading untuk UX yang lebih baik
        setTimeout(() => {
            // Kirim data ke WhatsApp
            sendToWhatsApp(formData.name, formData.message)
            setIsSubmitting(false)

            // Tampilkan notifikasi sukses
            alert("Pesan berhasil disiapkan! Anda akan diarahkan ke WhatsApp.")

            // Reset form setelah berhasil
            setFormData({
                name: "",
                message: "",
            })
        }, 1000)
    }

    // Fungsi untuk preview pesan sebelum dikirim
    const handlePreview = () => {
        if (!formData.name.trim() || !formData.message.trim()) {
            alert("Mohon isi nama dan pesan terlebih dahulu untuk melihat preview!")
            return
        }

        const previewMessage = `Preview Pesan WhatsApp:

Halo Jati! 👋

Saya tertarik untuk berkolaborasi dengan Anda.

📝 Detail Kontak:
• Nama: ${formData.name}

💬 Pesan:
${formData.message}`

        alert(previewMessage)
    }

    return (
        <div className="relative min-h-screen py-24 overflow-hidden bg-[#000]">
            {/* Background Pattern */}
            <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full z-0">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: 'turbulentDistortion',
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xFFFFFF,
                            brokenLines: 0xFFFFFF,
                            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                            sticks: 0x03B3C3,
                        }
                    }}
                />
            </div>

            <div className="container mx-auto relative">
                {/* Header Section */}
                <div className="text-center mb-20">


                    <SplitText
                        text="Let's Connect"
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                        delay={50}
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.2}
                        rootMargin="-50px"
                    />

                    <BlurText
                        text="Punya proyek menarik atau ingin berkolaborasi? Mari diskusikan ide Anda dan wujudkan bersama!"
                        delay={30}
                        animateBy="words"
                        direction="top"
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Side - Contact Info */}
                    <div className="col-span-12 lg:col-span-5">
                        <AnimatedContent
                            distance={100}
                            direction="horizontal"
                            reverse={true}
                            duration={1}
                            ease="power2.out"
                            initialOpacity={0}
                            animateOpacity
                            threshold={0.3}
                        >
                            <div className="space-y-8">
                                {/* Contact Info Cards */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>

                                    {/* WhatsApp */}
                                    <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                        <div className="relative bg-[#19222D] border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                                                    <p className="text-gray-400">+62 821-7318-1404</p>
                                                    <p className="text-sm text-green-400">Biasanya respon dalam 1 jam</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                        <div className="relative bg-[#19222D] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">Email</h4>
                                                    <p className="text-gray-400">abynngaming@email.com</p>
                                                    <p className="text-sm text-blue-400">Untuk diskusi formal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                        <div className="relative bg-[#19222D] border border-gray-800 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">Lokasi</h4>
                                                    <p className="text-gray-400">Pekanbaru, Indonesia</p>
                                                    <p className="text-sm text-purple-400">Available for remote work</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold text-white">Follow Me</h4>
                                    <div className="flex gap-4">
                                        {[
                                            { name: "GitHub", icon: "🐙", color: "from-gray-600 to-gray-700" },
                                            { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700" },
                                            { name: "Instagram", icon: "📸", color: "from-pink-600 to-purple-600" },
                                            { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500" },
                                        ].map((social) => (
                                            <button
                                                key={social.name}
                                                className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200`}
                                            >
                                                <span className="text-xl">{social.icon}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="col-span-12 lg:col-span-7">
                        <AnimatedContent
                            distance={100}
                            direction="horizontal"
                            reverse={false}
                            duration={1}
                            ease="power2.out"
                            initialOpacity={0}
                            animateOpacity
                            threshold={0.3}
                            delay={0.2}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-[#19222D] border border-gray-800 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6F10E]/50 focus:border-[#C6F10E] transition-colors"
                                                placeholder="Masukkan nama lengkap Anda"
                                            />
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                                Pesan *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6F10E]/50 focus:border-[#C6F10E] transition-colors resize-none"
                                                placeholder="Ceritakan tentang proyek atau ide yang ingin Anda diskusikan..."
                                            />
                                        </div>

                                        {/* Button Group */}
                                        <div className="flex flex-col sm:flex-row gap-4">

                                            {/* Submit Button */}
                                            <button type="submit" disabled={isSubmitting} className="flex-1 group relative overflow-hidden">
                                                <GradientText
                                                    colors={["#40ffaa", "#C6F10E", "#40ffaa"]}
                                                    animationSpeed={2}
                                                    showBorder={false}
                                                    className={`w-full px-8 py-3 rounded-lg border border-[#C6F10E]/30 hover:border-[#C6F10E]/60 transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "group-hover:scale-100"
                                                        }`}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                                <circle
                                                                    className="opacity-25"
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="10"
                                                                    stroke="currentColor"
                                                                    strokeWidth="4"
                                                                ></circle>
                                                                <path
                                                                    className="opacity-75"
                                                                    fill="currentColor"
                                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                ></path>
                                                            </svg>
                                                            Mengirim...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Kirim via WhatsApp
                                                        </>
                                                    )}
                                                </GradientText>
                                            </button>
                                        </div>
                                    </form>

                                    {/* Info Text */}
                                    <div className="mt-6 p-4 bg-[#C6F10E]/10 border border-[#C6F10E]/20 rounded-lg">
                                        <p className="text-sm text-gray-300 text-center">
                                            <span className="text-[#C6F10E] font-medium">💡 Info:</span> Data yang Anda isi akan otomatis
                                            muncul di WhatsApp, jadi Anda tidak perlu mengetik ulang!. Jika Tidak muncul mohon diisi kembali, Terima Kasih 😀.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </div>
    )
}
