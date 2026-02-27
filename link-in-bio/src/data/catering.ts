/**
 * Catering: información y galería de instalaciones/servicio.
 */

export interface CateringImage {
  id: string;
  title: string;
  image: string;
}

export const cateringImages: CateringImage[] = [
  { id: 's1', title: 'Instalaciones', image: '/imagenes/Sobrenosotros (1).webp' },
  { id: 's2', title: 'Área de trabajo', image: '/imagenes/Sobrenosotros (2).webp' },
  { id: 's3', title: 'Cocina', image: '/imagenes/Sobrenosotros (3).webp' },
  { id: 's4', title: 'Servicio', image: '/imagenes/Sobrenosotros (4).webp' },
  { id: 's5', title: 'Calidad', image: '/imagenes/Sobrenosotros (5).webp' },
];

export const cateringText = {
  titulo: 'Catering corporativo',
  descripcion: 'Servicio de almuerzos y catering para empresas en la Gran Caracas. Menús personalizados, entrega puntual y estándares de higiene certificados. Contáctanos para cotizar.',
};
