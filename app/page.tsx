"use client"

import { useState, useEffect, useCallback } from "react"
import Header from "./components/Header"
import SreTerminal from "./components/SreTerminal"

/* ─── Modal data ──────────────────────────────────────────────────────────── */
const modalData: Record<string, { title: string; html: string }> = {
  years: {
    title: "4+ years in production",
    html: `<p>Site reliability engineer since 2022, primarily on AWS and Kubernetes infrastructure for a US-based tech company. Focused on observability, incident response, and cost optimization.</p>`,
  },
  projects: {
    title: "6 projects shipped",
    html: `<ul>
      <li><b>Expenssly</b><a class="modal-link" href="https://www.expenssly.com/" target="_blank" rel="noopener">visit ↗</a></li>
      <li><b>Numble</b><a class="modal-link" href="https://numble.one/" target="_blank" rel="noopener">visit ↗</a></li>
      <li><b>DASH streaming</b><a class="modal-link" href="https://jadrsamara.github.io/Multimedia/" target="_blank" rel="noopener">visit ↗</a></li>
      <li><b>Paliot</b><a class="modal-link" href="https://paliot.rf.gd/" target="_blank" rel="noopener">visit ↗</a></li>
      <li><b>WinLayoutSaver</b><a class="modal-link" href="https://github.com/jadrsamara/Windows-Manager" target="_blank" rel="noopener">source ↗</a></li>
      <li><b>Grad-match</b><a class="modal-link" href="https://github.com/jadrsamara/AI-Genetic-algorithms" target="_blank" rel="noopener">source ↗</a></li>
    </ul><p style="margin-top:14px;"><a class="modal-link" href="#projects">Jump to projects ↓</a></p>`,
  },
  certs: {
    title: "Certifications",
    html: `<ul>
      <li><b>AWS Solutions Architect, Associate</b> (issued Apr 2026)<a class="modal-link" href="https://www.credly.com/badges/a644099d-8396-404b-ae99-6fb1c4909dba" target="_blank" rel="noopener">verify ↗</a></li>
      <li><b>AWS Cloud Practitioner</b> (issued Dec 2024)<a class="modal-link" href="https://www.credly.com/badges/1038ea0f-4cde-48d5-b3a2-7911cd48abc4/" target="_blank" rel="noopener">verify ↗</a></li>
      <li><b>EF SET English, C1</b> (issued Aug 2025)<a class="modal-link" href="https://cert.efset.org/HXfwcL" target="_blank" rel="noopener">verify ↗</a></li>
    </ul>`,
  },
  skills: {
    title: "Skills",
    html: `<div class="skill-tags">
      <span class="skill-tag">AWS</span><span class="skill-tag">Kubernetes</span><span class="skill-tag">Docker</span>
      <span class="skill-tag">Terraform</span><span class="skill-tag">Datadog</span><span class="skill-tag">Grafana</span>
      <span class="skill-tag">Python</span><span class="skill-tag">Bash</span><span class="skill-tag">SQL</span>
      <span class="skill-tag">GitHub Actions</span><span class="skill-tag">FastAPI</span><span class="skill-tag">Next.js</span>
    </div>`,
  },
  slo: {
    title: "SLO Target: 99.9%",
    html: `<p>Service Level Objective maintained for core infrastructure services. Measured across uptime, latency, and error rate SLIs using Datadog monitors and SLO dashboards.</p>`,
  },
  mttr: {
    title: "Avg MTTR: <15 minutes",
    html: `<p>Mean Time To Recover averaged across incidents handled on-call. Achieved through well-defined runbooks, alerting thresholds tuned to reduce noise, and fast rollback strategies.</p>`,
  },
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = useCallback((key: string) => setActiveModal(key), [])
  const closeModal = useCallback(() => setActiveModal(null), [])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [closeModal])

  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="alert-banner">
              <span>1 NEW PAGE</span>
              <span>SEV-3</span>
            </div>
            <div className="alert-body">
              <div className="alert-meta">Jerusalem, Palestine</div>
              <h1 className="title">Jad Samara</h1>
              <div className="role">site reliability engineer</div>
              <p className="lede">
                I keep the infra at <a href="https://harri.com/" target="_blank" rel="noopener noreferrer"><b>Harri</b></a>,{" "}
                a US-based tech company running. Off the clock I build small projects, mostly because I enjoy making ideas real.
              </p>
              <div className="btnrow">
                <a className="btn primary" href="#contact">Acknowledge, say hi</a>
                <a className="btn" href="#projects">View projects</a>
              </div>
            </div>
          </div>

          <div className="status-sidebar">
            <br />
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <span className="sec-title">Stats</span>
              <span className="sec-tag">click any box for details</span>
            </div>
            <div className="metric-grid">
              <button className="box metric-box" type="button" onClick={() => openModal("years")}>
                <div className="l">years in prod</div>
                <div className="v blue">4+</div>
              </button>
              <button className="box metric-box" type="button" onClick={() => openModal("projects")}>
                <div className="l">projects shipped</div>
                <div className="v green">6</div>
              </button>
              <button className="box metric-box" type="button" onClick={() => openModal("certs")}>
                <div className="l">certifications</div>
                <div className="v blue">3</div>
              </button>
              <button className="box metric-box" type="button" onClick={() => openModal("skills")}>
                <div className="l">skills</div>
                <div className="v green">tools</div>
              </button>
              <button className="box metric-box" type="button" onClick={() => openModal("slo")}>
                <div className="l">slo target</div>
                <div className="v blue">99.9%</div>
              </button>
              <button className="box metric-box" type="button" onClick={() => openModal("mttr")}>
                <div className="l">avg mttr</div>
                <div className="v green">&lt;15m</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <section id="about" className="site-section">
        <div className="wrap">
          <div className="feedhead">
            <span className="sec-title">About</span>
            <span className="filter">tail -f ./career.log</span>
          </div>
          <p className="sec-tag" style={{ marginTop: 6 }}>
            A running log instead of a bio. Filtered to the parts worth reading.
          </p>
          <div className="feed">
            <div className="line">
              <span className="ts">2026</span>
              <span className="lvl ok">OK</span>
              <span className="src">certs</span>
              <span className="msg">passed <b>AWS Solutions Architect, Associate</b></span>
            </div>
            <div className="line">
              <span className="ts">2024-25</span>
              <span className="lvl info">INFO</span>
              <span className="src">personal</span>
              <span className="msg">started shipping side projects, wanted something fully mine from start to finish</span>
            </div>
            <div className="line">
              <span className="ts">2023</span>
              <span className="lvl warn">WARN</span>
              <span className="src">harri</span>
              <span className="msg">detection time was too slow, rebuilt observability around <b>Datadog</b></span>
            </div>
            <div className="line">
              <span className="ts">2022</span>
              <span className="lvl ok">OK</span>
              <span className="src">harri</span>
              <span className="msg">joined as <b>site reliability engineer</b>, first on-call rotation, first incident</span>
            </div>
            <div className="line">
              <span className="ts">2017-22</span>
              <span className="lvl info">INFO</span>
              <span className="src">education</span>
              <span className="msg">B.S. in Computer Engineering, Birzeit University</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="site-section">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-title">Projects</span>
            <span className="sec-tag">filed as postmortems</span>
          </div>
          <div className="pm-grid">

            <div className="pm-doc">
              <div className="pm-shot">
                <img src="https://www.expenssly.com/metadata.png" alt="Expenssly screenshot" loading="lazy" />
              </div>
              <div className="pm-band">
                <span><span className="pm-sev live">LIVE</span>EXPENSSLY</span>
                <span>owner: jad.samara</span>
              </div>
              <div className="pm-pad">
                <div className="pm-id">DOC-2025-0114</div>
                <h3>Expenssly, receipts in, structured expenses out</h3>
                <div className="pm-meta">
                  <span><b>stack</b> · FastAPI, Next.js, Gemini OCR</span>
                  <span><b>hosting</b> · Vercel, Neon Postgres</span>
                </div>
                <p className="pm-desc">
                  A full-stack expense tracker that reads receipts automatically instead of asking you to type them in.
                  Gemini OCR handles classification.
                </p>
                <div className="pm-links">
                  <a className="pm-link" href="https://www.expenssly.com/" target="_blank" rel="noopener">expenssly.com ↗</a>
                </div>
              </div>
            </div>

            <div className="pm-doc">
              <div className="pm-shot">
                <img src="https://www.numble.one/static/android-chrome-512x512.png" alt="Numble icon" loading="lazy" />
              </div>
              <div className="pm-band">
                <span><span className="pm-sev live">LIVE</span>NUMBLE</span>
                <span>owner: jad.samara</span>
              </div>
              <div className="pm-pad">
                <div className="pm-id">DOC-2024-0319</div>
                <h3>Numble, a number game, over-built on purpose</h3>
                <div className="pm-meta">
                  <span><b>stack</b> · Django, htmx, Docker</span>
                  <span><b>hosting</b> · Vercel, Neon, Cloudflare</span>
                </div>
                <p className="pm-desc">
                  Started as a weekend game, ended up with containerization, hosting migration off Oracle Cloud, and New Relic monitoring.
                </p>
                <div className="pm-links">
                  <a className="pm-link" href="https://numble.one/" target="_blank" rel="noopener">numble.one ↗</a>
                  <a className="pm-link muted" href="https://github.com/jadrsamara/numble" target="_blank" rel="noopener">source ↗</a>
                </div>
              </div>
            </div>

            <div className="pm-doc">
              <div className="pm-shot">
                <img src="https://raw.githubusercontent.com/jadrsamara/Multimedia/refs/heads/main/thumbnail.png" alt="DASH streaming project thumbnail" loading="lazy" />
              </div>
              <div className="pm-band">
                <span><span className="pm-sev live">LIVE</span>DASH STREAMING</span>
                <span>owner: jad.samara</span>
              </div>
              <div className="pm-pad">
                <div className="pm-id">DOC-2023-0600</div>
                <h3>Adaptive bitrate streaming, encoded from scratch</h3>
                <div className="pm-meta">
                  <span><b>stack</b> · FFMPEG, MP4Box, DASH</span>
                  <span><b>hosting</b> · GitHub Pages</span>
                </div>
                <p className="pm-desc">
                  Encoded video into DASH-compatible adaptive bitrate streams and tested playback under simulated poor network conditions.
                </p>
                <div className="pm-links">
                  <a className="pm-link" href="https://jadrsamara.github.io/Multimedia/" target="_blank" rel="noopener">view demo ↗</a>
                  <a className="pm-link muted" href="https://github.com/jadrsamara/Multimedia" target="_blank" rel="noopener">source ↗</a>
                </div>
              </div>
            </div>

            <div className="pm-doc">
              <div className="pm-shot">
                <img src="https://raw.githubusercontent.com/jadrsamara/Paliot/refs/heads/main/smart_greenhouse.png" alt="Paliot smart greenhouse dashboard" loading="lazy" />
              </div>
              <div className="pm-band">
                <span><span className="pm-sev built">BUILT</span>PALIOT</span>
                <span>owner: jad.samara</span>
              </div>
              <div className="pm-pad">
                <div className="pm-id">DOC-2022-0900</div>
                <h3>Paliot, sensors on a farm, talking to the cloud</h3>
                <div className="pm-meta">
                  <span><b>stack</b> · Raspberry Pi, ESP32, MQTT</span>
                  <span><b>focus</b> · IoT crop monitoring</span>
                </div>
                <p className="pm-desc">
                  A 3G-to-cloud aggregation layer feeding real-time sensor data from field sensors into automated crop-control loops.
                </p>
                <div className="pm-links">
                  <a className="pm-link" href="https://paliot.rf.gd/" target="_blank" rel="noopener">dashboard ↗</a>
                  <a className="pm-link muted" href="https://github.com/jadrsamara/Paliot" target="_blank" rel="noopener">source ↗</a>
                </div>
              </div>
            </div>

            <div className="pm-doc">
              <div className="pm-shot">
                <img src="https://user-images.githubusercontent.com/77105910/180623331-3d7f4f3b-b3df-47b4-b140-06589ef6a6de.png" alt="WinLayoutSaver screenshot" loading="lazy" />
              </div>
              <div className="pm-band">
                <span><span className="pm-sev built">BUILT</span>WINLAYOUTSAVER</span>
                <span>owner: jad.samara</span>
              </div>
              <div className="pm-pad">
                <div className="pm-id">DOC-2021-1100</div>
                <h3>WinLayoutSaver, window placement that remembers</h3>
                <div className="pm-meta">
                  <span><b>stack</b> · Python, ctypes</span>
                  <span><b>focus</b> · Windows utilities</span>
                </div>
                <p className="pm-desc">
                  A Python app that calls straight into Windows DLLs to save and restore window placements across multiple monitors seamlessly.
                </p>
                <div className="pm-links">
                  <a className="pm-link muted" href="https://github.com/jadrsamara/Windows-Manager" target="_blank" rel="noopener">source ↗</a>
                </div>
              </div>
            </div>

            <div className="pm-doc">
              <div className="pm-shot">
                <img src="https://raw.githubusercontent.com/jadrsamara/AI-Genetic-algorithms/main/assets/10.png" alt="AI genetic algorithms project" loading="lazy" />
              </div>
              <div className="pm-band">
                <span><span className="pm-sev built">BUILT</span>GRAD-MATCH</span>
                <span>owner: jad.samara</span>
              </div>
              <div className="pm-pad">
                <div className="pm-id">DOC-2021-0300</div>
                <h3>Matching graduation projects with genetic algorithms</h3>
                <div className="pm-meta">
                  <span><b>stack</b> · Python, genetic AI</span>
                  <span><b>focus</b> · Optimization algorithms</span>
                </div>
                <p className="pm-desc">
                  A university project that automated distributing graduation projects across students, optimizing for preference match.
                </p>
                <div className="pm-links">
                  <a className="pm-link muted" href="https://github.com/jadrsamara/AI-Genetic-algorithms" target="_blank" rel="noopener">source ↗</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact / Footer ── */}
      <footer id="contact" className="site-footer">
        <div className="wrap">
          <div className="foot-title">Say hello</div>
          <p className="foot-sub">
            Always happy to talk infrastructure, compare notes on side projects, or just connect.
          </p>
          <div className="foot-links">
            <a className="btn primary" href="mailto:jadrsamara@gmail.com">jadrsamara@gmail.com</a>
            <a className="btn" href="https://github.com/jadrsamara" target="_blank" rel="noopener">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/jadrsamara/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
          <div className="foot-bottom">
            <span>Jerusalem, Palestine</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{
                display: "inline-block", width: 7, height: 7, borderRadius: "50%",
                background: "var(--green)",
                boxShadow: "0 0 0 0 var(--green)",
                animation: "pulse-green 2s infinite",
              }} />
              status: operational
            </span>
          </div>
        </div>
      </footer>

      {/* ── Modal ── */}
      {activeModal && modalData[activeModal] && (
        <div
          className="modal-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="modal" role="dialog" aria-modal="true">
            <button className="modal-close" onClick={closeModal} aria-label="Close">✕</button>
            <h3>{modalData[activeModal].title}</h3>
            <div dangerouslySetInnerHTML={{ __html: modalData[activeModal].html }} />
          </div>
        </div>
      )}

      {/* ── Terminal ── */}
      <SreTerminal />
    </>
  )
}