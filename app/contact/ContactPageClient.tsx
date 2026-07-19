"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { MapPin, Mail, Phone } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to an API route / form service
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full bg-brand-black text-brand-white pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              Let&apos;s Talk.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-brand-gray-dark text-lg md:text-xl mt-6 max-w-lg">
              Whether you&apos;re a brand looking to run a campaign or a creator looking for representation — we respond within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="w-full bg-brand-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">

          {/* Left: Contact Info */}
          <FadeUp>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-3xl text-brand-black">Contact Details</h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:hello@studiom.in"
                    className="flex items-center gap-3 text-brand-gray-dark hover:text-brand-black transition-colors group"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span className="text-sm group-hover:underline">hello@studiom.in</span>
                  </a>
                  <a
                    href="tel:+918000000000"
                    className="flex items-center gap-3 text-brand-gray-dark hover:text-brand-black transition-colors group"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span className="text-sm group-hover:underline">+91 80 0000 0000</span>
                  </a>
                  <div className="flex items-start gap-3 text-brand-gray-dark">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="text-sm">
                      STUDIO/M<br />
                      MG Road, Bengaluru<br />
                      Karnataka — 560001, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-brand-gray-dark uppercase">
                  Follow Us
                </h3>
                <div className="flex items-center gap-5">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-brand-gray-dark hover:text-brand-black transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div className="border border-brand-gray-mid rounded-[4px] p-6 bg-brand-offwhite">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-gray-dark mb-2">
                  Response Time
                </p>
                <p className="font-serif text-2xl text-brand-black">Within 24 hours</p>
                <p className="text-brand-gray-dark text-sm mt-2">
                  Mon – Fri, 9 AM – 7 PM IST
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right: Form */}
          <FadeUp delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-4 py-20">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-gray-dark">
                  Message Received
                </p>
                <h2 className="font-serif text-4xl text-brand-black">
                  Thank you. We&apos;ll be in touch soon.
                </h2>
                <p className="text-brand-gray-dark">
                  Expect a reply from our team within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-form">
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gray-dark"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full border border-brand-gray-mid rounded-[4px] px-4 py-3 text-sm text-brand-black placeholder-brand-gray-dark bg-brand-white focus:outline-none focus:border-brand-black transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gray-dark"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full border border-brand-gray-mid rounded-[4px] px-4 py-3 text-sm text-brand-black placeholder-brand-gray-dark bg-brand-white focus:outline-none focus:border-brand-black transition-colors"
                    />
                  </div>
                </div>

                {/* Row: Company + Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="company"
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gray-dark"
                    >
                      Company / Channel
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Brand or creator handle"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full border border-brand-gray-mid rounded-[4px] px-4 py-3 text-sm text-brand-black placeholder-brand-gray-dark bg-brand-white focus:outline-none focus:border-brand-black transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="type"
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gray-dark"
                    >
                      I Am A… *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formState.type}
                      onChange={handleChange}
                      className="w-full border border-brand-gray-mid rounded-[4px] px-4 py-3 text-sm text-brand-black bg-brand-white focus:outline-none focus:border-brand-black transition-colors appearance-none"
                    >
                      <option value="" disabled>Select one</option>
                      <option value="brand">Brand / Company</option>
                      <option value="creator">Content Creator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gray-dark"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project, campaign idea, or what you&apos;re looking for..."
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full border border-brand-gray-mid rounded-[4px] px-4 py-3 text-sm text-brand-black placeholder-brand-gray-dark bg-brand-white focus:outline-none focus:border-brand-black transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  pill
                  id="contact-submit"
                  className="self-start px-10 py-4"
                >
                  Send Message
                </Button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
