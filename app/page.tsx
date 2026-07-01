import Header from "./components/Header"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero / About */}
        <section id="about" className="relative overflow-hidden bg-grid">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          <div className="container relative mx-auto px-4 pt-32 pb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Site Reliability Engineer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl text-balance">
              Hi, I'm Jad Samara. I build scalable, reliable systems — and the occasional side project.
            </h1>
            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm passionate about building scalable, high-performing, and reliable systems. Currently,
                I work at{" "}
                <a
                  href="https://harri.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Harri
                </a>
                , where I focus on ensuring system uptime, automating operations, and optimizing cloud costs
                through FinOps. My expertise spans cloud infrastructure, observability, performance tuning,
                and automation.
              </p>
              <p>
                Beyond my professional role, I enjoy experimenting with new technologies and building
                personal projects that blend reliability engineering with creative problem-solving —
                from finance tracking apps to adaptive streaming pipelines and automation tools.
              </p>
              <p>
                I'm always looking to connect with like-minded professionals, share knowledge, and take on
                new challenges. Feel free to check out my work or reach out!
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">My Projects</h2>
              <p className="mt-3 text-muted-foreground">
                A mix of production apps, tooling, and experiments — spanning full-stack development,
                automation, and infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
                >
                  <div className="relative h-44 overflow-hidden bg-secondary">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.status && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {project.status}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                      {project.description}
                    </p>

                    {project.tags && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm font-medium">
                      {!project.isHidden && project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80"
                        >
                          View Project
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                      >
                        <Github size={14} />
                        Source
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Get in Touch</h2>
              <p className="mt-3 text-muted-foreground">
                Feel free to reach out for collaborations, questions, or just to connect! I'm always
                interested in new challenges.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="mailto:jadrsamara@gmail.com"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Mail size={18} />
                  </span>
                  jadrsamara@gmail.com
                </a>
                <a
                  href="https://github.com/jadrsamara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Github size={18} />
                  </span>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jadrsamara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Linkedin size={18} />
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jad Samara. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "Expenssly - Finance Tracking",
    description:
      "A full-stack expense tracking application to help users monitor personal finances efficiently. Add expenses manually or snap a photo of a receipt for automatic entry via AI-powered OCR, view monthly and yearly reports, manage recurring bills, and sync failed uploads for data reliability.",
    image: "https://www.expenssly.com/metadata.png",
    link: "https://www.expenssly.com/",
    github_link: "https://github.com/jadrsamara/expenssly",
    status: "Live",
    tags: ["FastAPI", "Next.js", "Gemini OCR", "Postgres", "Vercel"],
  },
  {
    title: "Numble",
    description:
      "Numble نمبل Game is a web app where users guess a random number with visual feedback. It features email authentication via Mailjet, performance monitoring with New Relic, uptime tracking with Better Stack, and security and caching with Cloudflare.",
    image: "https://www.numble.one/static/android-chrome-512x512.png",
    link: "https://numble.one/",
    github_link: "https://github.com/jadrsamara/numble",
    status: "Live",
    tags: ["Web App", "Mailjet", "New Relic", "Cloudflare"],
  },
  {
    title: "DASH-compatible Streaming",
    description:
      "Adaptive bitrate video streaming, encoding videos with FFMPEG and MP4Box to create DASH-compatible streams. Tested under simulated poor network conditions to ensure smooth playback. The project and encoded videos are hosted on GitHub Pages.",
    image: "https://raw.githubusercontent.com/jadrsamara/Multimedia/refs/heads/main/thumbnail.png",
    link: "https://jadrsamara.github.io/Multimedia/",
    github_link: "https://github.com/jadrsamara/Multimedia",
    tags: ["FFMPEG", "MP4Box", "DASH"],
  },
  {
    title: "WinLayoutSaver for Windows",
    description:
      "A Python app using ctypes to call functions in DLLs or shared libraries, enabling automated management of multiple application window placements and saving/loading configurations. Multi-screen setup compatibility.",
    image:
      "https://user-images.githubusercontent.com/77105910/180623331-3d7f4f3b-b3df-47b4-b140-06589ef6a6de.png",
    github_link: "https://github.com/jadrsamara/Windows-Manager",
    isHidden: true,
    tags: ["Python", "ctypes", "Windows"],
  },
  {
    title: "Smart Farming System with Real-Time Analytics Dashboard",
    description:
      "Developed a smart greenhouse system utilizing IoT to monitor and control environmental conditions, enhancing agricultural efficiency.",
    image: "https://raw.githubusercontent.com/jadrsamara/Paliot/refs/heads/main/smart_greenhouse.png",
    link: "https://paliot.rf.gd/",
    github_link: "https://github.com/jadrsamara/Paliot",
    tags: ["IoT", "Dashboard"],
  },
  {
    title: "AI-Genetic Algorithms - Graduation Projects Distribution",
    description:
      "Developed an AI-driven system to automate the distribution of graduation projects using Genetic Algorithms, optimizing student-project matching based on preferences.",
    image: "https://raw.githubusercontent.com/jadrsamara/AI-Genetic-algorithms/main/assets/10.png",
    github_link: "https://github.com/jadrsamara/AI-Genetic-algorithms",
    isHidden: true,
    tags: ["AI", "Genetic Algorithms"],
  },
]
