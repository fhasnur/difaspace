import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import { Providers } from "./providers";
import NavLinks from './ui/nav-links';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'difaspace',
  description: 'Space for people with disabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="h-full">
      <body className={inter.className}>
        <Suspense>
          <NavLinks />
        </Suspense>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
