import Image from 'next/image'
import Link from 'next/link'
import nftLogo from '@/assets/logo.svg'
import PrimaryBtn from './primary-btn'
import hamburgerMenu from '@/assets/icon-hamburger.svg'

export default function Header() {
  return (
    <header className="container flex items-center justify-between mt-6 lg:mt-5">
      <Link href="/">
        <Image src={nftLogo} alt="nft logo" width={160} height={35} />
      </Link>
      <nav className="hidden lg:block space-x-12">
        <Link
          href="#"
          className="font-medium text-base hover:text-bluePrimary transition-colors"
        >
          Download
        </Link>
        <Link
          href="#"
          className="font-medium text-base hover:text-bluePrimary transition-colors"
        >
          NFTs
        </Link>
        <Link
          href="#"
          className="font-medium text-base hover:text-bluePrimary transition-colors"
        >
          Rank
        </Link>
        <Link
          href="#"
          className="font-medium text-base hover:text-bluePrimary transition-colors"
        >
          FAQ
        </Link>
      </nav>
      <PrimaryBtn
        title="Conectar carteira"
        href="#"
        className="py-3 px-6 w-fit hidden lg:block"
      />
      <button className="p-2 bg-white/[3%] border border-white/5 lg:hidden rounded">
        <Image
          src={hamburgerMenu}
          alt="hamburger menu"
          width={24}
          height={24}
        />
      </button>
    </header>
  )
}
