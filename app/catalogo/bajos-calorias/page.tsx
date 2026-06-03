'use client';

import { Salad } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/bajoencalorias.webp' },
  { id: '2', image: '/imagenes/catalogo/bajoencalorias1.webp' },
  { id: '3', image: '/imagenes/catalogo/bajoencalorias2.webp' },
  { id: '4', image: '/imagenes/catalogo/bajoencalorias3.webp' },
  { id: '5', image: '/imagenes/catalogo/bajoencalorias4.webp' },
];

export default function BajosCaloriasPage() {
  return (
    <HorizontalGalleryPage
      title="Bajos en Calorías"
      subtitle="Opciones saludables y balanceadas."
      icon={Salad}
      items={items}
      accentColor="from-green-600 to-emerald-500"
    />
  );
}
