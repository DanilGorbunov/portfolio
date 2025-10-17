"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  MessageCircle,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  AlertCircle
} from "lucide-react";
import emailjs from '@emailjs/browser';

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


const projectTypes = [
  "AI/ML Application",
  "SaaS Platform",
  "Mobile App",
  "Web Application",
  "Dashboard/Data Viz",
  "E-commerce",
  "Design System",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
  const EMAILJS_SERVICE_ID = 'service_portfolio'; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'template_contact'; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your public key

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_email: 'danilgorbunov@gmail.com',
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", projectType: "", message: "" });
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again or contact me directly at danilgorbunov@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 rounded-2xl p-8 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
            
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                      <p className="text-zinc-400">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : error ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Failed to send message</h3>
                      <p className="text-zinc-400 mb-4">{error}</p>
                      <Button
                        onClick={() => setError("")}
                        variant="outline"
                        className="border-zinc-700 text-white hover:bg-zinc-800"
                      >
                        Try Again
                      </Button>
                    </motion.div>
                  ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <Label htmlFor="name" className="text-zinc-300 mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-primary"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-zinc-300 mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-zinc-300 mb-2 block">
                    Project Type
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:border-primary">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-white hover:bg-zinc-700">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 flex flex-col">
                  <Label htmlFor="message" className="text-zinc-300 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-primary flex-1 min-h-[120px]"
                    placeholder="Tell me about your project, goals, and how I can help..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-black font-medium py-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900 rounded-2xl p-8 flex flex-col"
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

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            onClick={() => window.history.back()}
          >
            ← Back
          </Button>
        </motion.div>
      </div>
    </div>
  );
}