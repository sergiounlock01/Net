"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const whatsappUrl = "https://wa.me/551151942695?text=Atendimento"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to WhatsApp instead of submitting form
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-red-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Cadastro</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Button type="submit" className="w-full bg-white text-red-900 hover:bg-white/90 font-semibold">
              INSCREVER-SE
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
