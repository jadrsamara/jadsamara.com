"use client"

import { useEffect, useState } from "react"
import { Activity, Cpu, Globe, Server, CheckCircle, ArrowUpRight } from "lucide-react"

export default function SystemStatus() {
  const [latency, setLatency] = useState(12)
  const [cpu, setCpu] = useState(14)
  const [requestRate, setRequestRate] = useState(124)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setLatency((prev) => {
        const change = Math.floor(Math.random() * 5) - 2
        const next = prev + change
        return next < 5 ? 5 : next > 25 ? 25 : next
      })
      setCpu((prev) => {
        const change = Math.floor(Math.random() * 3) - 1
        const next = prev + change
        return next < 8 ? 8 : next > 22 ? 22 : next
      })
      setRequestRate((prev) => {
        const change = Math.floor(Math.random() * 11) - 5
        const next = prev + change
        return next < 90 ? 90 : next > 180 ? 180 : next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="h-[90px] w-full rounded-xl border border-border bg-card/50 backdrop-blur-sm animate-pulse" />
    )
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card/45 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-primary/50" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Side: Status Header */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                SRE Node Status
              </span>
            </div>
            <h4 className="text-sm font-bold text-foreground flex items-center gap-1">
              All Systems Operational
              <CheckCircle size={14} className="text-emerald-500 inline" />
            </h4>
          </div>
        </div>

        {/* Right Side: Better Uptime Link */}
        <a
          href="https://numble-one.betteruptime.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start sm:self-center text-xs font-medium text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/15 px-3 py-1.5 rounded-lg border border-primary/20"
        >
          <span>Better Stack Status</span>
          <ArrowUpRight size={12} />
        </a>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 pt-4 border-t border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-accent text-accent-foreground">
            <Server size={15} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Uptime</p>
            <p className="text-sm font-bold text-foreground">99.99%</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-accent text-accent-foreground">
            <Activity size={15} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Edge Latency</p>
            <p className="text-sm font-bold text-foreground font-mono">{latency}ms</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-accent text-accent-foreground">
            <Cpu size={15} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Host CPU Load</p>
            <p className="text-sm font-bold text-foreground font-mono">{cpu}%</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-accent text-accent-foreground">
            <Globe size={15} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Active Region</p>
            <p className="text-sm font-bold text-foreground">US-East-1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
