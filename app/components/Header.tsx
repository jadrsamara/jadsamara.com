"use client"

import Link from "next/link"
import { Github, Linkedin, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Jad Samara
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/jadrsamara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jadrsamara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 hover:text-gray-900 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

