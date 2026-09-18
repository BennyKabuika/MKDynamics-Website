import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

const control =
  'w-full rounded-xl border border-line bg-paper-2 px-4 py-3.5 text-lg text-ink transition-colors duration-150 ease-out placeholder:text-ink-2/70 hover:border-ink-2 focus:border-navy focus:bg-paper focus:outline-none focus:ring-0 focus-visible:outline-none';

function Label({ id, label, hint }: { id: string; label: string; hint?: string }) {
  return (
    <label htmlFor={id} className="flex justify-between text-sm font-medium text-ink">
      {label}
      {hint && <span className="font-normal text-ink-2">{hint}</span>}
    </label>
  );
}

export function Field({ id, label, hint, ...props }: { id: string; label: string; hint?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1">
      <Label id={id} label={label} hint={hint} />
      <input id={id} name={id} className={control} {...props} />
    </div>
  );
}

export function TextArea({ id, label, ...props }: { id: string; label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-1">
      <Label id={id} label={label} />
      <textarea id={id} name={id} className={`${control} min-h-[180px] resize-y`} {...props} />
    </div>
  );
}

export function Select({
  id,
  label,
  children,
  ...props
}: { id: string; label: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="flex flex-col gap-1">
      <Label id={id} label={label} />
      <select id={id} name={id} className={`${control} cursor-pointer`} {...props}>
        {children}
      </select>
    </div>
  );
}

export function FormStatus({ state, success }: { state: 'idle' | 'sending' | 'sent' | 'error'; success: string }) {
  return (
    <p role="status" aria-live="polite" className="min-h-[1.5rem] text-base">
      {state === 'sent' && <span className="text-success">{success}</span>}
      {state === 'error' && (
        <span className="text-danger">
          Your message could not be sent. Please try again, or email us at{' '}
          <a href="mailto:contact@mkdynamics.be" className="underline">
            contact@mkdynamics.be
          </a>
          .
        </span>
      )}
    </p>
  );
}
