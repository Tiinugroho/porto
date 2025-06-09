// Add custom SVG icons
const GraduationCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 10v6M12 13l8.5-3L12 7l-8.5 3L12 13z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 15.6V10.4a16 16 0 0 0 12 0v5.2a16 16 0 0 1-12 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
)

interface TimelineItem {
  id: number
  year: string
  title: string
  institution: string
  location: string
  description: string
  type: "education" | "certification"
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2022 - Sekarang",
    title: "Sistem Informasi",
    institution: "Universitas Muhammadiyah Riau",
    location: "Pekanbaru, Indonesia",
    description: "Fokus pada Pengembangan Web, Proses Bisnis, dan Database Management.",
    type: "education",
  },
  {
    id: 2,
    year: "2017 - 2020",
    title: "Matematika dan Ilmu Pengetahuan Alam",
    institution: "SMAN 11 Pekanbaru",
    location: "Pekanbaru, Indonesia",
    description: "Matematika, Fisika, Kimia, dan Biologi.",
    type: "education",
  },
]

const EducationTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C6F10E] to-[#40ffaa]"></div>

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div key={item.id} className="relative flex items-start group">
            {/* Timeline Dot */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-[#19222D] border-4 border-[#C6F10E] rounded-full group-hover:border-[#40ffaa] transition-colors duration-300">
              <GraduationCapIcon />
            </div>

            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="bg-[#1a2332] border border-[#2a3441] rounded-lg p-6 group-hover:border-[#C6F10E] transition-all duration-300 hover:shadow-lg hover:shadow-[#C6F10E]/10">
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C6F10E] text-black text-sm font-semibold rounded-full mb-3">
                  <CalendarIcon />
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C6F10E] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-[#C6F10E] font-semibold mb-2">
                  <GraduationCapIcon />
                  {item.institution}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <MapPinIcon />
                  {item.location}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">{item.description}</p>

                {/* Type Badge */}
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      item.type === "education"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {item.type === "education" ? "Pendidikan" : "Sertifikasi"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationTimeline
