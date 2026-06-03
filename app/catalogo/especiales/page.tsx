'use client';

import { Star } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/especiales.webp' },
  { id: '2', image: '/imagenes/catalogo/especiales1.webp' },
  { id: '3', image: '/imagenes/catalogo/especiales2.webp' },
  { id: '4', image: '/imagenes/catalogo/especiales3.webp' },
  { id: '5', image: '/imagenes/catalogo/especiales4.webp' },
  { id: '6', image: '/imagenes/catalogo/especiales5.webp' },
  { id: '7', image: '/imagenes/catalogo/especiales6.webp' },
  { id: '8', image: '/imagenes/catalogo/especiales7.webp' },
  { id: '9', image: '/imagenes/catalogo/especiales8.webp' },
  { id: '10', image: '/imagenes/catalogo/especiales9.webp' },
  { id: '11', image: '/imagenes/catalogo/especiales10.webp' },
  { id: '12', image: '/imagenes/catalogo/especiales11.webp' },
];

export default function EspecialesPage() {
  return (
    <HorizontalGalleryPage
      title="Especiales"
      subtitle="Menús exclusivos y platos destacados."
      icon={Star}
      items={items}
      accentColor="from-purple-600 to-fuchsia-500"
    />
  );
}
