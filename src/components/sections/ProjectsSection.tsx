"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ExternalLink, Github } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Smart Door Lock System",
    description: "TechScan is a Project developed at Camarines Polytechnic Colleges, focused on building a Smart Door Lock System.",
    image: "/images/TechScan.png?height=200&width=350",
    longDescription:
      "TechScan is a Project developed at Camarines Polytechnic Colleges, focused on building a Smart Door Lock System that combines both software and hardware technologies. The system uses NFC card authentication integrated with a unique PIN code, providing a two-layer security feature for access control. Using the ACR122U NFC scanner, users can register their NFC cards into the system, pairing each with a specific PIN. When authenticated, the system communicates with a hardware device to trigger the door mechanism. A centralized dashboard displays real-time access logs, supports user registration, and generates detailed reports. TechScan demonstrates the practical integration of IoT, embedded hardware, and secure web-based systems.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Open Source Website",
    description: "SparkMe is a Project designed as an open-source educational website that offers a collection of readable files.",
    image: "/images/SparkMe.png?height=200&width=350",
    longDescription:
      "SparkMe is a Project designed as an open-source educational website that offers a collection of readable files and digital books for users. To enhance engagement, the platform includes a built-in Tic Tac Toe game for users who might need a break or light entertainment. Each uploaded book or file can have an associated quiz module, allowing users to test their understanding and practice what they've learned. The system also features automated report generation, providing insights into user activity and quiz performance. SparkMe combines learning, interactivity, and open access—making education both accessible and enjoyable..",
    technologies: ["React", "Firebase", "Redux", "Material UI", "Jest"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 3,
    title: "Lab Key Management System",
    description: "KeyCab is a Project developed to solve the recurring issue of unreturned laboratory keys.",
    image: "/images/KeyCab.png?height=200&width=350",
    longDescription:
      "KeyCab is a Project developed to solve the recurring issue of unreturned laboratory keys. It features a web-based system integrated with a smart key cabinet powered by a Raspberry Pi microcontroller. The cabinet uses ID and PIN code authentication to control access, ensuring that only authorized users can borrow keys. Once a key is accessed, the system automatically records the transaction, logging who borrowed which key and when. With real-time tracking, smart lock integration, and a secure hardware setup, KeyCab enhances key management efficiency and accountability within school laboratories.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Chart.js"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
]

type Project = {
  id: number
  title: string
  description: string
  image: string
  longDescription: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 py-16 space-y-8 scroll-section"
    >
      <div className="space-y-3 text-center animate-on-scroll">
        <h2 className="text-4xl font-bold relative inline-block">
          My Recent Projects
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[360px] h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
        </h2>
        <p className="text-lg leading-relaxed text-slate-300">
          I developed these projects by applying my knowledge in front-end development, using HTML, CSS, and JavaScript along with modern frameworks. I also implemented responsive design, optimized performance, and maintained clean and organized code throughout the process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative bg-background/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-foreground/10 hover:scale-[1.02] animate-on-scroll`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>

            {/* Image Section */}
            <div className="p-4 pt-6">
              <div className="relative h-40 w-full overflow-hidden rounded-xl border-2 border-gradient-to-r from-[#667eea]/20 via-[#764ba2]/20 to-[#f093fb]/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-[1px] -z-10"></div>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-background/50 backdrop-blur-sm">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Gradient Divider */}
            <div className="px-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-foreground/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] h-[2px] w-12 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 pt-4 relative">
              <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

              {/* Gradient Divider */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-foreground/5"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-r from-[#f093fb] via-[#764ba2] to-[#667eea] h-[1px] w-8 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => openProjectDetails(project)}
                  className="px-6 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-lg hover:from-[#764ba2] hover:to-[#f093fb] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Details
                </button>
                <div className="flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/60 hover:text-[#667eea] transition-all duration-300 hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/60 hover:text-[#f093fb] transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-on-scroll">
          <div className="bg-background/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-foreground/20 shadow-2xl flex flex-col">
            {/* Modal header with gradient - now with higher z-index and shadow */}
            <div className="sticky top-0 z-30 bg-gradient-to-r from-[#667eea]/10 via-[#764ba2]/10 to-[#f093fb]/10 backdrop-blur-md border-b border-foreground/10 p-6 flex justify-between items-center rounded-t-2xl shadow-md">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 text-foreground/60 hover:text-[#f5576c] transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              <div className="p-6 space-y-6">
                {/* Project Image Section */}
                <div className="p-2">
                  <div className="relative w-full max-h-64 overflow-hidden rounded-xl border-2 border-gradient-to-r from-[#667eea]/30 via-[#764ba2]/30 to-[#f093fb]/30 group">
                    <div className="w-full h-auto">
                      <Image
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        width={800}
                        height={300}
                        className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Gradient Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-foreground/10"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] h-[2px] w-16 rounded-full"></div>
                  </div>
                </div>

                {/* Project Description Section */}
                <div>
                  <p className="text-foreground/80 leading-relaxed text-lg">{selectedProject.longDescription}</p>
                </div>

                {/* Gradient Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-foreground/10"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-r from-[#f093fb] via-[#764ba2] to-[#667eea] h-[2px] w-16 rounded-full"></div>
                  </div>
                </div>

                {/* Technologies Section */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/20 rounded-full text-sm text-foreground/80 hover:from-[#667eea]/20 hover:to-[#764ba2]/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-foreground/10"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-r from-[#667eea] via-[#f093fb] to-[#764ba2] h-[2px] w-16 rounded-full"></div>
                  </div>
                </div>

                {/* Action Buttons Section */}
                <div className="flex justify-between pt-4 gap-4">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl hover:from-[#764ba2] hover:to-[#f093fb] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-foreground/20 text-foreground rounded-xl hover:bg-gradient-to-r hover:from-[#667eea]/10 hover:to-[#764ba2]/10 hover:border-[#667eea]/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
