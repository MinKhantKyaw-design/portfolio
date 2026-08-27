import { PortfolioContent, PortfolioFooter } from '@/components/portfolio-content'
import { Hero, PortfolioHeader } from '@/components/portfolio-header'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <PortfolioHeader />
      <main>
        <Hero />
        <PortfolioContent />
      </main>
      <PortfolioFooter />
    </div>
  )
}
