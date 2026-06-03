'use client';

import { Coffee } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

export default function RefrigeriosPage() {
  return (
    <HorizontalGalleryPage
      title="Refrigerios"
      subtitle="Próximamente fotos de nuestros refrigerios."
      icon={Coffee}
      items={[]}
      accentColor="from-blue-600 to-blue-500"
    />
  );
}
