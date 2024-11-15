import CarrouselCards from '@/components/carrousel-cards'
import Hero from '@/components/hero'
import { featureCards, monthHighlights, trends } from '@/lib/cards-data'

export default function Home() {
  return (
    <>
      <Hero />
      <CarrouselCards
        carrouselData={featureCards}
        subtitle="Destaque em Coleções"
        title="Coleções notáveis"
      />
      <div className="container w-full bg-white/5 h-[1.5px] mt-20 lg:mt-28" />
      <CarrouselCards
        carrouselData={monthHighlights}
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
      />
      <div className="container w-full bg-white/5 h-[1.5px] mt-20 lg:mt-28" />
      <CarrouselCards
        carrouselData={trends}
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
      />
    </>
  )
}
