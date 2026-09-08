## 🔴 Prioridad alta

### Técnico

- [x] **Arreglar `og:image`** — apuntaba a `https://your-domain.com/og-image.png` (placeholder del template). Actualizado `og:image` y `twitter:image` en `app/layout.tsx` y `app/services/page.tsx` para usar `public/og.webp` (1200x630 ya existente) y el dominio real `https://gabriellopez.com.ar`.
- [x] **Cambiar `<html lang="en">` a `lang="es-AR"`** — actualizado en `app/layout.tsx`.
- [x] **Renderizar el contenido en el servidor** — la causa raíz era `LanguageProvider` (`app/context/LanguageContext.tsx`): hacía `if (!mounted) return null` hasta que corría el `useEffect` en el cliente, así que en el HTML servido por Next no había nada dentro del provider (ni H1, ni cards, ni proceso). Se sacó ese gate: ahora el idioma arranca en `"es"` (SSR-safe, consistente con `lang="es-AR"`) y el `useEffect` solo ajusta el idioma post-hidratación si hay uno guardado en `localStorage` o el navegador pide `en`. El HTML crudo ya trae todo el contenido.
- [x] **Revisar el render inicial del hero** — confirmado con medición directa (polling de `opacity` + `IntersectionObserver` propio): el callback de `IntersectionObserver` puede tardar varios segundos (o no disparar) mientras la pestaña no está visible/enfocada (`document.hidden`), algo típico al abrir un link desde WhatsApp/LinkedIn en segundo plano. En `app/components/FadeInOnView.tsx` agregué un chequeo síncrono en `useLayoutEffect` (`getBoundingClientRect` contra el viewport) que revela de inmediato cualquier elemento que ya esté visible al montar, sin esperar el callback async del observer. El scroll-reveal para contenido debajo del fold sigue funcionando igual. También bajé el `threshold` default de `0.1` a `0` y agregué soporte a `prefers-reduced-motion` (muestra el contenido directo, sin animación). Verificado: con la pestaña en background, `opacity` pasa a `1` en ~250ms en vez de quedar en `0` indefinidamente.

### Conversión

- [x] **Reemplazar el `mailto:` por un formulario corto** — nueva página `/contact` (`app/contact/`) con formulario (nombre, qué necesitás, presupuesto aproximado, cómo contactarte) que envía el mail vía Resend desde `app/api/contact/route.ts`. WhatsApp queda como opción rápida secundaria debajo del formulario. Los botones de "Email" en `HoverBar`, `Contact`, `ServicesHero` y `ServicesContact` ahora llevan a `/contact` en vez de abrir el cliente de correo. Falta cargar `RESEND_API_KEY` real en `.env.local` (ver `.env.example`) — sin eso el envío falla con un error controlado y el visitante ve el fallback a WhatsApp.
- [x] **Agregar pruebas / trabajos hechos** — nueva sección `02 Trabajos hechos` (`app/services/ServicesProof.tsx`) entre Servicios y Proceso. Dos casos, ThermoReleaf y Kreart, cada uno con captura real (`public/projects/.../desktop1.png` dentro de un marco tipo barra de navegador, reusando el motivo del `PhoneMockup` del hero), nombre del cliente, dominio y una línea del problema que tenía antes del sitio (framed en su dolor, no en el stack técnico). Cada card linkea al sitio en vivo. Renumerados los índices de las secciones siguientes (Proceso pasó a `03`, Contacto a `05`).
- [x] **Agregar rango de precios** — nueva sección `04 Precios` (`app/services/ServicesPricing.tsx`) con tres paquetes (Sitio Web desde $300.000, Aplicación Web desde $600.000, Mantenimiento desde $30.000/mes) más una línea aclarando que el número final depende del alcance y se define en la primera charla. Tarjetas con el motivo de esquinas registradas (`.marks`) ya usado en el resto del sitio. Montos provistos por el usuario; son valores estáticos en ARS, van a desactualizarse con la inflación y conviene revisarlos periódicamente.

---

## 🟡 Prioridad media

Mejoras de copy, estructura y SEO. Impacto real pero no urgente.

### Copy

