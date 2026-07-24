# Juan José Ramírez Vásquez — Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Tabler Icons](https://img.shields.io/badge/Icons-Tabler-1C86F2)](https://tabler-icons.io)

Portfolio personal de desarrollo de software. Diseñado con **Atelier Digital** — un sistema de diseño editorial minimalista en modo oscuro con acentos en aged gold (`#C9A227`). Construido como SPA de una sola página con secciones navegables por anclas.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 19 + React Compiler |
| Lenguaje | TypeScript 6 |
| Bundler | Vite 8 |
| Estilos | Tailwind CSS v4 |
| Iconos | Tabler Icons |
| Fuentes | Space Grotesk, Inter, JetBrains Mono |

## Secciones

- **Inicio** — Hero con presentación y foto profesional
- **Stack** — Tecnologías y herramientas organizadas por categoría
- **Proyectos** — Trabajos destacados con galería de imágenes modal y carrusel
- **Formación** — Formación académica con diseño editorial
- **Contacto** — Formulario de contacto vía Web3Forms

## Empezar

```bash
pnpm install
pnpm dev        # servidor de desarrollo en http://localhost:5173
pnpm build      # build de producción en dist/
pnpm preview    # previsualizar build localmente
```

## Diseño

Basado en **Atelier Digital**, un sistema de diseño de minimalismo editorial riguroso construido desde Google Stitch:

- Paleta oscura: superficies en carbon charcoal, texto en bone white
- Acento quirúrgico: aged gold reservado para numeración, hover y bordes activos
- Tipografía: Space Grotesk (titulares), Inter (cuerpo), JetBrains Mono (técnico)
- Retícula centrada de 1100px con espaciado generoso (120px entre secciones)
- Sin sombras — la profundidad se comunica con capas tonales y bordes finos de 1px

## SEO

- Metadatos estáticos en `index.html` (title, description, canonical, robots)
- Open Graph + Twitter Cards para vista previa al compartir en redes
- Datos estructurados JSON-LD (Person + WebSite)
- `robots.txt` y `sitemap.xml`
- Imágenes con `loading="lazy"` y dimensiones explícitas

## Licencia

Código abierto bajo licencia MIT.
