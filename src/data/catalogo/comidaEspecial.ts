export interface ComidaEspecialItem {
  id: string;
  title: string;
  image: string;
  descripcion: string;
  video?: string;
}

export const comidasEspeciales: ComidaEspecialItem[] = [
  {
    id: 'salmon-grille',
    title: 'Salmón Grillé',
    image: '/imagenes/comida9.webp',
    descripcion: 'Salmón rosado sellado a la perfección con puré cremoso y maduro horneado.',
  },
  {
    id: 'pollo-horno-vegetales',
    title: 'Pollo al Horno con Vegetales',
    image: '/imagenes/comida11.webp',
    descripcion: 'Opción fit: Pechuga jugosa con vainitas y papas rústicas.',
  },
  {
    id: 'brochetas-mixtas',
    title: 'Brochetas Mixtas',
    image: '/imagenes/comida12.webp',
    descripcion: 'Pinchetas de pollo y vegetales con yuca y embutidos.',
  },
];
