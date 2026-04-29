# Instrucciones: Cómo crear una nueva Guía Web

Este proyecto funciona como una **plantilla universal**. Para crear una nueva página de estudio para otro video o nivel, sigue estos pasos:

## 1. Duplicar la Estructura
Copia la carpeta `Web` completa en una nueva ubicación o con un nuevo nombre (ejemplo: `Guia_A1_Leccion2`).

## 2. Generar el Contenido
1.  Realiza el análisis lingüístico de tu nuevo video.
2.  Usa el archivo `Prompt_Fichas_Didacticas.md` (pegando las instrucciones en Gemini) para procesar el análisis.
3.  Copia el **JSON** resultante que genera Gemini.

## 3. Actualizar `contenido.json`
Abre el archivo `contenido.json` en la nueva carpeta y actualiza los dos bloques principales:

### Bloque A: "meta"
Actualiza la información general:
- `titulo_pagina`: El nombre que aparecerá en la pestaña del navegador.
- `titulo_hero`: El título principal que se ve al abrir la web.
- `objetivo`: El texto que explica qué aprenderá el alumno (puedes usar HTML como `<strong>`).
- `video_url`: El enlace al video de YouTube.
- `ilustracion`: El nombre del archivo de imagen (ej: `foto.png`) que debes guardar en la misma carpeta.

### Bloque B: "fichas"
- Borra las fichas anteriores y pega el array de fichas que te entregó Gemini.
- Asegúrate de que las categorías coincidan con los nombres oficiales del PCIC.

## 4. Archivos que NO se tocan
Para mantener la consistencia visual y técnica, **NO modifiques** estos archivos (a menos que quieras cambiar el diseño de TODAS tus guías):
- `index.html`
- `main.js` (Motor de renderizado)
- `style.css` (Diseño y animaciones)
- `Logo Español para todos_transp.png`

## 5. Publicación
Si usas GitHub Pages:
1.  Sube la nueva carpeta a tu repositorio.
2.  La URL será: `tu-usuario.github.io/nombre-repo/nombre-carpeta/`

---
*Documento generado para el canal "Español Para Todos".*
