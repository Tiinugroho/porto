import Particles from "../Particles/Particles"
import EducationTimeline from "../AboutSection/EducationTimeline"
import EducationCards from "../AboutSection/EducationCards"
import SplitText from "../SplitText/SplitText"

const AboutSection = () => {
  return (
    <section className="min-h-screen relative bg-[#000]">
      {/* Background Particles */}
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <SplitText
            text="Tentang Saya"
            className="text-5xl font-bold text-white mt-10"
            delay={50}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Timeline - Left Side (6 columns) */}
          <div className="col-span-12 lg:col-span-6">
            <EducationTimeline />
          </div>

          {/* Card Swap - Right Side (6 columns) */}
          <div className="col-span-12 lg:col-span-6">
            <EducationCards />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
