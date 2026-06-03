'use client';

import { UtensilsCrossed } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/Masivos.webp' },
  { id: '2', image: '/imagenes/catalogo/masivos1.webp' },
  { id: '3', image: '/imagenes/catalogo/masivos2.webp' },
  { id: '4', image: '/imagenes/catalogo/masivos3.webp' },
  { id: '5', image: '/imagenes/catalogo/masivos4.webp' },
  { id: '6', image: '/imagenes/catalogo/masivos5.webp' },
  { id: '7', image: '/imagenes/catalogo/masivos6.webp' },
  { id: '8', image: '/imagenes/catalogo/masivos7.webp' },
];

export default function AlmuerzosMasivosPage() {
  return (
    <HorizontalGalleryPage
      title="Masivos"
      subtitle="Menú completo para tu equipo."
      icon={UtensilsCrossed}
      items={items}
      accentColor="from-red-600 to-red-500"
    />
  );
}
