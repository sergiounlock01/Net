"use client"

export function ContactSection() {
  const whatsappUrl = "https://wa.me/551151942695?text=Atendimento"

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-red-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Contato</h2>

        <p className="text-white/90 text-center mb-12 text-lg">Ou melhor, venha nos visitar.</p>

        <p className="text-white/80 text-center mb-16 leading-relaxed">
          Nossas centrais são importantes para nós. Queremos conversar com você e sua visita sempre será bem-vinda.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Atendimento ao cliente */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Atendimento ao cliente</h3>
            <button onClick={handleWhatsAppClick} className="text-white hover:text-white/80 transition-colors">
              <div className="space-y-1 text-sm">
                <div>seg: 08:00 - 17:00</div>
                <div>ter: 08:00 - 17:00</div>
                <div>qua: 08:00 - 17:00</div>
                <div>qui: 08:00 - 17:00</div>
                <div>sex: 08:00 - 17:00</div>
                <div>sáb: fechado</div>
                <div>dom: fechado</div>
              </div>
            </button>
          </div>

          {/* Horas */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Horas</h3>
            <button onClick={handleWhatsAppClick} className="text-white hover:text-white/80 transition-colors">
              <div className="space-y-1 text-sm">
                <div>seg: 08:00 - 17:00</div>
                <div>ter: 08:00 - 17:00</div>
                <div>qua: 08:00 - 17:00</div>
                <div>qui: 08:00 - 17:00</div>
                <div>sex: 08:00 - 17:00</div>
                <div>sáb: fechado</div>
                <div>dom: fechado</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
