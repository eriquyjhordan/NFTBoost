import Image from 'next/image'
import GooglePlay from '@/assets/google.svg'
import AppleStore from '@/assets/apple.svg'

export default function BannerSection() {
  return (
    <section className="container mt-16 lg:mt-28">
      <div className="bg-banner-mobile md:bg-banner bg-no-repeat rounded-2xl object-contain">
        <div className="flex flex-col gap-4 items-center justify-center px-6 py-16 lg:py-24">
          <h2 className="font-poppins text-4xl lg:text-6xl text-center max-w-4xl leading-tight">
            Abra as Portas para a Próxima Revolução Digital!
          </h2>
          <p className="text-center text-base text-white/85 mb-1 lg:text-xl max-w-2xl">
            Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo
            Digital. Sua Oportunidade, Sua História
          </p>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <a href="#">
              <Image src={GooglePlay} alt="link to Google play store" />
            </a>
            <a href="#">
              <Image src={AppleStore} alt="link to Google play store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
