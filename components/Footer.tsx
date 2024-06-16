import clsx from 'clsx'
import { Instagram, Linkedin, LucideMail } from 'lucide-react'
import { Bricolage_Grotesque } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const Bricolage = Bricolage_Grotesque({ subsets: ['latin'] })

const Footer = () => {
  return (
    <footer
      className={clsx(
        'w-full max-h-full bg-primary/10 dark:bg-primary-foreground flex flex-col py-8 items-center scroll-m-2',
        Bricolage.className
      )}
      id="footer"
    >
      <div className="max-w-7xl flex flex-col gap-3">
        <div className="flex justify-between uppercase items-center gap-36">
          <div className="flex gap-4 font-semibold text-sm text-primary tracking-widest">
            <Link
              href={'#'}
              className="hover:opacity-70 hover:cursor-pointer transition-all duration-50"
            >
              Home
            </Link>
            <Link
              href={'/posts'}
              className="hover:opacity-70 hover:cursor-pointer transition-all duration-50"
            >
              All Posts
            </Link>
            <Link
              href={'/about'}
              className="hover:opacity-70 hover:cursor-pointer transition-all duration-50"
            >
              About
            </Link>
            <Link
              href={'/contact'}
              className="hover:opacity-70 hover:cursor-pointer transition-all duration-50"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Instagram className="opacity-70 hover:opacity-90 hover:cursor-pointer transition-all duration-50" />
            <Linkedin className="opacity-70 hover:opacity-90 hover:cursor-pointer transition-all duration-50" />
            <LucideMail className="opacity-70 hover:opacity-90 hover:cursor-pointer transition-all duration-50" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-primary rounded-full opacity-45" />
        <div className="flex justify-start items-center h-1/2">
          <p className="text-sm brightness-30 opacity-55">© 2024 byAzimov</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
