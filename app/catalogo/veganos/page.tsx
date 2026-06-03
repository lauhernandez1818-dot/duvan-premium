'use client';

import { Leaf } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/vegano.webp' },
  { id: '2', image: '/imagenes/catalogo/vegano1.webp' },
  { id: '3', image: '/imagenes/catalogo/vegano2.webp' },
];

export default function VeganosPage() {
  return (
    <HorizontalGalleryPage
      title="Veganos"
      subtitle="Opciones 100% vegetales."
      icon={Leaf}
      items={items}
      accentColor="from-lime-600 to-green-500"
    />
  );
}
