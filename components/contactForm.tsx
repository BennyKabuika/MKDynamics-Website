'use client';

import { useState } from 'react';
import ButtonDefault from '@/components/Button/ButtonDefault';
import { Field, FormStatus, TextArea } from '@/components/site/Field';

type State = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState<State>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error('send failed');
      setState('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setState('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Field
          id="email"
          type="email"
          label="Your email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <TextArea
        id="message"
        label="Your project"
        placeholder="What would you like to build, improve or secure?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      <div className="flex flex-col items-start gap-4">
        <ButtonDefault type="submit" label={state === 'sending' ? 'Sending…' : 'Send message'} loading={state === 'sending'} />
        <FormStatus state={state} success="Thank you, your message has been sent. We'll get back to you soon." />
      </div>
    </form>
  );
}
