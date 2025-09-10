"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, QrCode } from "lucide-react"

export function HeroSection() {
  const whatsappUrl = "https://wa.me/551151942695?text=Atendimento"

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border-2 border-white/20 rounded-lg"></div>
        <div className="absolute top-60 right-60 w-24 h-24 border-3 border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-white/20 rounded-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              >
                FALE CONOSCO
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              >
                VIA ATUALIZADA
              </Button>
            </div>
          </div>

          {/* Right side - Person with floating icons */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src="/professional-man-smiling-holding-red-phone.jpg"
                alt="Atendente sorrindo"
                className="w-80 h-96 object-cover rounded-lg"
              />

              {/* Floating service icons */}
              <div className="absolute -top-4 -left-8 bg-red-600 p-3 rounded-full shadow-lg animate-bounce">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>

              <div className="absolute top-20 -right-8 bg-red-600 p-3 rounded-full shadow-lg animate-bounce delay-100">
                <QrCode className="w-6 h-6 text-white" />
              </div>

              <div className="absolute bottom-32 -left-12 bg-red-600 p-3 rounded-full shadow-lg animate-bounce delay-200">
                <QrCode className="w-6 h-6 text-white" />
              </div>

              <div className="absolute bottom-8 -right-4 bg-red-600 p-3 rounded-full shadow-lg animate-bounce delay-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
