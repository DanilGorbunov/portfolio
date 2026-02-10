"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  MessageCircle,
  Copy,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "danilgorbunov@gmail.com",
    href: "mailto:danilgorbunov@gmail.com"
  },
  {
    icon: Phone,
    label: "Slovak WhatsApp",
    value: "+421 90 70 77 202",
    href: "https://wa.me/421907077202"
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@dan_gorbunov",
    href: "https://t.me/dan_gorbunov"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/danilgorbunov",
    href: "https://linkedin.com/in/danilgorbunov"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bratislava, Slovakia",
    href: null
  }
];


export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("danilgorbunov@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };


  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto font-light leading-relaxed">
            Ready to start your next project? Let's discuss how we can bring your ideas to life 
            with exceptional design and user experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="bg-[#171717] border border-[#262626] rounded p-8"
          >
              <div className="space-y-6 flex-1">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-[#262626] p-3 rounded">
                      <contact.icon className="h-5 w-5 text-[#737373]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-[#737373] font-light uppercase tracking-wider mb-1">{contact.label}</div>
                      <div className="flex items-center space-x-2">
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[#E5E5E5] hover:text-[#F5F5F5] transition-colors duration-200 font-light"
                          >
                            {contact.value}
                            {contact.href.startsWith('http') && (
                              <ExternalLink className="inline h-3 w-3 ml-1" />
                            )}
                          </a>
                        ) : (
                          <span className="text-[#E5E5E5] font-light">{contact.value}</span>
                        )}
                        {contact.label === "Email" && (
                          <button
                            onClick={copyEmail}
                            className="text-[#737373] hover:text-[#A3A3A3] transition-colors duration-200"
                          >
                            {copiedEmail ? (
                              <CheckCircle className="h-4 w-4 text-[#E5E5E5]" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#262626] rounded border border-[#171717]">
                <div className="flex items-center space-x-2 text-[#A3A3A3] mb-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-light">Response Time</span>
                </div>
                <p className="text-sm text-[#737373] font-light">
                  I typically respond within 24 hours. For urgent projects, 
                  please mention it in your message.
                </p>
              </div>
            </motion.div>

        </div>

      </div>
    </div>
  );
}