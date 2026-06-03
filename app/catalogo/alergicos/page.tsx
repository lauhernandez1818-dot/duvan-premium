'use client';

import { ShieldAlert } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/alergicos.webp' },
];

export default function AlergicosPage() {
  return (
    <HorizontalGalleryPage
      title="Alérgicos"
      subtitle="Menús seguros, libres de alérgenos."
      icon={ShieldAlert}
      items={items}
      accentColor="from-orange-600 to-amber-500"
    />
  );
}
