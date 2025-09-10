import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Atendimento ao Cliente - Suporte Especializado",
  description: "Atendimento ao cliente excepcional. Entre em contato conosco via WhatsApp.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
