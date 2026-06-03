'use client';

import { CookingPot } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/panaderia.webp' },
  { id: '2', image: '/imagenes/catalogo/panaderia1.webp' },
  { id: '3', image: '/imagenes/catalogo/panederia2.webp' },
  { id: '4', image: '/imagenes/catalogo/panederia3.webp' },
  { id: '5', image: '/imagenes/catalogo/panederia4.webp' },
];

export default function PanaderiaPage() {
  return (
    <HorizontalGalleryPage
      title="Panadería"
      subtitle="Panes frescos horneados a diario."
      icon={CookingPot}
      items={items}
      accentColor="from-yellow-700 to-amber-600"
    />
  );
}
