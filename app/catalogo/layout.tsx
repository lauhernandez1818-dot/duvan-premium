import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catálogo | Inversiones Duvan',
  description: 'Catálogo profesional de platos, instalaciones y videos. Inversiones Duvan, líderes en alimentación corporativa en la Gran Caracas.',
};

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
