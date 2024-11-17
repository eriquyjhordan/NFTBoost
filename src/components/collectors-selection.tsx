'use client'

import CardCollectors, { type CardCollectorsProps } from './card-collectors'
import TitleSection from './title-section'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Nft04 from '@/assets/img-nft/04.webp'
import Nft05 from '@/assets/img-nft/05.webp'
import Nft06 from '@/assets/img-nft/06.webp'
import Nft07 from '@/assets/img-nft/07.webp'
import Nft08 from '@/assets/img-nft/08.webp'
import Nft09 from '@/assets/img-nft/09.webp'
import Nft10 from '@/assets/img-nft/10.webp'
import Nft11 from '@/assets/img-nft/11.webp'

gsap.registerPlugin(ScrollTrigger)

export default function CollectorsSection() {
  const cardCollectorsData: CardCollectorsProps[] = [
    {
      image: Nft04,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '1',
      valueBtc: '0.721',
    },
    {
      image: Nft05,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '2',
      valueBtc: '0.721',
    },
    {
      image: Nft06,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '3',
      valueBtc: '0.721',
    },
    {
      image: Nft07,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '4',
      valueBtc: '0.721',
    },
    {
      image: Nft08,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '5',
      valueBtc: '0.721',
    },
    {
      image: Nft09,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '6',
      valueBtc: '0.721',
    },
    {
      image: Nft10,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '7',
      valueBtc: '0.721',
    },
    {
      image: Nft11,
      name: 'Lorem Ipsum',
      percent: '20',
      position: '8',
      valueBtc: '0.721',
    },
  ]

  const collectorsAreaRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      collectorsAreaRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: collectorsAreaRef.current,
          start: 'top-=400 center',
        },
      },
    )
  })

  return (
    <section className="container mt-16 lg:mt-28">
      <TitleSection
        subTitle="Colecionadores em Foco"
        title="Principais colecionadores"
      />
      <div
        className="grid lg:grid-cols-2 gap-x-8 gap-y-4"
        ref={collectorsAreaRef}
      >
        {cardCollectorsData.map(
          ({ image, name, percent, position, valueBtc }) => (
            <CardCollectors
              key={position}
              image={image}
              name={name}
              percent={percent}
              position={position}
              valueBtc={valueBtc}
            />
          ),
        )}
      </div>
    </section>
  )
}
