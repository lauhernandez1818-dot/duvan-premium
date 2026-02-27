/**
 * Comidas normales: platos con foto y descripción de contenido.
 * Rutas de imágenes en /imagenes/ (public).
 */

export interface PlatoComida {
  id: string;
  title: string;
  image: string;
  contiene: string;
}

export const comidasNormales: PlatoComida[] = [
  {
    id: 'ensalada-cesar-especial',
    title: 'Ensalada César Especial',
    image: '/imagenes/comida1.webp',
    contiene:
      'Mix de lechugas frescas, tiras de pollo a la plancha, croutons crujientes y nuestro aderezo césar artesanal.',
  },
  {
    id: 'arroz-mariscos',
    title: 'Arroz con Mariscos',
    image: '/imagenes/comida7.webp',
    contiene:
      'Paella marinera con el sabor auténtico del mar y toques de limón.',
  },
  {
    id: 'pollo-horno-vegetales',
    title: 'Pollo al Horno con Vegetales',
    image: '/imagenes/comida11.webp',
    contiene:
      'Opción fit: Pechuga jugosa con vainitas y papas rústicas.',
  },
  {
    id: 'salteado-carne',
    title: 'Salteado de Carne',
    image: '/imagenes/comida10.webp',
    contiene:
      'Tiras de res al wok con vegetales y papas doradas.',
  },
  {
    id: 'brochetas-mixtas',
    title: 'Brochetas Mixtas',
    image: '/imagenes/comida12.webp',
    contiene:
      'Pinchetas de pollo y vegetales con yuca y embutidos.',
  },
  {
    id: 'pescado-plancha',
    title: 'Pescado a la Plancha',
    image: '/imagenes/comida13.webp',
    contiene:
      'Filete blanco ligero con papas al vapor.',
  },
  {
    id: 'arroz-mixto-especial',
    title: 'Arroz Mixto Especial',
    image: '/imagenes/comida14.webp',
    contiene:
      'Arroz tipo oriental con carnes y ensalada de col fresca.',
  },
  {
    id: 'pollo-hierbas',
    title: 'Pollo en Salsa de Hierbas',
    image: '/imagenes/comida6.webp',
    contiene:
      'Muslos de pollo al chimichurri con papas naturales.',
  },
];
