'use client';

import { WheatOff } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/celiacos.webp' },
  { id: '2', image: '/imagenes/catalogo/celiacos1.webp' },
  { id: '3', image: '/imagenes/catalogo/celiacos2.webp' },
];

export default function CeliacosPage() {
  return (
    <HorizontalGalleryPage
      title="Celíacos"
      subtitle="Menú libre de gluten."
      icon={WheatOff}
      items={items}
      accentColor="from-amber-600 to-yellow-500"
    />
  );
}
