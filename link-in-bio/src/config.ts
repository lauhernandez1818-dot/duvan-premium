/**
 * Enlaces y configuración de la Link-in-Bio.
 * Usa "to" para rutas internas y "href" para enlaces externos.
 */

export const config = {
  title: 'INVERSIONES DUVAN',
  subtitle: 'Almuerzos corporativos',
  logoUrl: '/logo-duvan.png',
  links: [
    { id: 'ubicacion', label: 'Ubicación', to: '/ubicacion' },
    { id: 'comida', label: 'Comida', to: '/comida' },
    { id: 'comida_especiales', label: 'Comida Especiales', to: '/comida-especiales' },
    { id: 'postres', label: 'Postres', to: '/postres' },
    { id: 'catering', label: 'Catering', to: '/catering' },
  ],
} as const;
