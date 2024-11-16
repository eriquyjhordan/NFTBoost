import Image, { type StaticImageData } from 'next/image'
import verified from '@/assets/verify.svg'
import ethIcon from '@/assets/icon-eth.svg'

export interface CardCollectorsProps {
  position: string
  name: string
  valueBtc: string
  image: StaticImageData
  percent: string
}

export default function CardCollectors({
  image,
  name,
  percent,
  valueBtc,
  position,
}: CardCollectorsProps) {
  return (
    <div className="flex items-center justify-between bg-white/[1%] border border-white/5 px-4 py-3 md:px-6 md:py-4 rounded-full">
      <div className="flex items-center">
        <h4 className="mr-5 md:mr-6 ml-2 md:ml-0 font-semibold text-base">
          {position}
        </h4>
        <div className="relative">
          <Image
            src={image}
            alt="nft small"
            className="border-2 border-white/5 rounded-full w-10 h-10 object-contain"
          />
          <div className="absolute -bottom-1 -right-1">
            <Image src={verified} alt="verified icon" />
          </div>
        </div>
        <div className="ml-4">
          <p className="font-semibold text-sm md:text-base">{name}</p>
          <div className="md:flex gap-1">
            <p className="text-white/70 text-xs md:text-sm">Preço mínimo</p>
            <p className="flex gap-1 font-semibold text-xs md:text-sm">
              <Image src={ethIcon} alt="eth icon" />
              {valueBtc} BTC
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-greenPrimary text-xs md:text-sm font-bold">
          +{percent}%
        </p>
        <p className="flex text-xs md:text-sm font-semibold gap-1">
          <Image src={ethIcon} alt="eth icon" /> {valueBtc} BTC
        </p>
      </div>
    </div>
  )
}
