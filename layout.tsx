import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ACTOGRAM - Telegram Clone",
  description: "Real-time chat application built with Next.js",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Удалить элемент после загрузки страницы
    const removeV0 = () => {
      const el = document.querySelector('[id^="v0-built-with-button"]')
      if (el) el.remove()
    }
    removeV0()
    // На случай если появляется позже (динамически)
    const interval = setInterval(removeV0, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <html lang="uz">
      <head>
        <title>ACTOGRAM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <style>
          {`
            [id^="v0-built-with-button"] {
              display: none !important;
              visibility: hidden !important;
              pointer-events: none !important;
              opacity: 0 !important;
            }
          `}
        </style>
        {children}
      </body>
    </html>
  )
}

