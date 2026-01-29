import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería | Inversiones Duvan',
  description: 'Conoce nuestras instalaciones y equipo profesional. Inversiones Duvan, líderes en alimentación corporativa en la Gran Caracas.',
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
