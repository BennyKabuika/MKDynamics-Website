"use client";

import { useState } from "react";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { ArrowRight, Loader } from "lucide-react";

export default function ApplyForm() {
  const [form, setForm] = useState({
    subject: "",
    name: "",
    firstname: "",
    email: "",
    location: "",
    type: "Internship",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (resume) formData.append("resume", resume);

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({
          subject: "",
          name: "",
          firstname: "",
          email: "",
          location: "",
          type: "Internship",
        });
        setResume(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full flex justify-center items-center bg-white rounded-2xl shadow-lg overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      <form
        className="w-full max-w-2xl p-8 flex flex-col justify-center space-y-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">Department</label>
            <input
              type="text"
              placeholder="Department"
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">Firstname</label>
            <input
              type="text"
              placeholder="Firstname"
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.firstname}
              onChange={e => setForm({ ...form, firstname: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-normal text-black">Type</label>
            <select
              className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.type}
              onChange={e => setForm({ ...form, type: e.target.value })}
              required
            >
              <option value="Internship">Internship</option>
              <option value="Role">Role</option>
              <option value="Student job">Student job</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-normal text-black">Upload your resume/CV</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.png"
            className="w-full border border-dotted border-gray-200 rounded-lg px-4 py-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="flex flex-col items-center pt-24">
          <ButtonDefault
            label={loading ? "Sending..." : "Send"}
            icon={
              loading ? <Loader size={24} color="white" className="animate-spin" /> : <ArrowRight color="white" size={24} />
            }
          />
          {sent && (
            <p className="mt-4 text-green-700 bg-green-100 border border-green-300 px-4 py-2 rounded-lg">
              Your application has been sent successfully!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}