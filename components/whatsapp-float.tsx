"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/551151942695?text=Atendimento"

  const handleClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
