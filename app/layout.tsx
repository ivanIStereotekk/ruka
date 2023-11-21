import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import { ModeToggle } from "@/components/mode-toggle"
import FooterComponent from '@/components/footerSide'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "iskk.space: -stereotekk-",
  description: "Ivan Stereotekk's web site with bio and projects info : Ivan Stereotekk -  dj / programmer / and sound producer",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/donate">Donate</Link>
                  <Link href="/author">Author</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <FooterComponent/>
           
          </div>
           

        </ThemeProvider>
      </body>
    </html>
  )
}
