import type { Metadata } from 'next'
import { Libre_Baskerville } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ModeToggle } from '@/components/theme/mode-toggle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Write, share and encourage easily | byAzimov',
  description:
    'An open-source blog that allows anybody to generate and share their ideas effortlessly!',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={libreBaskerville.className}>
        <SessionProvider session={session}>
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
        </SessionProvider>
      </body>
    </html>
  )
}
