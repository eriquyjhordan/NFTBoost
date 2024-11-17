'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  subTitle: string
  title: string
}

export default function TitleSection({ subTitle, title }: Props) {
  const titleRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top-=400 center',
        },
      },
    )
  })

  return (
    <div ref={titleRef} className="space-y-1 mb-14">
      <span className="font-semibold text-sm md:text-leading text-white opacity-70">
        {subTitle}
      </span>
      <h2 className="font-poppins text-mobile-title md:text-5xl">{title}</h2>
    </div>
  )
}
