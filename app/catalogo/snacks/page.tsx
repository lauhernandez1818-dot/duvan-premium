'use client';

import { Cookie } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

export default function SnacksPage() {
  return (
    <HorizontalGalleryPage
      title="Snacks"
      subtitle="Próximamente fotos de nuestros snacks."
      icon={Cookie}
      items={[]}
      accentColor="from-orange-600 to-orange-500"
    />
  );
}
