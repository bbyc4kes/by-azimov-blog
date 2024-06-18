'use client'

import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from './ui/command'

function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return <Button onClick={() => signIn()}>Sign in</Button>
}

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const closeSheet = () => {
    setIsSheetOpen(false)
  }
  return (
    <header className="max-w-7xl mx-auto px-8 py-5 flex items-center z-10 uppercase md:justify-between">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild className="z-[100] md:!hidden flex">
          <Button variant="outline" size={'icon'}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link
                href="#"
                className="group flex gap-2 items-center"
                onClick={closeSheet}
              >
                <img
                  src="/images/byAzimov.png"
                  alt="byAzimov logo"
                  className="w-30 h-6"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <Command className="rounded-lg overflow-visible bg-transparent">
            <CommandList className="py-4 overflow-visible">
              <CommandGroup className="overflow-visible" heading="Navigation">
                <Link href="/about" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    About
                  </CommandItem>
                </Link>
                <Link href="/posts" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    All Posts
                  </CommandItem>
                </Link>
                <Link href="/articles" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Articles
                  </CommandItem>
                </Link>
                <Link href="/newsletters" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Newsletters
                  </CommandItem>
                </Link>
              </CommandGroup>
            </CommandList>
            <CommandList className="py-4 overflow-visible">
              <CommandGroup className="overflow-visible" heading="Other">
                <Link href="/contact" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Contact
                  </CommandItem>
                </Link>
                <Link href="#" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Home
                  </CommandItem>
                </Link>
                <Link href="/socials" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Socials
                  </CommandItem>
                </Link>
              </CommandGroup>
            </CommandList>
          </Command>
        </SheetContent>
      </Sheet>
      <aside className="hidden md:flex justify-center items-center">
        <Link href={'/'}>
          <img
            src="/images/byAzimov.png"
            alt="byAzimov logo"
            className="w-30 h-6 dark:hidden"
          />
        </Link>
      </aside>
      <aside className="gap-2 justify-center items-center font-semibold w-5/12 hidden md:flex text-primary">
        <Link
          href="#about"
          className="w-40 text-center hover:text-primary/80 duration-100 transition-colors"
        >
          Newsletters
        </Link>
        <Link
          href="#generate-document"
          className="w-40 text-center hover:text-primary/80 duration-100 transition-colors"
        >
          Articles
        </Link>
        <Link
          href="#contact"
          className="w-40 text-center hover:text-primary/80 duration-100 transition-colors"
        >
          Contact
        </Link>
        <AuthButton />
      </aside>
    </header>
  )
}

export default Header
