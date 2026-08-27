import { ArrowUpRight, Code2, Database, Server, Workflow } from 'lucide-react'

const roles = [
  {
    period: '2025 — Now',
    role: '.NET Developer',
    company: 'ACTY System Myanmar Co. Ltd',
    summary: 'Building and maintaining a major system for a Japanese client. I upgrade platform versions, implement backend features, resolve defects, and perform comprehensive QE testing.',
    tags: ['C#', 'ASP.NET MVC', 'DevExpress', 'API Design'],
  },
  {
    period: '2023 — 2025',
    role: 'Junior Developer',
    company: 'Naung Yoe Technologies Co. Ltd',
    summary: 'Developed and maintained web applications while supporting a Public Key Infrastructure system that issues digital certificates. Authored bilingual user manuals and technical documentation.',
    tags: ['C#', 'Vue.js', 'PKI', 'Technical Writing'],
  },
  {
    period: '2022 — 2023',
    role: 'Intern',
    company: 'Chan Pyae Soe Technologies Co. Ltd',
    summary: 'Studied network infrastructure for an FTTx project and configured and maintained CCTV systems.',
    tags: ['Networking', 'FTTx', 'CCTV'],
  },
]

const skills = [
  { icon: Code2, name: 'Application', detail: 'C#, ASP.NET MVC, Vue.js, Java, Node.js' },
  { icon: Database, name: 'Data', detail: 'MSSQL Server, MySQL, SQLite' },
  { icon: Server, name: 'Infrastructure', detail: 'IIS, NGINX, Hyper-V, ESXi, VirtualBox' },
  { icon: Workflow, name: 'Practice', detail: 'SOLID, MVC, API design, UML, flowcharts, QE' },
]

export function PortfolioContent() {
  return (
    <>
      <section id="experience" className="border-y border-border bg-card">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-28">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Experience</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Three years of building, learning, and shipping.</h2>
          </div>
          <ol className="flex flex-col">
            {roles.map((item) => (
              <li key={item.company} className="grid gap-4 border-t border-border py-8 first:pt-0 md:grid-cols-[8rem_1fr]">
                <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-sm text-primary">{item.company}</p>
                  </div>
                  <p className="max-w-2xl leading-relaxed text-muted-foreground">{item.summary}</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`Technologies used at ${item.company}`}>
                    {item.tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">{tag}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A practical toolkit.</h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">From database to deployment, I work across the application lifecycle with a focus on clear, dependable systems.</p>
        </div>
        <div className="mt-12 grid border border-border sm:grid-cols-2">
          {skills.map(({ icon: Icon, name, detail }) => (
            <article key={name} className="flex min-h-52 flex-col justify-between gap-8 border-b border-border p-6 even:sm:border-l sm:p-8 last:border-b-0 sm:nth-last-2:border-b-0">
              <Icon aria-hidden="true" className="size-6 text-primary" strokeWidth={1.6} />
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="project" className="border-y border-border bg-foreground text-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-28">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Selected project</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Shan Dictionary</h2>
            </div>
            <p className="font-mono text-xs opacity-60">Android Studio · Java</p>
          </div>
          <div className="flex flex-col justify-between gap-16">
            <p className="max-w-2xl text-pretty text-xl leading-relaxed opacity-75 sm:text-2xl">An Android dictionary application created to make Shan language references easier to access on mobile devices.</p>
            <div className="flex items-center justify-between border-t border-background/20 pt-5">
              <span className="text-sm opacity-60">Personal project</span>
              <ArrowUpRight aria-hidden="true" className="size-6 text-primary" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function PortfolioFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-16 md:px-10 md:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Get in touch</p>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Let&apos;s build something dependable.</h2>
        </div>
        <a className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-8" href="mailto:minnkhantkyaw13@gmail.com">
          minnkhantkyaw13@gmail.com <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
      <div className="flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>Min Khant Kyaw · Myanmar</p>
        <p>Designed for clarity. Built with React.</p>
      </div>
    </footer>
  )
}
