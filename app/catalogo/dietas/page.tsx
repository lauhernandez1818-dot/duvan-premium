'use client';

import { Apple } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/dieta.webp' },
  { id: '2', image: '/imagenes/catalogo/dieta1.webp' },
  { id: '3', image: '/imagenes/catalogo/dieta2.webp' },
  { id: '4', image: '/imagenes/catalogo/dieta3.webp' },
  { id: '5', image: '/imagenes/catalogo/dieta4.webp' },
  { id: '6', image: '/imagenes/catalogo/dieta5.webp' },
  { id: '7', image: '/imagenes/catalogo/dietas4.webp' },
];

export default function DietasPage() {
  return (
    <HorizontalGalleryPage
      title="Dietas"
      subtitle="Planes alimenticios personalizados."
      icon={Apple}
      items={items}
      accentColor="from-teal-600 to-cyan-500"
    />
  );
}
