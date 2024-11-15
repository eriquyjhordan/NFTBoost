import CardCollectors from '@/components/card-collectors'
import nft01 from '@/assets/img-nft/01.webp'

export default function Home() {
  return (
    <section className="container">
      <div className="mt-10">
        <CardCollectors
          image={nft01}
          minValueBtc="0.721"
          name="Lorem Ipsum"
          percent="+34"
          position="2"
          valueBtc="0.721"
        />
      </div>
    </section>
  )
}
