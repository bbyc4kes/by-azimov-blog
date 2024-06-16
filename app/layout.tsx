import type { Metadata } from 'next'
import { Libre_Baskerville } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ModeToggle } from '@/components/theme/mode-toggle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={libreBaskerville.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <div className="fixed md:left-0 md:bottom-0 md:top-auto md:right-auto bottom-0 right-0 md:m-4 m-3 z-[99]">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
