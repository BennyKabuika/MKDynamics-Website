"use client";

import Image from "next/image";
import { useState } from "react";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { ArrowRight, Loader } from "lucide-react";
import { backgroundcolors } from "@/app/color";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full flex flex-col md:flex-row items-stretch justify-center relative bg-white rounded-2xl shadow-lg overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      
      <form
        className="flex-1 p-8 flex flex-col justify-center space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">
              YOUR NAME
            </label>
            <input
              type="text"
              placeholder="enter here..."
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">
              YOUR EMAIL
            </label>
            <input
              type="email"
              placeholder="enter here..."
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-normal text-black">MESSAGE</label>
          <textarea
            placeholder="enter here..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2 min-h-[400px] focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col items-start">
          <ButtonDefault
            
            label={loading ? "Sending..." : "Send Message"}
            icon={
              loading ? <Loader size={24} color="white" className="animate-spin" /> : <ArrowRight color="white" size={24} />
            }
          />
          {sent && (
            <p className="mt-4 text-green-700 bg-green-100 border border-green-300 px-4 py-2 rounded-lg">
              Your message has been sent successfully!
            </p>
          )}
        </div>
      </form>

      
      <div className="hidden md:flex flex-col items-center justify-center relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: backgroundcolors.Tertiary }}
            >
              <Image src="/logo.png" alt="Logo" width={64} height={64} />
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex-1 relative min-h-[350px]">
        <Image
          src="/image13.jpeg"
          alt="Contact"
          fill
          className="object-cover w-full h-full"
          style={{ borderRadius: 0 }}
        />
      </div>
    </div>
  );
}
