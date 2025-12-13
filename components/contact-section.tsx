"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "123 Nowhere St., Barrie, ON L4N 7G8",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@moldguardians.com",
      href: "mailto:info@moldguardians.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "1-800-555-5555",
      href: "tel:1-800-555-5555",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-semibold mb-6">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Ready to protect your home? Contact us today for a free consultation and inspection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-primary to-gold-dark rounded-2xl p-6 text-center">
              <p className="text-primary-foreground font-bold text-2xl mb-2">50% OFF</p>
              <p className="text-primary-foreground/80">Your First Inspection</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-charcoal border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-charcoal border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-charcoal border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your mold concerns..."
                  rows={4}
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-charcoal border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
