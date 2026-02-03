# Referencia para deshacer: Hero video, carrusel y sección Calidad

Si necesitas **revertir** los cambios de Hero con video, carrusel en Propuesta Gastronómica y sección Calidad, usa esta guía.

---

## Resumen de lo que se cambió

1. **Hero**: El fondo pasó de orbes de gradiente + grid a **video** (`/videos/video1.mp4`) con **overlay negro 50%**.
2. **Nuestra Propuesta Gastronómica**: El bloque de texto se sustituyó por un **carrusel** (Embla) con `imagen1.jpeg`–`imagen4.jpeg`.
3. **Nueva sección "Higiene y servicio premium"**: Se añadió entre Propuesta Gastronómica y Por qué elegir a Duvan, con **video2.mp4** y borde gradiente.
4. **Dependencia**: Se instaló `embla-carousel-react`.
5. **Nuevo componente**: `src/components/CarouselPropuesta.tsx`.

---

## Cómo deshacer (opciones)

### Opción A – Volver Hero al fondo anterior (sin video)

En `app/page.tsx`, en el Hero, sustituir:

- El bloque que tiene `<video>` + `<div className="absolute inset-0 bg-black/50" />`

por el bloque original:

- Orbes de gradiente (red-600/40, blue-600/40) + grid pattern overlay.

### Opción B – Volver Propuesta Gastronómica al texto (sin carrusel)

En `app/page.tsx`:

- Quitar el import de `CarouselPropuesta`.
- En la sección "Nuestra Propuesta Gastronómica", sustituir el uso de `<CarouselPropuesta />` y el subtítulo por el bloque de texto anterior (el párrafo de "Nuestra cocina ofrece menús variados...").

### Opción C – Quitar la sección Calidad

En `app/page.tsx`, eliminar toda la sección "Sección Calidad - Higiene y servicio premium" (el bloque con video2.mp4).

### Opción D – Desinstalar Embla y quitar el componente

- `npm uninstall embla-carousel-react`
- Borrar `src/components/CarouselPropuesta.tsx` (y quitar su uso/import en `app/page.tsx` si aplica).

---

## Archivos tocados en este cambio

| Archivo | Cambio |
|---------|--------|
| `package.json` | Añadido `embla-carousel-react` |
| `app/page.tsx` | Hero con video + overlay; Propuesta Gastronómica con carrusel; nueva sección Calidad |
| `src/components/CarouselPropuesta.tsx` | Nuevo (carrusel Embla) |

---

*Creado para poder deshacer los cambios de Hero video, carrusel y sección Calidad.*
