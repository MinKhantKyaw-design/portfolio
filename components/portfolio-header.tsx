import { ArrowDown, Download, Mail } from 'lucide-react'

export function PortfolioHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 md:px-10">
      <a href="#top" className="font-mono text-sm font-semibold tracking-tight" aria-label="Min Khant Kyaw, home">
        MKK<span className="text-primary">.</span>
      </a>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
        <a className="transition-colors hover:text-foreground" href="#experience">Experience</a>
        <a className="transition-colors hover:text-foreground" href="#skills">Skills</a>
        <a className="transition-colors hover:text-foreground" href="#project">Work</a>
      </nav>
      <a className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary" href="mailto:minnkhantkyaw13@gmail.com">
        <Mail aria-hidden="true" className="size-4" />
        <span className="hidden sm:inline">Let&apos;s talk</span>
      </a>
    </header>
  )
}

export function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-[calc(100svh-88px)] w-full max-w-6xl flex-col justify-center px-5 py-16 md:px-10 md:py-24">
      <div className="flex items-center gap-3 text-sm font-medium text-primary">
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        Available for meaningful work
      </div>
      <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold leading-none tracking-[-0.055em] sm:text-7xl lg:text-8xl">
        I build reliable software for the web.
      </h1>
      <div className="mt-8 flex max-w-4xl flex-col gap-8 border-l border-primary pl-5 md:flex-row md:items-end md:justify-between md:pl-8">
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          I&apos;m Min Khant Kyaw, a .NET developer in Myanmar with 3+ years of experience turning complex requirements into maintainable web applications and APIs.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Explore my work <ArrowDown aria-hidden="true" className="size-4" />
          </a>
          <a href="/Min-Khant-Kyaw-Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary">
            Résumé <Download aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
