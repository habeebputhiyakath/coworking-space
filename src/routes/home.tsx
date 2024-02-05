import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="My own work space "
        content="From big brands to budding businesses, Mows makes sure you find the perfect workspace"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