- [x] **Reescribir las cards en clave de problema del cliente** — en `app/services/ServicesOfferings.tsx`, la card de Aplicaciones Web ahora cierra con "para que dejes de anotar pedidos en un cuaderno o de perder tiempo en tareas repetitivas" en vez de la descripción abstracta de capacidad. La de IA concreta los ejemplos: "un bot que responde consultas por WhatsApp fuera de horario, un buscador que entiende lenguaje natural en vez de palabras clave exactas".
- [x] **Cambiar el texto de los CTAs** — en `app/services/ServicesHero.tsx` los botones ya no dicen el canal: "Pedime un presupuesto" (antes "Email") y "Contame tu proyecto" (antes "WhatsApp"). Se dejaron sin cambios los links de `HoverBar`, `Contact` y `ServicesContact`, que funcionan como una lista de canales/redes (Email, LinkedIn, GitHub, Resume), no como el CTA principal.
- [x] **Agregar subtítulo en el hero que diga para quién es** — agregado en `ServicesHero.tsx`: "Para comercios, estudios y emprendimientos — estés donde estés, arrancamos con una llamada". Sin mención a Mar del Plata a propósito: el servicio no está limitado a una localidad, se puede atender de forma remota desde cualquier lugar (consistente con el JSON-LD `ProfessionalService` que ya evita `areaServed` por el mismo motivo).
- [x] **Traducir la meta description al español** — reescritas en `app/services/page.tsx` (`description`, `openGraph.description`, `twitter.description`) en español, orientadas a resultado para el dueño de PyME ("más ventas, mejor atención a tus clientes, presupuesto claro") en vez de listar el stack técnico. Aplicado el mismo criterio a la página general (`app/layout.tsx`): descripciones traducidas al español con foco en resultados en vez de listar tecnologías, y corregido `openGraph.locale` de `en_US` a `es_AR` para que coincida con el idioma real del contenido.

### Estructura

- [ ] **Agregar sección de preguntas frecuentes** — cuánto tarda, quién paga hosting y dominio, puedo editar el contenido yo después, qué pasa si necesito un cambio en 6 meses. Resuelve objeciones y te ahorra mails.
- [ ] **Corregir jerarquía de encabezados** — hay 9 `<h1>` en la página (cada card de servicio y cada paso del proceso). Dejar uno solo (el del hero) y pasar el resto a `<h2>`/`<h3>`.
- [ ] **Reducir el espacio vacío** — hay zonas muertas grandes entre el hero y "01 Servicios", y entre las cards y "02 Proceso". Empujan las pruebas sociales y el CTA final fuera del alcance de quien hace scroll rápido.
- [ ] Sección mis trabajos: agregar los otros trabajos hechos, las apps. Primero mostrar las landing pages. Tiene que ser un carousel que cada proyecto cambiando cada 3 segundos.

### SEO

- [x] **Definir un único dominio: redirigir `www.` → apex.** Agregado un redirect 308 en `next.config.ts` (`www.gabriellopez.com.ar` → `gabriellopez.com.ar`, vía matching por `host`), consistente con el dominio ya usado en la metadata. Falta confirmar en el dashboard de Vercel que `www.gabriellopez.com.ar` esté agregado como dominio del proyecto — si no está agregado, el redirect no corre porque el DNS de `www` no llega a la app.
- [x] **Agregar `<link rel="canonical">`** — agregado `alternates.canonical` en `app/layout.tsx` (`/`), `app/services/page.tsx` (`/services`) y `app/contact/page.tsx` (`/contact`), resuelto contra el `metadataBase` (`https://gabriellopez.com.ar`) ya definido.
- [x] **Agregar Schema.org `ProfessionalService`** — agregado JSON-LD en `app/layout.tsx` (aplica a todo el sitio) con nombre, teléfono, `sameAs` (LinkedIn/GitHub) y descripción que aclara atención remota y presencial. Sin `areaServed`/localidad a propósito, ya que el servicio no está limitado a una ciudad.

---

## 🟢 Prioridad baja

Detalles de pulido.

- [x] **Corregir doble punto** — card de Aplicaciones Web: corregido `sin importar su complejidad..` → `sin importar su complejidad.` en `app/services/ServicesOfferings.tsx`.
- [x] **Escribir el `alt` de las dos imágenes** — ambas (`app/services/PhoneMockup.tsx` y `app/services/ServicesContact.tsx`) son puramente decorativas: el contenido real (título, texto) ya está en HTML accesible aparte, y las imágenes son ilustraciones de apoyo (mockup del teléfono, avión de papel). Ya tenían `alt=""` junto con `aria-hidden`, que es el tratamiento correcto para este caso — no hacía falta describirlas.
- [ ] Botón de idioma tiene que tener mejor UI UX, que se note que es un botón de lenguaje y tenga algun ícono si es necesario.
- [ ] **Revisar el sitio en mobile real** — no pude verificarlo bien desde el navegador remoto. Chequear especialmente el hero, el espaciado entre secciones y el tamaño de los botones.

---

## Si solo hacés cinco cosas

1. `og:image` + `lang="es-AR"`
2. Renderizado en servidor
3. Dos o tres proyectos con captura y resultado
4. Formulario en lugar de `mailto:`
5. Rango de precios + preguntas frecuentes
