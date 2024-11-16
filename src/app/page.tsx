import BannerSection from '@/components/banner-section'
import CollectorsSection from '@/components/collectors-selection'
import Faq from '@/components/faq'
import Hero from '@/components/hero'
import { featureCards, monthHighlights, trends } from '@/lib/cards-data'
import dynamic from 'next/dynamic'

const DynamicCarrouselCards = dynamic(
  () => import('@/components/carrousel-cards'),
  {
    loading: () => <p>Loading...</p>,
  },
)

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicCarrouselCards
        carrouselData={featureCards}
        subtitle="Destaque em Coleções"
        title="Coleções notáveis"
      />
      <div className="container w-full bg-white/5 h-[1.5px] mt-20 lg:mt-28" />
      <DynamicCarrouselCards
        carrouselData={monthHighlights}
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
      />
      <div className="container w-full bg-white/5 h-[1.5px] mt-20 lg:mt-28" />
      <CollectorsSection />
      <div className="container w-full bg-white/5 h-[1.5px] mt-20 lg:mt-28" />
      <DynamicCarrouselCards
        carrouselData={trends}
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
      />
      <BannerSection />
      <Faq />
    </>
  )
}
