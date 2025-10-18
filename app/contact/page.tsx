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
    label: "Ukrainian WhatsApp/Telegram",
    value: "+38 093 448 659",
    href: "https://wa.me/38093448659"
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
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your ideas to life 
            with exceptional design and user experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 rounded-2xl p-8"
          >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6 flex-1">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-zinc-800 p-3 rounded-lg">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-zinc-400">{contact.label}</div>
                      <div className="flex items-center space-x-2">
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-primary transition-colors duration-200"
                          >
                            {contact.value}
                            {contact.href.startsWith('http') && (
                              <ExternalLink className="inline h-3 w-3 ml-1" />
                            )}
                          </a>
                        ) : (
                          <span className="text-white">{contact.value}</span>
                        )}
                        {contact.label === "Email" && (
                          <button
                            onClick={copyEmail}
                            className="text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            {copiedEmail ? (
                              <CheckCircle className="h-4 w-4 text-primary" />
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

              <div className="mt-8 p-4 bg-zinc-800 rounded-lg">
                <div className="flex items-center space-x-2 text-zinc-300 mb-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-medium">Response Time</span>
                </div>
                <p className="text-sm text-zinc-400">
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