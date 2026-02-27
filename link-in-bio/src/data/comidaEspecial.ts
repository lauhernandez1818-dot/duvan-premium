/**
 * Comidas especiales (ordenado).
 */

export interface ComidaEspecialItem {
  id: string;
  title: string;
  image: string;
  descripcion: string;
  /** Video de preparación (si aplica). */
  video?: string;
}

export const comidasEspeciales: ComidaEspecialItem[] = [
  {
    id: 'hamburguesa-duvan',
    title: 'Hamburguesa Duvan',
    image: '/imagenes/Hamburguesa.webp',
    descripcion: 'La joya de la corona. Carne premium, queso fundido y pan artesanal.',
    video: '/videos/HamburguesaV.mp4',
  },
  {
    id: 'pescado-frito-patacones',
    title: 'Pescado Frito con Patacones',
    image: '/imagenes/comida5.webp',
    descripcion: 'Crujiente Pescado del día con patacones de la casa y ensalada de aguacate.',
  },
  {
    id: 'salmon-grille',
    title: 'Salmón Grillé',
    image: '/imagenes/comida9.webp',
    descripcion: 'Salmón rosado sellado a la perfección con puré cremoso y maduro horneado.',
  },
  {
    id: 'carne-gratinada-pure',
    title: 'Carne Gratinada con Puré',
    image: '/imagenes/comida2.webp',
    descripcion: 'Cortes de res bañados en una capa generosa de queso fundido y pimientos, acompañados de nuestro puré insignia.',
  },
];
