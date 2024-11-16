import IconBoost from '@/assets/icon-boost.svg'
import Image from 'next/image'
import NftSmall from '@/assets/nft-small.webp'
import DoubleNft from '@/assets/double-nft.webp'
import AppleStore from '@/assets/apple.svg'
import GooglePlay from '@/assets/google.svg'
import CardsRight from '@/assets/cards-right.webp'
import CardsLeft from '@/assets/cards-left.webp'

export default function Hero() {
  return (
    <section className="pt-36 bg-hero-pattern bg-no-repeat bg-top overflow-hidden">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex gap-2 mb-3 items-center">
          <Image src={IconBoost} alt="Icon boost" priority />
          <p className="text-sm lg:text-xl">
            Adentre um reino de possibilidades infinitas
          </p>
        </div>
        <h1 className="text-5xl/normal font-poppins text-center lg:text-7xl mb-4 max-w-6xl">
          <span>Explore um Universo</span>
          <div className="bg-white/5 border border-white/[6%] inline-block align-middle mx-2 w-24 lg:w-32 rounded-full">
            <Image
              src={NftSmall}
              alt="nft small"
              className="object-cover m-1 border border-white/5 rounded-full w-11 h-11 lg:w-14 lg:h-14"
              priority
            />
          </div>
          <span>Digital de</span>
          <Image
            src={DoubleNft}
            alt="two images of nfts"
            className="inline-block mx-2 align-middle lg:w-28 lg:h-16"
            priority
          />
          <span>Colecionáveis Únicos!</span>
        </h1>
        <p className="text-center text-sm w-full text-white/85 max-w-2xl lg:text-xl">
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>
        <div className="flex flex-col items-center gap-4 mt-6 sm:flex-row">
          <a href="#">
            <Image src={GooglePlay} alt="link to google play store" priority />
          </a>
          <a href="#">
            <Image src={AppleStore} alt="link to Apple store" priority />
          </a>
        </div>
        <div className="relative w-area-cards-mobile h-area-cards-mobile mt-12 lg:w-full lg:h-area-cards-desktop lg:mt-20">
          <Image
            src={CardsLeft}
            alt="Cards left"
            className="absolute w-1/2 left-8 top-0 z-10"
            priority
          />
          <Image
            src={CardsRight}
            alt="Cards right"
            className="absolute w-1/2 right-8 top-0"
            priority
          />
        </div>
        <div className="w-full bg-white/5 h-[1.5px] mt-20 lg:mt-36" />
      </div>
    </section>
  )
}
