/**
 * Comidas normales: platos con foto y descripción de contenido.
 * "Todo lo demás" (Ensalada César, Arroz con Mariscos, Salteado, Pescado Plancha, Arroz Mixto, Pollo Hierbas, Hamburguesa Duvan, Pescado Frito, Carne Gratinada).
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
    id: 'salteado-carne',
    title: 'Salteado de Carne',
    image: '/imagenes/comida10.webp',
    contiene:
      'Tiras de res al wok con vegetales y papas doradas.',
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
  {
    id: 'hamburguesa-duvan',
    title: 'Hamburguesa Duvan',
    image: '/imagenes/Hamburguesa.webp',
    contiene: 'La joya de la corona. Carne premium, queso fundido y pan artesanal.',
  },
  {
    id: 'pescado-frito-patacones',
    title: 'Pescado Frito con Patacones',
    image: '/imagenes/comida5.webp',
    contiene:
      'Crujiente Pescado del día con patacones de la casa y ensalada de aguacate.',
  },
  {
    id: 'carne-gratinada-pure',
    title: 'Carne Gratinada con Puré',
    image: '/imagenes/comida2.webp',
    contiene:
      'Cortes de res bañados en una capa generosa de queso fundido y pimientos, acompañados de nuestro puré insignia.',
  },
];
