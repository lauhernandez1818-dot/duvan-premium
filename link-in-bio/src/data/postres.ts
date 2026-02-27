/**
 * Postres: fotos de postres y repostería.
 */

export interface Postre {
  id: string;
  title: string;
  image: string;
  descripcion?: string;
}

export const postres: Postre[] = [
  {
    id: 'milhojas-tentacion',
    title: 'Milhojas Tentación',
    image: '/imagenes/comida4.webp',
    descripcion: 'Hojaldre, dulce de leche y frutas frescas.',
  },
  {
    id: 'tarta-cream-berries',
    title: 'Tarta Cream & Berries',
    image: '/imagenes/comida3.webp',
    descripcion: 'Bizcocho húmedo, nata montada y fresas seleccionadas.',
  },
];
