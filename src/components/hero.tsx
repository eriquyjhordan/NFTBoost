'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import IconBoost from '@/assets/icon-boost.svg'
import Image from 'next/image'
import NftSmall from '@/assets/nft-small.webp'
import DoubleNft from '@/assets/double-nft.webp'
import AppleStore from '@/assets/apple.svg'
import GooglePlay from '@/assets/google.svg'
import CardsRight from '@/assets/cards-right.webp'
import CardsLeft from '@/assets/cards-left.webp'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const areaText = useRef(null)
  const googlePlay = useRef(null)
  const appleStore = useRef(null)
  const circleImage = useRef(null)
  const areaCards = useRef(null)
  const cardsLeft = useRef(null)
  const cardsRight = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: areaCards.current,
        start: '-60% center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })

    cardsTimeline.to(cardsLeft.current, { left: 8 })
    cardsTimeline.to(cardsRight.current, { right: 8 })

    tl.fromTo(
      areaText.current,
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 1, y: 0 },
      'start',
    )
    tl.fromTo(
      googlePlay.current,
      { opacity: 0, x: -30 },
      { opacity: 1, duration: 0.8, x: 0 },
      '>-.8',
    )
    tl.fromTo(
      appleStore.current,
      { opacity: 0, x: 30 },
      { opacity: 1, duration: 0.8, x: 0 },
      '>-.8',
    )
    tl.fromTo(
      circleImage.current,
      { opacity: 0, x: '90%' },
      { opacity: 1, duration: 0.8, x: 0 },
      'start+=.2',
    )
  })

  return (
    <section className="pt-36 bg-hero-pattern bg-no-repeat bg-top overflow-hidden">
      <div className="container flex flex-col items-center justify-center">
        <div
          ref={areaText}
          className="flex flex-col items-center justify-center opacity-0"
        >
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
                ref={circleImage}
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
        </div>

        <div className="flex flex-col items-center gap-4 mt-6 sm:flex-row">
          <a href="#">
            <Image
              src={GooglePlay}
              alt="link to google play store"
              priority
              className="opacity-0"
              ref={googlePlay}
            />
          </a>
          <a href="#">
            <Image
              src={AppleStore}
              alt="link to Apple store"
              priority
              className="opacity-0"
              ref={appleStore}
            />
          </a>
        </div>

        <div
          ref={areaCards}
          className="relative w-area-cards-mobile h-area-cards-mobile mt-12 lg:w-full lg:h-area-cards-desktop lg:mt-20"
        >
          <Image
            src={CardsLeft}
            alt="Cards left"
            className="absolute w-1/2 left-[25%] top-0 z-10"
            priority
            ref={cardsLeft}
          />
          <Image
            src={CardsRight}
            alt="Cards right"
            className="absolute w-1/2 right-[25%] top-0"
            priority
            ref={cardsRight}
          />
        </div>
        <div className="w-full bg-white/5 h-[1.5px] mt-20 lg:mt-36" />
      </div>
    </section>
  )
}
