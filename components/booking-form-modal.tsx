"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookingFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingFormModal({ isOpen, onClose }: BookingFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    needs: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add API call here to send the data
    alert("Thank you! We'll contact you soon.")
    onClose()
    setFormData({ name: "", email: "", mobile: "", needs: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#FFC107] p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] pr-12">
            Book Your Inspection
          </h2>
          <p className="text-[#1A1A1A] mt-2 font-semibold">
            Get a FREE consultation today!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-[#1A1A1A] font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFC107] focus:outline-none transition-colors text-[#1A1A1A]"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#1A1A1A] font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFC107] focus:outline-none transition-colors text-[#1A1A1A]"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-[#1A1A1A] font-semibold mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFC107] focus:outline-none transition-colors text-[#1A1A1A]"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Describe Your Needs */}
          <div>
            <label htmlFor="needs" className="block text-[#1A1A1A] font-semibold mb-2">
              Describe Your Needs *
            </label>
            <textarea
              id="needs"
              name="needs"
              value={formData.needs}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFC107] focus:outline-none transition-colors resize-none text-[#1A1A1A]"
              placeholder="Please describe the mold issue you're experiencing, location in your home, and any other relevant details..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] font-bold text-lg py-6"
            >
              Submit Request
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="px-8 border-2 border-gray-300 text-[#2D2D2D] hover:bg-gray-100 font-semibold py-6"
            >
              Cancel
            </Button>
          </div>

          <p className="text-sm text-gray-600 text-center">
            * All fields are required. We'll contact you within 24 hours.
          </p>
        </form>
      </div>
    </div>
  )
}
