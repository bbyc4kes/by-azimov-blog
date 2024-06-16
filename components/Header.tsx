'use client'

import React, { useState } from 'react'
import { BookOpenText, Menu } from 'lucide-react'
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

const Navigation = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const closeSheet = () => {
    setIsSheetOpen(false)
  }
  return (
    <div className="p-3 flex items-center z-10 fixed top-0 w-full uppercase md:justify-end">
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
                href="#about"
                className="group flex gap-2 items-center"
                onClick={closeSheet}
              >
                <BookOpenText className="group-hover:text-primary/80 duration-100 transition-colors" />
                <span className="text-xl font-bold">byAzimov</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <Command className="rounded-lg overflow-visible bg-transparent">
            <CommandList className="py-4 overflow-visible">
              <CommandGroup className="overflow-visible" heading="Navigace">
                <Link href="#about" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Newsletters
                  </CommandItem>
                </Link>
                <Link href="#generate-document" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Articles
                  </CommandItem>
                </Link>
                <Link href="#contact" onClick={closeSheet}>
                  <CommandItem className="md:w-[320px] w-full cursor-pointer">
                    Contact
                  </CommandItem>
                </Link>
              </CommandGroup>
            </CommandList>
          </Command>
        </SheetContent>
      </Sheet>
      <header className="gap-2 justify-center font-semibold w-5/12 hidden md:flex text-primary">
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
      </header>
    </div>
  )
}

export default Navigation
