"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  MessageCircle,
  Copy,
  ExternalLink,
  CheckCircle,
  Send,
  Loader2,
  X
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


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("danilgorbunov@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-900 rounded-2xl p-8 mt-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-sm text-green-300 mt-1">
                    Thank you for your message. I'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-400">
                    <X className="h-5 w-5" />
                    <span className="font-medium">Failed to send message</span>
                  </div>
                  <p className="text-sm text-red-300 mt-1">
                    Please try again or contact me directly via email.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400 focus:border-primary ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      placeholder="Your full name"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400 focus:border-primary ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400 focus:border-primary ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400 focus:border-primary min-h-[120px] ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    required
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                  <p className="text-zinc-400 text-sm mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-black font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
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