import Link from 'next/link'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  href: string
  onClick?: () => void
}>

export default function LoginButton({ href, onClick, children }: Props) {
  return (
    <Link
      href={href}
      type="submit"
      className="w-full rounded-full bg-teal-500 px-12 py-5 text-white font-semibold shadow-lg
                        transition hover:bg-teal-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-300"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
