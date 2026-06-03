'use client';

import { HandPlatter } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

export default function CateringPage() {
  return (
    <HorizontalGalleryPage
      title="Catering"
      subtitle="Próximamente fotos de nuestros servicios de catering."
      icon={HandPlatter}
      items={[]}
      accentColor="from-emerald-600 to-emerald-500"
    />
  );
}
