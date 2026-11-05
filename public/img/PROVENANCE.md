# Procedencia de imágenes

Todas las fotos de producto son **sintéticas**: generadas con IA en Figma (modelo gpt-image-2.5-flare, 2026-11-05) y recortadas localmente (fondo blanco quitado por relleno desde los bordes). Archivo fuente: https://www.figma.com/design/GRR90e2HHFYV9mUJkeqNeo

| Archivo | Contenido | Reemplazar por foto real |
|---|---|---|
| red-velvet.webp | Red velvet mordida con chocolate blanco | sí |
| pistacho.webp | Cookie con crema de pistacho | sí |
| marroc.webp | Cookie de chocolate y praliné de maní | sí |
| choco-duo.webp | Cookie de cacao con chocolate blanco y negro (regenerada sobre fondo magenta y recortada por croma, 2026-11-05) | sí |
| frambuesa.webp | Cookie de frambuesa y chocolate blanco | sí |
| clasica.webp | Clásica de chips entera (usada en "La mordida") | sí, idealmente vista desde arriba |
| crumbs/c1–c12.webp | Migas separadas de una sola imagen generada | opcional |
| clasica-bite-1..3.webp | La misma clásica con 1, 2 y 3 mordiscos: contorno irregular hecho por script sobre la foto IA | sí, junto con la clásica |

## Resolución (2026-11-05)
El generador de imágenes (Figma) entrega como máximo 1024 px por lado. Para pantallas de alta densidad las fotos se ampliaron al doble con super-resolución ESPCN (OpenCV) más un afinado suave, y después se recortaron de nuevo (relleno desde los bordes para fondo blanco; croma magenta para la choco dúo). Variantes publicadas: 480, 960 y ancho completo (~1.5–1.7 mil px), en AVIF (color 4:4:4) con WebP de respaldo. Con fotos reales de 2000 px o más se reemplazan directo y la calidad sube más.
