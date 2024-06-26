import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@mantine/core/styles.css'
import './globals.css'
import { theme } from '@../../../theme'
import NavBar from '@/components/NavBar'
import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'I am using Mantine with Next.js!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={styles.wrapper}>
        <NavBar />
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
