# Link en Bio — Inversiones Duvan

Landing tipo "Link en Bio" independiente, optimizada para móviles. React + Vite + TypeScript + Tailwind + Framer Motion + React Router.

## Scripts

- **`npm run dev`** — Servidor de desarrollo con HMR.
- **`npm run build`** — Build de producción en `dist/`.
- **`npm run preview`** — Previsualizar el build localmente.

## Despliegue

El build genera la carpeta `dist/` lista para subir a Vercel, Netlify, GitHub Pages o cualquier hosting estático. En Vercel/Netlify configura el directorio raíz como `link-in-bio` si despliegas desde el monorepo.

## Estructura

- **`public/imagenes/`** — Fotos (comidas, Hamburguesa, postres, Sobrenosotros). Copiadas desde el proyecto principal.
- **`public/videos/`** — Videos (HamburguesaV.mp4, etc.).
- **`src/config.ts`** — Título, subtítulo, logo y rutas de los botones (`to` para rutas internas).
- **`src/data/`** — Datos por sección:
  - **`comidas.ts`** — Platos normales con foto y texto "contiene".
  - **`comidaEspecial.ts`** — Hamburguesa Duvan (foto + video preparación).
  - **`postres.ts`** — Postres con foto y descripción.
  - **`catering.ts`** — Texto e imágenes de instalaciones.

## Rutas (botones)

Cada botón lleva a una ruta interna:

- **Ubicación** → `/ubicacion` (enlace a Google Maps).
- **Comida** → `/comida` — Lista de comidas normales con foto y qué contiene cada platillo.
- **Comida Especiales** → `/comida-especiales` — Hamburguesa Duvan con foto y video de preparación.
- **Postres** → `/postres` — Fotos de postres y repostería.
- **Catering** → `/catering` — Info de catering y galería de instalaciones.

Para cambiar textos o imágenes, edita los archivos en `src/data/` y las rutas en `src/config.ts`.
