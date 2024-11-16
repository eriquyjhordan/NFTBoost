import Image, { type StaticImageData } from 'next/image'
import Verified from '@/assets/verify.svg'
import EthereumIcon from '@/assets/icon-eth.svg'
import ClockIcon from '@/assets/icon-clock.svg'
import Heart from '@/assets/icon-heart.svg'
import PrimaryBtn from './primary-btn'

interface Props {
  name: string
  thumbnail: StaticImageData
  valueBtc: string
  valueBrl: string
  timeEnd?: string
}

export default function CardNft({
  name,
  thumbnail,
  valueBrl,
  valueBtc,
}: Props) {
  return (
    <div className="bg-black border-border border rounded-2xl max-w-fit">
      <div className="relative">
        <Image src={thumbnail} alt="card nft" />
        <button className="absolute top-2 right-2 flex gap-1 px-6 py-3 bg-black border-[2px] border-border rounded-full">
          <Image src={Heart} alt="heart icon" />
          <span className="text-xs text-text-muted font-semibold">0</span>
        </button>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-1">
          <div className="flex gap-1">
            <p className="text-text-muted text-xs font-semibold">
              Cartoon Collection
            </p>
            <Image src={Verified} alt="verified icon" />
          </div>
          <p className="text-lg font-semibold">{name}</p>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <p className="text-xs text-white/70">Preço atual</p>
            <div className="flex gap-1">
              <Image src={EthereumIcon} alt="Ethereum icon" />
              <p className="font-semibold text-lg">{valueBtc} BTC</p>
            </div>
          </div>
          <p className="text-xs font-medium">R$ {valueBrl}</p>
        </div>
        <PrimaryBtn title="Buy now" href="#" />
        <div className="flex gap-1">
          <Image src={ClockIcon} alt="clock Icon" />
          <p className="text-xs">Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  )
}
