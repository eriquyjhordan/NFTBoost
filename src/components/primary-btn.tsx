import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  title: string
  className?: string
}

export default function PrimaryBtn({ title, href, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center hover:bg-blue-700 transition-colors justify-center bg-bluePrimary w-full py-4 text-white text-sm font-semibold rounded-full',
        className,
      )}
    >
      {title}
    </Link>
  )
}
