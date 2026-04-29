# 🗺️ Mapa del Proyecto: Sistema de Guías Web ELE

Este documento explica la función de cada archivo en esta carpeta para que sepas qué es cada cosa y qué puedes tocar.

## 🏗️ Núcleo del Sistema (El "Motor")
Estos archivos crean el diseño y la funcionalidad. **No necesitas tocarlos** a menos que quieras cambiar el aspecto visual de todas tus guías.

*   **`index.html`**: Es el esqueleto de la página. Contiene la estructura básica y los lugares donde se inyectará el contenido.
*   **`style.css`**: Contiene todo el diseño visual (Glassmorphism, gradientes, animaciones y tipografía).
*   **`main.js`**: Es el cerebro del sistema. Su función es leer el archivo `contenido.json` y dibujar automáticamente las fichas en la pantalla.

## 📝 Contenido y Datos (Lo que sí se cambia)
Aquí es donde vive la información pedagógica de cada lección.

*   **`contenido.json`**: Es el archivo más importante. Contiene todo el texto, ejemplos y consejos que se muestran en la web.
*   **`PLANTILLA.json`**: Un archivo de referencia con la estructura correcta para que sepas cómo crear nuevos JSON.
*   **`ele_a1_people_...png`**: La ilustración principal que aparece en la parte superior (Hero).

## 🤖 Inteligencia Artificial (Prompts)
Archivos diseñados para ser copiados y pegados en Gemini para automatizar el trabajo.

*   **`Prompt_Fichas_Didacticas.md`**: El prompt optimizado para transformar análisis lingüísticos en el formato exacto (Markdown + JSON) que necesita este sistema.
*   **`PROMPT_GENERADOR.md`**: Prompt para la generación inicial de guiones o contenidos pedagógicos.

## 📖 Guías y Manuales
Documentación para el usuario y futuros desarrolladores.

*   **`INSTRUCCIONES_COPIAR.md`**: Guía rápida de 5 pasos para duplicar esta carpeta y crear una guía nueva.
*   **`DOCUMENTACION.md`**: Documentación técnica detallada sobre la arquitectura y el sistema de renderizado.
*   **`README.md`**: (Este archivo) El mapa general del proyecto.

## 🎨 Recursos de Marca
*   **`Logo Español para todos...`**: Los logotipos oficiales del canal en formato normal y con fondo transparente.

---
*Organizado por Antigravity para "Español Para Todos".*
