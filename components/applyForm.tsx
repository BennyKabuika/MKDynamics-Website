'use client';

import { useState } from 'react';
import { Paperclip } from 'lucide-react';
import ButtonDefault from '@/components/Button/ButtonDefault';
import { Field, FormStatus, Select } from '@/components/site/Field';

type State = 'idle' | 'sending' | 'sent' | 'error';

const empty = { subject: '', name: '', firstname: '', email: '', location: '', type: 'Internship' };

export default function ApplyForm() {
  const [form, setForm] = useState(empty);
  const [resume, setResume] = useState<File | null>(null);
  const [state, setState] = useState<State>('idle');
  const [fileKey, setFileKey] = useState(0);

  const set = (key: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (resume) formData.append('resume', resume);

      const res = await fetch('/api/apply', { method: 'POST', body: formData });
      const data = await res.json();
      if (!data.success) throw new Error('send failed');
      setState('sent');
      setForm(empty);
      setResume(null);
      setFileKey((k) => k + 1);
    } catch (err) {
      console.error(err);
      setState('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="firstname" label="First name" autoComplete="given-name" value={form.firstname} onChange={set('firstname')} required />
        <Field id="name" label="Last name" autoComplete="family-name" value={form.name} onChange={set('name')} required />
        <Field id="email" type="email" label="Email" autoComplete="email" value={form.email} onChange={set('email')} required />
        <Field id="location" label="Country" autoComplete="country-name" value={form.location} onChange={set('location')} required />
        <Field id="subject" label="Department" placeholder="Design, development, security…" value={form.subject} onChange={set('subject')} required />
        <Select id="type" label="Type" value={form.type} onChange={set('type')} required>
          <option value="Internship">Internship</option>
          <option value="Role">Role</option>
          <option value="Student job">Student job</option>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Resume / CV</span>
        <label
          htmlFor="resume"
          className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-dashed border-ink-2/50 px-5 py-6 transition-colors duration-150 ease-out hover:border-navy hover:bg-paper-2 focus-within:border-navy"
        >
          <Paperclip aria-hidden size={20} className="shrink-0 text-navy" />
          <span className="min-w-0 flex-1">
            <span className="block truncate font-medium">{resume ? resume.name : 'Choose a file'}</span>
            <span className="text-sm text-ink-2">PDF, DOC, DOCX or PNG</span>
          </span>
          <input
            key={fileKey}
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,.png"
            className="sr-only"
            onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            required
          />
        </label>
      </div>

      <div className="flex flex-col items-start gap-4">
        <ButtonDefault type="submit" label={state === 'sending' ? 'Sending…' : 'Send application'} loading={state === 'sending'} />
        <FormStatus state={state} success="Thank you, your application has been sent." />
      </div>
    </form>
  );
}
