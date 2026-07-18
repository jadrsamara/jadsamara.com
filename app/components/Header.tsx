"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const closeMenu = () => setMenuOpen(false)

  const isDark = mounted && theme === "dark"

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "color-mix(in srgb, var(--bg) 90%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div className="nav-wrap">
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          JS<span>•</span>
        </Link>

        <div className="navright">
          <div className="navlinks">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="theme-btn"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            suppressHydrationWarning
          >
            {/* Sun icon — shown in dark mode */}
            <svg
              className="sun-icon"
              viewBox="0 0 24 24"
              style={{ display: isDark ? "block" : "none", width: 16, height: 16, fill: "currentColor" }}
            >
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z" />
            </svg>
            {/* Moon icon — shown in light mode */}
            <svg
              className="moon-icon"
              viewBox="0 0 24 24"
              style={{ display: isDark ? "none" : "block", width: 16, height: 16, fill: "currentColor" }}
            >
              <path d="M12.3 2a10 10 0 0 0-1.9 19.8 10 10 0 0 0 11.5-11.5 10.2 10.2 0 0 1-9.6-8.3z" />
            </svg>
          </button>

          <button
            className="burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-panel">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
