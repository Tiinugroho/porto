"use client"

import Lanyard from "./components/Lanyard/Lanyard"
import RotatingText from "./components/RotatingText/RotatingText"
import SplitText from "./components/SplitText/SplitText"
import BlurText from "./components/BlurText/BlurText"
import AnimatedContent from "./components/AnimatedContent/AnimatedContent"
import Squares from "./components/Squares/Squares"
import GradientText from "./components/GradientText/GradientText"
import TechStackCarousel from "./components/TechStackCarousel/TechStackCarousel"
import AboutSection from "./components/AboutSection/AboutSection"
import CardSwap, { Card } from "./components/CardSwap/CardSwap"
import { downloadCV } from "../lib/download"
import ContactSection from "./components/ContactSection/ContactSection"
import Footer from "./components/Footer/footer"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      {/* Background Squares */}
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full z-0">
        <Squares speed={0.5} squareSize={40} direction="diagonal" borderColor="#444A29" hoverFillColor="#19222D" />
      </div>

      {/* Main Hero Section */}
      <div className="container mx-auto h-screen relative z-10">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-6 relative z-20">
            <div className="relative w-full h-full">
              <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
            </div>
          </div>

          <div className="col-span-6 relative z-10">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">I'm Ready For Shake the World</h1>
                    <RotatingText
                      texts={["Web Dev", "Web Design", "UI/UX", "Cool!"]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>

                <div className="flex flex-col items-start">
                  <SplitText
                    text="Hello, I'm Jati Nugroho!"
                    className="text-6xl font-semibold text-start"
                    delay={50}
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText
                    text="FullStack Dev!"
                    className="text-6xl font-semibold text-start text-[#C6F10E]"
                    delay={100}
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>

                <BlurText
                  text="Saya mengubah ide menjadi solusi yang dapat diakses dan digunakan dengan mudah. Setiap proyek yang saya kerjakan selalu berorientasi pada pengalaman pengguna yang luar biasa dan performa yang optimal. Mari kita ciptakan sesuatu yang luar biasa bersama!"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />

                <div className="flex items-center gap-4">
                  <button onClick={downloadCV} className="group relative overflow-hidden">
                    <GradientText
                      colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="px-8 py-6 rounded-lg border border-[#C6F10E]/30 hover:border-[#C6F10E]/60 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
                    >
                      Download CV
                    </GradientText>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Carousel */}
      <TechStackCarousel speed={30} direction="left" pauseOnHover={false} />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section - ReactBits Style Layout */}
      <div className="relative min-h-screen py-24 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header Section - Fixed Layout */}
          <div className="text-center mb-20">
            
            <SplitText
              text="My Latest Work"
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              delay={50}
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-50px"
            />

            <BlurText
              text="Preview Hasil Project dan Pekerjaan saya dalam beberapa tahun terakhir yang mengedepankan Kepuasan, Fungsionalitas dan Pelayanan."
              delay={30}
              animateBy="words"
              direction="top"
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* Left Side - Project Info & Stats */}
            <div className="col-span-12 lg:col-span-6">
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
                  {/* Featured Project Showcase */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-[#19222D] border border-gray-800 rounded-2xl p-8">
                      <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                        <img
                          src="/Project1.png"
                          alt="QasPro - Quality Assurance Application"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-[#C6F10E] rounded-full animate-pulse"></div>
                        <span className="text-[#C6F10E] text-sm font-medium uppercase tracking-wider">
                          Currently Featured
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">QasPro</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Sebuah Aplikasi Quality Assurance yang dirancang untuk membantu Program Studi dalam mengelola
                        dan mengawasi proses Pendataan Audit. Dengan fitur-fitur terkini, QasPro memungkinkan pengguna
                        untuk membuat, mengelola, dan melacak kasus Pendataan Audit dengan mudah. Aplikasi ini
                        menyediakan antarmuka yang intuitif dan responsif. Dengan QasPro, proses pengujian menjadi lebih
                        efisien dan terstruktur, membantu tim mencapai standar kualitas yang tinggi dalam Pendataan
                        Audit.
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <span>📅</span>
                            <span>2024</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>👥</span>
                            <span>5K+ Users</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </button>
                          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#C6F10E]/10 to-transparent border border-[#C6F10E]/20 rounded-xl p-6 hover:border-[#C6F10E]/40 transition-colors">
                      <div className="text-3xl font-bold text-[#C6F10E] mb-2">12+</div>
                      <div className="text-gray-300 text-sm">Projects Completed</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#40ffaa]/10 to-transparent border border-[#40ffaa]/20 rounded-xl p-6 hover:border-[#40ffaa]/40 transition-colors">
                      <div className="text-3xl font-bold text-[#40ffaa] mb-2">50K+</div>
                      <div className="text-gray-300 text-sm">Lines of Code</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                      <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                      <div className="text-gray-300 text-sm">Uptime</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-colors">
                      <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                      <div className="text-gray-300 text-sm">Support</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <GradientText
                    colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-6 rounded-lg border"
                  >
                    Lihat Lainnya
                  </GradientText>
                  </div>
                </div>
              </AnimatedContent>
            </div>

            {/* Right Side - CardSwap */}
            <div className="col-span-12 lg:col-span-6 relative">
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
                <div className="relative h-[600px]">
                  <CardSwap
                    width={400}
                    height={500}
                    cardDistance={40}
                    verticalDistance={50}
                    delay={4000}
                    pauseOnHover={true}
                    skewAmount={4}
                    easing="elastic"
                  >
                    {/* Project 1 - QasPro */}
                    <Card customClass="bg-gradient-to-br from-[#C6F10E]/20 to-[#40ffaa]/20 border-[#C6F10E]/30">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-[#C6F10E] rounded-xl flex items-center justify-center">
                            <span className="text-black font-bold text-xl">🔍</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-green-400 text-xs font-medium">LIVE</span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3">QasPro</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Quality Assurance application untuk mengelola dan mengawasi proses Pendataan Audit dengan
                            fitur-fitur modern dan antarmuka yang intuitif.
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>Laravel • MySQL • Bootstrap</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span>PHP • JavaScript • jQuery</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <span className="text-[#C6F10E] text-sm font-medium">2024</span>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Project 2 - E-Learning Platform */}
                    <Card customClass="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">🎓</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-blue-400 text-xs font-medium">BETA</span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3">E-Learning Platform</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Modern learning management system with interactive courses, progress tracking, and
                            AI-powered recommendations.
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>Next.js • Prisma • tRPC</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span>OpenAI • Stripe • AWS</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <span className="text-blue-400 text-sm font-medium">2024</span>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Project 3 - Mobile Banking App */}
                    <Card customClass="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">💳</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-green-400 text-xs font-medium">PROD</span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3">Mobile Banking App</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Secure mobile banking application with biometric authentication, real-time transactions, and
                            advanced security features.
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span>React Native • Expo • TypeScript</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>Node.js • MongoDB • JWT</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <span className="text-green-400 text-sm font-medium">2023</span>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Project 4 - AI Chat Bot */}
                    <Card customClass="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">🤖</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-purple-400 text-xs font-medium">AI</span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3">AI Customer Support</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Intelligent chatbot with natural language processing, context awareness, and seamless human
                            handoff capabilities.
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span>Python • FastAPI • OpenAI</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                              <span>React • Socket.io • Redis</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <span className="text-purple-400 text-sm font-medium">2024</span>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Project 5 - Design System */}
                    <Card customClass="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">🎨</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-orange-400 text-xs font-medium">OSS</span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3">Design System</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Comprehensive design system with reusable components, design tokens, and documentation for
                            consistent UI/UX.
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              <span>Storybook • Figma • Tokens</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span>React • Tailwind • Radix</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <span className="text-orange-400 text-sm font-medium">2023</span>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CardSwap>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
