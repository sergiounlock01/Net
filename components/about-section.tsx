"use client"

import { Button } from "@/components/ui/button"
import { Headphones, Users } from "lucide-react"

export function AboutSection() {
  const whatsappUrl = "https://wa.me/551151942695?text=Atendimento"

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-red-700 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Sobre Nós</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Mission */}
          <div className="text-center">
            <div className="bg-red-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Nossa missão é proporcionar um atendimento ao cliente excepcional. Trabalhamos para garantir que cada
              interação seja positiva e resolutiva.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-white text-red-600 hover:bg-white/90 font-semibold px-8 py-2"
            >
              SAIBA MAIS
            </Button>
          </div>

          {/* Right side - Vision */}
          <div className="text-center">
            <div className="bg-red-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Buscamos ser referência em atendimento ao cliente no Brasil. Com inovação e excelência, queremos
              transformar a experiência do consumidor.
            </p>
            <img
              src="/smiling-headset-woman.png"
              alt="Atendente profissional"
              className="w-48 h-48 object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
