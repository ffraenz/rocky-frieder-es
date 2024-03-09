
import './globals.css'
import previewImage from './preview.png'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rocky’s Diary',
  description: 'Dear Diary, Meow. Meow. Meow. That\'s it for now. Meow.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={"bg-zinc-950 text-white " + inter.className}>
        <main className="mx-auto max-w-[800px] px-4 py-16 sm:py-32 sm:px-8">
          {children}
          <footer className="pt-6">
            <p>
              For Anni.
              By <a href="https://fraenz.frieder.es" rel="noopener" className="underline">Fränz</a>.
            </p>
            <p className="pt-1 text-gray-400">
              View source code on <a href="https://github.com/ffraenz/rocky-frieder-es" rel="noopener" className="underline">GitHub</a>.
              Paw icon created by <a href="https://thenounproject.com/icon/paw-print-6055246/" rel="noopener nofollow" className="underline">Oh Rian</a>.
            </p>
          </footer>
        </main>
      </body>
    </html>
  )
}
