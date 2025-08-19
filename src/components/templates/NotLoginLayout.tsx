import Link from 'next/link'
import { ReactNode } from 'react'

type PropsType = {
  children: ReactNode
}

export function NotLoginLayout({ children }: PropsType) {
  return (
    <div className="relative">
      <header className="fixed bg-white leading-[80px] top-0 right-0 left-0 flex flex-col items-center justify-center">
        <div className="mx-auto container flex justify-between">
          <p className="logo">スケジュール管理App</p>
          <nav>
            <ul className="flex gap-5 font-bold text-sky-400">
              <li className="hover:text-sky-700 hover:underline transition">
                利用説明
              </li>
              <li className="hover:text-sky-700 hover:underline transition">
                新規登録
              </li>
              <li className="hover:text-sky-700 hover:underline transition">
                <Link href="/login">ログイン</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="bg-gradient-to-r from-sky-300 to-sky-400 flex flex-col items-center justify-center h-screen">
        {children}
      </main>
    </div>
  )
}
