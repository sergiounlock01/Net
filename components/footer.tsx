"use client"

export function Footer() {
  const whatsappUrl = "https://wa.me/551151942695?text=Atendimento"

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <button onClick={handleWhatsAppClick} className="hover:text-white/80 transition-colors">
            Copyright © 2024 Atendimento ao cliente - Todos os direitos reservados.
          </button>
          <button onClick={handleWhatsAppClick} className="hover:text-white/80 transition-colors mt-4 md:mt-0">
            Área Restrita
          </button>
        </div>
      </div>
    </footer>
  )
}
