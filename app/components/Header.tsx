"use client"

import Link from "next/link"
import { Github, Linkedin, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Jad Samara
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/jadrsamara"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jadrsamara/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="container mx-auto px-4 py-2 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 py-3">
              <a
                href="https://github.com/jadrsamara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jadrsamara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              >
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
