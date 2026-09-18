import Image from 'next/image';

const logos = [
  { src: '/atos.jpeg', name: 'Atos', scale: 'scale-100' },
  { src: '/eurostar.jpeg', name: 'Eurostar', scale: 'scale-100' },
  { src: '/kpmg.jpeg', name: 'KPMG', scale: 'scale-[2.2]' },
];

// Only three logos: repeat them so one half of the track is wider than any screen.
const track = [...logos, ...logos, ...logos, ...logos];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24" aria-hidden={hidden || undefined}>
      {track.map((logo, i) => (
        <li key={`${logo.name}-${i}`} className="relative h-12 w-36 shrink-0 overflow-hidden md:h-16 md:w-44">
          <Image
            src={logo.src}
            alt={hidden || i >= logos.length ? '' : logo.name}
            fill
            sizes="176px"
            className={`object-contain mix-blend-multiply ${logo.scale}`}
          />
        </li>
      ))}
    </ul>
  );
}

export default function Logos() {
  return (
    <section className="marquee overflow-hidden border-b border-line bg-paper py-10 md:py-12" aria-label="Logos">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
