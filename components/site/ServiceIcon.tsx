import { Globe, PenTool, ShieldCheck, Smartphone, Workflow, LucideProps } from 'lucide-react';

const icons = { globe: Globe, smartphone: Smartphone, pen: PenTool, shield: ShieldCheck, workflow: Workflow };

export default function ServiceIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = icons[name as keyof typeof icons] ?? Globe;
  return <Icon aria-hidden strokeWidth={1.75} {...props} />;
}
