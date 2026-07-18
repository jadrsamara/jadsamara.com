"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"

type LogLine = {
  text: string
  type: "input" | "output" | "error" | "success" | "dim" | "heading"
}

const BOOT_LINES: LogLine[] = [
  { text: "jad@node:~$ whoami", type: "input" },
  { text: "Jad Samara — SRE, AWS CSA-A", type: "success" },
  { text: "type 'help' for commands.", type: "dim" },
]

const COMMANDS: Record<string, LogLine[]> = {
  help: [
    { text: "available commands:", type: "heading" },
    { text: "  about      personal summary", type: "output" },
    { text: "  exp        work experience", type: "output" },
    { text: "  skills     technical skills", type: "output" },
    { text: "  certs      certifications", type: "output" },
    { text: "  projects   key projects", type: "output" },
    { text: "  contact    get in touch", type: "output" },
    { text: "  clear      clear terminal", type: "output" },
    { text: "  exit       close", type: "output" },
  ],

  about: [
    { text: "Jad Samara", type: "heading" },
    { text: "Site Reliability Engineer · Jerusalem, Palestine", type: "output" },
    { text: "", type: "output" },
    { text: "4+ years on AWS & Kubernetes at a US-based tech company.", type: "output" },
    { text: "Focused on observability, incident response, and cost optimization.", type: "output" },
  ],

  exp: [
    { text: "Site Reliability Engineer · Harri (remote)", type: "heading" },
    { text: "Mar 2022 – Present", type: "dim" },
    { text: "", type: "output" },
    { text: "· Reduced AWS spend via Cost Explorer, RIs, and FinOps tooling", type: "output" },
    { text: "· Kubernetes incident triage across 2,100+ microservices in 4 envs", type: "output" },
    { text: "· Migrated observability ELK/Grafana → Datadog; 80% faster detection", type: "output" },
    { text: "· 200+ Datadog alerts, MTTR cut by 70%", type: "output" },
    { text: "· On-call incident response and postmortems", type: "output" },
  ],

  skills: [
    { text: "Technical Skills", type: "heading" },
    { text: "", type: "output" },
    { text: "Cloud        AWS, GCP, OCI", type: "output" },
    { text: "Containers   Kubernetes (EKS), Docker", type: "output" },
    { text: "Observ.      Datadog, CloudWatch, Grafana, New Relic", type: "output" },
    { text: "IaC          Terraform, GitHub Actions", type: "output" },
    { text: "Languages    Python, Bash, SQL, JavaScript", type: "output" },
  ],

  certs: [
    { text: "Certifications", type: "heading" },
    { text: "", type: "output" },
    { text: "✓ AWS Solutions Architect, Associate   Apr 2026", type: "success" },
    { text: "✓ AWS Cloud Practitioner               Dec 2024", type: "success" },
    { text: "✓ EF SET English, C1 Advanced          Aug 2025", type: "success" },
  ],

  projects: [
    { text: "Projects", type: "heading" },
    { text: "", type: "output" },
    { text: "expenssly.com  (2025) — FastAPI + Next.js + Gemini OCR", type: "output" },
    { text: "numble.one     (2024) — Django + htmx + Docker", type: "output" },
    { text: "Paliot         (2022) — Raspberry Pi + ESP32 + MQTT", type: "output" },
  ],

  contact: [
    { text: "Contact", type: "heading" },
    { text: "", type: "output" },
    { text: "email     jadrsamara@gmail.com", type: "output" },
    { text: "github    github.com/jadrsamara", type: "output" },
    { text: "linkedin  linkedin.com/in/jadrsamara", type: "output" },
  ],
}

export default function SreTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [lines, setLines] = useState<LogLine[]>(BOOT_LINES)
  const [input, setInput] = useState("")
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [lines, isOpen])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 80)
  }, [isOpen])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    const echo: LogLine = { text: `$ ${raw.trim()}`, type: "input" }

    if (!cmd) { setLines((p) => [...p, echo]); return }
    if (cmd === "clear") { setLines([]); return }
    if (cmd === "exit") { setIsOpen(false); return }

    const result = COMMANDS[cmd]
    if (result) {
      setLines((p) => [...p, echo, ...result])
    } else {
      setLines((p) => [...p, echo, { text: `command not found: ${cmd}  (try 'help')`, type: "error" }])
    }
    setCmdHistory((p) => [raw.trim(), ...p])
    setHistIdx(-1)
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { run(input); setInput("") }
    else if (e.key === "ArrowUp") {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next); setInput(cmdHistory[next] ?? "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next); setInput(next === -1 ? "" : cmdHistory[next])
    }
  }

  const lineStyle = (type: LogLine["type"]): React.CSSProperties => {
    switch (type) {
      case "input":   return { color: "var(--text)", fontWeight: 600 }
      case "success": return { color: "var(--green)" }
      case "error":   return { color: "var(--red)" }
      case "heading": return { color: "var(--blue)", fontWeight: 600 }
      case "dim":     return { color: "var(--text-muted)" }
      default:        return { color: "var(--text-secondary)" }
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle terminal"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 50,
          width: 40, height: 40, borderRadius: "50%",
          background: "var(--surface-alt)", border: "1px solid var(--border)",
          color: "var(--text-secondary)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "border-color .15s ease, color .15s ease",
          fontSize: 16,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--blue)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text)" }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)" }}
      >
        {isOpen ? "✕" : ">_"}
      </button>

      {/* Terminal window */}
      {isOpen && (
        <div style={{
          position: "fixed", bottom: 72, right: 24, zIndex: 50,
          width: 500, maxWidth: "calc(100vw - 3rem)",
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: 10, overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,.22)",
          fontFamily: "var(--font-mono, monospace)",
        }}>
          {/* Title bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 14px", borderBottom: "1px solid var(--border)",
            background: "var(--surface-alt)",
          }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--border)", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--border)", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--border)", display: "inline-block" }} />
            <span style={{ marginLeft: 8, fontSize: 11, color: "var(--text-muted)", userSelect: "none" }}>jad@node: ~</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 13 }}
            >✕</button>
          </div>

          {/* Output */}
          <div
            style={{ height: 260, overflowY: "auto", padding: "12px 16px", fontSize: 12, lineHeight: "1.6" }}
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div key={i} style={{ whiteSpace: "pre-wrap", ...lineStyle(line.type) }}>
                {line.text || "\u00A0"}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input row */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 16px", borderTop: "1px solid var(--border-soft)",
            fontSize: 12,
          }}>
            <span style={{ color: "var(--green)", userSelect: "none" }}>$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="help"
              autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
              style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                color: "var(--text)", fontFamily: "inherit", fontSize: "inherit",
                caretColor: "var(--green)",
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
