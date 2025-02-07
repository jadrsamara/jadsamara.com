import Header from "./components/Header"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 pt-24">
        <section id="about" className="py-16 space-y-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
I'm a Site Reliability Engineer (SRE) passionate about building scalable, high-performing, and reliable systems. </p> 
<p className="text-lg text-gray-700">Currently, I work at 
<a 
  href="https://harri.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800"
> Harri</a>, where I focus on ensuring system uptime, automating operations, and optimizing cloud costs through FinOps. My expertise spans across cloud infrastructure, observability, performance tuning, and automation.
          </p>
          <p className="text-lg text-gray-700">
Beyond my professional role, I enjoy experimenting with new technologies and building personal projects that blend reliability engineering with creative problem-solving. My projects include performance monitoring setups, adaptive streaming solutions, and automation tools—all designed to enhance efficiency and user experience.
          </p>
          <p className="text-lg text-gray-700">
I'm always looking to connect with like-minded professionals, share knowledge, and take on new challenges. Feel free to check out my work or reach out!
          </p>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={project.isHidden ? "hidden" : "text-blue-600 hover:text-blue-800"}           
                  >
                    View Project
                  </a>
                  <p></p>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Github
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 py-4">Feel free to reach out for collaborations, questions, or just to connect! I'm always interested in new challenges.</p>
          <div className="flex flex-col space-y-4">
            <a href="mailto:jadrsamara@gmail.com" className="flex items-center text-gray-700 hover:text-gray-900">
              <Mail size={24} className="mr-2" />
              jadrsamara@gmail.com
            </a>
            <a
              href="https://github.com/jadrsamara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Github size={24} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jadrsamara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Linkedin size={24} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Jad Samara. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "Numble",
    description: "Numble نمبل Game is a web app where users guess a random number with visual feedback. It features email authentication via Mailjet, performance monitoring with New Relic, uptime tracking with Better Stack, and security and caching with Cloudflare.",
    image: "https://www.numble.one/static/android-chrome-512x512.png",
    link: "https://numble.one/",
    github_link: "https://github.com/jadrsamara/numble",
  },
  {
    title: "DASH-compatible Streaming",
    description: "Adaptive bitrate video streaming, encoding videos with FFMPEG and MP4Box to create DASH-compatible streams. Tested under simulated poor network conditions to ensure smooth playback. The project and encoded videos are hosted on GitHub Pages.",
    image: "https://raw.githubusercontent.com/jadrsamara/Multimedia/refs/heads/main/thumbnail.png",
    link: "https://jadrsamara.github.io/Multimedia/",
    github_link: "https://github.com/jadrsamara/Multimedia"
  },
  {
    title: "WinLayoutSaver for Windows",
    description: "A Python app using ctypes to call functions in DLLs or shared libraries, enabling automated management of multiple application window placements and saving/loading configurations. Multi-screen setup compatibility.",
    image: "https://user-images.githubusercontent.com/77105910/180623331-3d7f4f3b-b3df-47b4-b140-06589ef6a6de.png",
    github_link: "https://github.com/jadrsamara/Windows-Manager",
    isHidden: true,
  },
  {
    title: "Smart Farming System with Real-Time Analytics Dashboard",
    description: "Developed a smart greenhouse system utilizing IoT to monitor and control environmental conditions, enhancing agricultural efficiency.",
    image: "https://raw.githubusercontent.com/jadrsamara/Paliot/refs/heads/main/smart_greenhouse.png",
    link: "https://paliot.rf.gd/",
    github_link: "https://github.com/jadrsamara/Paliot"
  },
  {
    title: "AI-Genetic Algorithms - Graduation Projects Distribution",
    description: "Developed an AI-driven system to automate the distribution of graduation projects using Genetic Algorithms, optimizing student-project matching based on preferences.",
    image: "https://raw.githubusercontent.com/jadrsamara/AI-Genetic-algorithms/main/assets/10.png",
    github_link: "https://github.com/jadrsamara/AI-Genetic-algorithms",
    isHidden: true,
  },
]

