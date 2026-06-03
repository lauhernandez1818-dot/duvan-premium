'use client';

import { Cake } from 'lucide-react';
import HorizontalGalleryPage from '@/src/components/catalogo/HorizontalGalleryPage';

const items = [
  { id: '1', image: '/imagenes/catalogo/pasteleria.webp' },
  { id: '2', image: '/imagenes/catalogo/pasteleria1.webp' },
  { id: '3', image: '/imagenes/catalogo/pasteleria2.webp' },
  { id: '4', image: '/imagenes/catalogo/pasteleria3.webp' },
  { id: '5', image: '/imagenes/catalogo/pasteleria4.webp' },
  { id: '6', image: '/imagenes/catalogo/pasteleria5.webp' },
  { id: '7', image: '/imagenes/catalogo/pasteleria6.webp' },
  { id: '8', image: '/imagenes/catalogo/pasteleria7.webp' },
  { id: '9', image: '/imagenes/catalogo/pasteleria8.webp' },
  { id: '10', image: '/imagenes/catalogo/pasteleria9.webp' },
  { id: '11', image: '/imagenes/catalogo/pasteleria10.webp' },
  { id: '12', image: '/imagenes/catalogo/pasteleria11.webp' },
  { id: '13', image: '/imagenes/catalogo/pasteleria12.webp' },
  { id: '14', image: '/imagenes/catalogo/pasteleria13.webp' },
  { id: '15', image: '/imagenes/catalogo/pasteleria14.webp' },
  { id: '16', image: '/imagenes/catalogo/pasteleria15.webp' },
];

export default function PasteleriaPage() {
  return (
    <HorizontalGalleryPage
      title="Pastelería"
      subtitle="Postres artesanales y dulces premium."
      icon={Cake}
      items={items}
      accentColor="from-pink-600 to-rose-500"
    />
  );
}
