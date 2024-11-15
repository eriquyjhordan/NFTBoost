import nftLogo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from './primary-btn'

interface FooterLinksProps {
  title: string
  href?: string
}

const FooterLink = ({
  title,
  href = '#',
}: FooterLinksProps): React.ReactNode => (
  <Link
    href={href}
    className="lg:text-lg text-base text-white/70 hover:text-bluePrimary transition-colors"
  >
    {title}
  </Link>
)

export default function Footer() {
  return (
    <footer className="container mt-16 lg:mt-28 mb-14 flex flex-col gap-14 md:flex-row justify-between">
      <div className="flex flex-col gap-4">
        <Link href="/">
          <Image src={nftLogo} alt="logo" width={160} height={35} />
        </Link>
        <p className="max-w-80 mb-2 text-lg text-white/70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <PrimaryBtn
          title="Conectar carteira"
          href="/"
          className="w-full sm:py-3 sm:px-6 sm:w-fit "
        />
      </div>
      <div className="flex gap-14 lg:gap-24">
        <div className="space-y-4">
          <h4 className="text-xl font-bold">NFT Boost®</h4>
          <nav className="flex flex-col gap-3">
            <FooterLink title="Download" />
            <FooterLink title="NFTs" />
            <FooterLink title="Rank" />
            <FooterLink title="FAQ" />
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold">Links importantes</h4>
          <nav className="flex flex-col gap-3">
            <FooterLink title="About us" />
            <FooterLink title="Questions" />
            <FooterLink title="Press" />
            <FooterLink title="Contact us" />
            <FooterLink title="Legal" />
          </nav>
        </div>
      </div>
    </footer>
  )
}
