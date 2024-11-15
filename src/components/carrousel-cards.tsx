/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Arrow from '@/assets/arrow.svg'

import 'swiper/css'
import CardNft from './card-nft'
import TitleSection from './title-section'
import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'

export type CardProps = {
  id: string
  name: string
  thumbnail: StaticImageData
  valueBrl: string
  valueBtc: string
}

interface CarrouselCardsProps {
  subtitle: string
  title: string
  carrouselData: CardProps[]
}

export default function CarrouselCards({
  carrouselData,
  subtitle,
  title,
}: CarrouselCardsProps) {
  const navigationRef = useRef<any>()
  return (
    <section className="w-full max-w-grid mx-auto mt-16 lg:mt-28">
      <div className="w-full max-w-grid px-5">
        <TitleSection subTitle={subtitle} title={title} />
      </div>
      <div className="relative ml-5">
        <button
          className="hidden lg:flex absolute top-1/2 -left-6 -mt-6 z-10 bg-bluePrimary hover:bg-btn-secondary transition-colors border border-white/5 rounded-full w-12 h-12 items-center justify-center"
          onClick={() => navigationRef.current?.slidePrev()}
        >
          <Image src={Arrow} alt="navigation arrow for carrousel" />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          loop={true}
          speed={500}
          onBeforeInit={(swiper) => (navigationRef.current = swiper)}
          grabCursor
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 24,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
        >
          {carrouselData.map(({ id, name, thumbnail, valueBrl, valueBtc }) => (
            <SwiperSlide key={id}>
              <CardNft
                name={name}
                thumbnail={thumbnail}
                valueBrl={valueBrl}
                valueBtc={valueBtc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="hidden rotate-180 absolute top-1/2 -right-6 -mt-6 z-10 bg-bluePrimary hover:bg-btn-secondary transition-colors border border-white/5 rounded-full w-12 h-12 lg:flex items-center justify-center"
          onClick={() => navigationRef.current?.slideNext()}
        >
          <Image src={Arrow} alt="navigation arrow for carrousel" />
        </button>
      </div>
    </section>
  )
}
