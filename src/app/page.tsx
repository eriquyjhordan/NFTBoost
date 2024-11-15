import CardNft from '@/components/card-nft'
import CardOne from '@/assets/img-nft/01.webp'

export default function Home() {
  return (
    <section className="container">
      <div className="p-8">
        <CardNft
          name="Borex #171"
          thumbnail={CardOne}
          valueBrl="602,02"
          valueBtc="0.0721"
        />
      </div>
    </section>
  )
}
