## 🔴 Prioridad alta

### Técnico

- [x] **Arreglar `og:image`** — apuntaba a `https://your-domain.com/og-image.png` (placeholder del template). Actualizado `og:image` y `twitter:image` en `app/layout.tsx` y `app/services/page.tsx` para usar `public/og.webp` (1200x630 ya existente) y el dominio real `https://gabriellopez.com.ar`.
- [x] **Cambiar `<html lang="en">` a `lang="es-AR"`** — actualizado en `app/layout.tsx`.
- [x] **Renderizar el contenido en el servidor** — la causa raíz era `LanguageProvider` (`app/context/LanguageContext.tsx`): hacía `if (!mounted) return null` hasta que corría el `useEffect` en el cliente, así que en el HTML servido por Next no había nada dentro del provider (ni H1, ni cards, ni proceso). Se sacó ese gate: ahora el idioma arranca en `"es"` (SSR-safe, consistente con `lang="es-AR"`) y el `useEffect` solo ajusta el idioma post-hidratación si hay uno guardado en `localStorage` o el navegador pide `en`. El HTML crudo ya trae todo el contenido.
- [x] **Revisar el render inicial del hero** — confirmado con medición directa (polling de `opacity` + `IntersectionObserver` propio): el callback de `IntersectionObserver` puede tardar varios segundos (o no disparar) mientras la pestaña no está visible/enfocada (`document.hidden`), algo típico al abrir un link desde WhatsApp/LinkedIn en segundo plano. En `app/components/FadeInOnView.tsx` agregué un chequeo síncrono en `useLayoutEffect` (`getBoundingClientRect` contra el viewport) que revela de inmediato cualquier elemento que ya esté visible al montar, sin esperar el callback async del observer. El scroll-reveal para contenido debajo del fold sigue funcionando igual. También bajé el `threshold` default de `0.1` a `0` y agregué soporte a `prefers-reduced-motion` (muestra el contenido directo, sin animación). Verificado: con la pestaña en background, `opacity` pasa a `1` en ~250ms en vez de quedar en `0` indefinidamente.

### Conversión

- [ ] **Reemplazar el `mailto:` por un formulario corto** — campos: nombre, qué necesitás, presupuesto aproximado (rango), cómo te contacto. Dejar WhatsApp como opción rápida secundaria. El mailto asume un cliente de correo configurado y deja al visitante frente a una hoja en blanco.
- [ ] **Agregar pruebas / trabajos hechos** — 2 o 3 proyectos con captura, nombre del cliente y una línea de qué problema resolvió. Ya tenés `thermoreleaf.com.ar` y `kreart-dpm.com`. El visitante de /services no debería tener que ir a buscarlos a otra sección.
- [ ] **Agregar rango de precios** — "proyectos desde $X" o tres paquetes con rango. Elimina el miedo principal de una PyME ("esto debe salir carísimo") y filtra consultas.

---

## 🟡 Prioridad media

Mejoras de copy, estructura y SEO. Impacto real pero no urgente.

### Copy

- [ ] **Reescribir las cards en clave de problema del cliente** — hoy hablan de tu capacidad, no de su dolor.
  - "Diseño aplicaciones que simplifican problemas sin importar su complejidad" → "Dejá de anotar pedidos en un cuaderno".
  - "Funcionalidades con IA" es abstracto para un dueño de local. Concretar: un bot que responde consultas por WhatsApp fuera de horario, un buscador que entiende lenguaje natural.
- [ ] **Cambiar el texto de los CTAs** — hoy dicen el canal ("EMAIL", "WHATSAPP"). Que digan la acción: "Pedime un presupuesto", "Contame tu proyecto".
- [ ] **Agregar subtítulo en el hero que diga para quién es** — "Para comercios, estudios y emprendimientos de Mar del Plata".
- [ ] **Traducir la meta description al español** — hoy dice "Freelance frontend and full-stack developer available for landing pages..." en una página en español. Escribirla pensando en la PyME que la ve en Google: resultados, no stack.

### Estructura

- [ ] **Agregar sección de preguntas frecuentes** — cuánto tarda, quién paga hosting y dominio, puedo editar el contenido yo después, qué pasa si necesito un cambio en 6 meses. Resuelve objeciones y te ahorra mails.
- [ ] **Corregir jerarquía de encabezados** — hay 9 `<h1>` en la página (cada card de servicio y cada paso del proceso). Dejar uno solo (el del hero) y pasar el resto a `<h2>`/`<h3>`.
- [ ] **Reducir el espacio vacío** — hay zonas muertas grandes entre el hero y "01 Servicios", y entre las cards y "02 Proceso". Empujan las pruebas sociales y el CTA final fuera del alcance de quien hace scroll rápido.

### SEO

- [ ] **Agregar `<link rel="canonical">`** y definir un único dominio: redirigir `gabriellopez.com.ar` → `www.` (o al revés). Hoy responden los dos.
- [ ] **Agregar Schema.org `ProfessionalService`** con localidad — ayuda para búsquedas tipo "hacer página web Mar del Plata".

---

## 🟢 Prioridad baja

Detalles de pulido.

- [ ] **Corregir doble punto** — card de Aplicaciones Web: "sin importar su complejidad**..**"
- [ ] **Escribir el `alt` de las dos imágenes** — ambas tienen `alt=""` (mockup del teléfono y avión de papel). Si son decorativas, dejar `alt=""` y marcarlas `aria-hidden`; si no, describirlas.
- [ ] **Revisar el sitio en mobile real** — no pude verificarlo bien desde el navegador remoto. Chequear especialmente el hero, el espaciado entre secciones y el tamaño de los botones.

---

## Si solo hacés cinco cosas

1. `og:image` + `lang="es-AR"`
2. Renderizado en servidor
3. Dos o tres proyectos con captura y resultado
4. Formulario en lugar de `mailto:`
5. Rango de precios + preguntas frecuentes
