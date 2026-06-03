# Documento de Contexto y Arquitectura: E-nnova

Este documento (`context.md`) contiene la información integral, fundacional y técnica del ecosistema E-nnova. Su propósito es servir como la única fuente de verdad ("Single Source of Truth") para entender, mantener, escalar o replicar el proyecto desde cero, garantizando la coherencia absoluta en todas sus dimensiones.

---

## 1. Identidad de Marca y Filosofía ("El Núcleo")

**E-nnova** es una marca personal/agencia dual operada por Eduardo Chan, desarrollador Front-End y estudiante de Ingeniería Mecatrónica. El nombre es una amalgama conceptual fundamentada en tres pilares:

1. **"E"**: La inicial del autor, aportando el factor de compromiso directo y sello personal.
2. **Innovación**: El diferenciador competitivo en cualquier mercado.
3. **Hipernova**: El evento astronómico de expansión masiva, utilizado como metáfora para el impulso y la estructura sólida ("el núcleo") que se le da a los proyectos en sus fases iniciales para que puedan expandirse.

**Misión:** Proveer a emprendedores, creadores de contenido y startups en fases iniciales de una infraestructura tecnológica y estética de nivel profesional (Senior). Se rechaza el uso de plantillas prefabricadas o software inflado (bloatware), apostando por el desarrollo a medida que garantice escalabilidad, rendimiento y propiedad intelectual total para el cliente.

---

## 2. Arquitectura de Información ("Hub and Spoke")

El proyecto web abandonó el modelo de falsa "Single Page Application" (donde el contenido se ocultaba con JavaScript, penalizando el SEO) para adoptar una arquitectura estática **Hub and Spoke** servida mediante SSR (Server-Side Rendering) con Astro.

- **El Hub (Master / Landing Page - `/`)**: Actúa como el núcleo distribuidor. Su objetivo es recibir al tráfico general, presentar la sinergia de la marca (la unión entre el diseño web y la ingeniería mecatrónica) y forzar una bifurcación temprana. El usuario debe elegir su camino ("puerta") sin requerir scroll excesivo.
- **Spoke 1 (E-nnova Design - `/design`)**: Perfil orientado estrictamente a soluciones de identidad visual, UI/UX y desarrollo web Front-End.
- **Spoke 2 (E-nnova Solutions - `/solutions`)**: Perfil orientado estrictamente a la ingeniería mecatrónica, automatización industrial, sistemas SCADA, domótica y modelado CAD 3D.

**Componentización Dinámica:** Para cumplir con el Principio DRY (Don't Repeat Yourself), los componentes (`Hero`, `Servicios`, `AcercaDe`, `Portafolio`, `Testimonios`, `Footer`) son compartidos. Su contenido se altera inyectando la propiedad `variant="hub" | "design" | "solutions"`. Astro compila únicamente el HTML correspondiente a la variante, erradicando la fuga de contenido o canibalización SEO.

---

## 3. Público Objetivo, Lenguaje y Tono

- **Público Objetivo:** Emprendedores no técnicos, dueños de negocios tradicionales buscando digitalización/automatización, creadores de contenido novatos y startups. Buscan soluciones "Plug and Play" sin lidiar con jerga técnica innecesaria.
- **Tono de Marca:** Elegante, educado, profesional, moderno, confiable, fresco y sobrio. La comunicación debe proyectar "solidez técnica".
- **Reglas Estrictas de Lenguaje:**

1. **Cero Emojis:** Prohibido el uso de emojis en toda la interfaz o código. Toda la iconografía debe provenir de la librería SVG personalizada (`E-core-icons`).
2. **Cero Textos en Mayúsculas Sostenidas:** Jamás utilizar clases como `uppercase` o escribir frases completas en mayúsculas (ni en botones, etiquetas o títulos). Se considera visualmente agresivo ("gritar al usuario"). La jerarquía se establece mediante el tamaño (escala tipográfica), el grosor (`font-bold`) o el color.
3. **Traducción al Español:** Todo el contenido visible para el usuario final debe estar en un español impecable, natural y formal (incluyendo el uso correcto de `¿` y `¡`).
4. **Comentarios en Código:** Directos, neutrales y documentativos (ej. "Lógica de paginación"). Nunca dejar "evidencia de desarrollo" o tonos informales/infantiles.

---

## 4. Sistema de Diseño y Estética UI/UX

La interfaz se inspira en el modelo **"Midnight Terminal Interface"** (referencia: Supabase). Es un espacio de trabajo oscuro, organizado y silenciosamente poderoso.

### Paleta de Colores Dinámica

El fondo universal del proyecto es **Midnight Abyss / Ebony Canvas (`#09090b` a `#121212`)**. La marca utiliza un sistema de degradados y colores de acento que reaccionan a la ruta actual (`data-route` en la etiqueta `<html>`).

- **Global/Hub (Master):** Neutral, blanco y negro, sobrio, altamente elegante.
- Texto resaltado: `#ffffff`
- Degradado principal: `linear-gradient(to top, #71717a, #ffffff)`

- **E-nnova Design:** Elegancia y fluidez.
- Acento Esmeralda: `#10b981`
- Degradado principal: `linear-gradient(to top, #047857, #10b981)`

- **E-nnova Solutions:** Tecnología, electricidad, profundidad.
- Acento Azul/Cian: `#30d2be`
- Degradado principal de 3 puntos: `linear-gradient(to top, #473b7b, #3584a7, #30d2be)`

### Glassmorphism y Superficies (Bento Box)

Se evita el uso excesivo de sombras tradicionales para crear elevación. En su lugar, se utilizan bordes sutiles (`border-contraste/50`), fondos semi-transparentes (`bg-tarjetas`) y desenfoque (`backdrop-blur-md`). La estructura principal de contenido se distribuye en rejillas estilo **Bento Box**.

### Tipografía

- **Principal (UI, Títulos, Cuerpo):** `Montserrat` (Sans-serif geométrica/humanista). Permite gran legibilidad en interfaces oscuras.
- **Secundaria (Técnica/Etiquetas):** Fuentes monoespaciadas (`font-mono`) para simular etiquetas de rutas, nombres de archivos (ej. `perfil.json`) o comandos de consola (`whoami`), reforzando la estética de terminal de desarrollo.

---

## 5. Oferta de Servicios Integrales

La propuesta de valor es la **Sinergia IoT & HMI**: la capacidad de construir el hardware robusto y, simultáneamente, la interfaz digital hermosa para controlarlo.

**Servicios Design:**

1. Diseño Web (Sitios escalables, PWA).
2. Diseño Publicitario (Piezas gráficas para conversión).
3. Identidad de Marca (Logotipos, paletas, manuales).
4. Diseño UI / UX (Interfaces intuitivas).
5. Identidad de Creador (Streamers, influencers).

**Servicios Solutions:**

1. Automatización Industrial (Optimización de producción).
2. Sistemas SCADA (HMI y adquisición de datos en tiempo real).
3. Lógica SCL & PLC (Siemens S7, arquitecturas modulares).
4. Domótica & Energía (Redes de microcontroladores).
5. Diseño y Modelado CAD (Paramétrico, 3D, manufactura).

---

## 6. Stack Tecnológico

Las herramientas seleccionadas priorizan el rendimiento de bajo nivel y la ausencia de dependencias pesadas.

- **Desarrollo Web (Design):** Astro (SSR, enrutamiento estático), Vanilla JavaScript (sin frameworks reactivos como React/Vue a menos que sea estrictamente necesario para evitar overhead), Tailwind CSS, Figma. Enfoque en PWA (Progressive Web Apps).
- **Ingeniería (Solutions):** C++, C#, Python, Siemens TIA Portal (SCL), SolidWorks. Microcontroladores (ESP32).

---

## 7. Directrices Técnicas de Desarrollo

Para replicar o modificar el código, se deben seguir estos estándares:

1. **Principio DRY (CSS y Tailwind):** Prohibido el _utility hell_ repetitivo. Todo patrón visual recurrente (tarjetas, botones, efectos hover) debe extraerse a la capa `@layer components` en `global.css` usando `@apply`.
2. **Estado sin JavaScript:** La navegación, la alternancia de temas de color y el contenido mostrado no deben depender de `MutationObservers` ni de manipulaciones del DOM pesadas. Todo se define en tiempo de compilación por Astro vía rutas (`Astro.url.pathname`) y propiedades (`Astro.props`).
3. **Interactividad Resiliente:** En lugar de funciones nativas bloqueantes (`alert()`, `confirm()`), se deben usar modales o Toasts controlados. Los botones interactivos deben gestionar su estado de carga (ej. clases `cursor-wait`, `opacity-70` y atributo `disabled` temporal) para evitar el doble envío.
4. **Gestión de Activos:** La iconografía es estrictamente proveída por la CDN de la librería personal en GitHub (`E-core-icons`). Las imágenes deben usar lazy loading y fallbacks (`onerror="this.style.display='none';"`).
5. **SEO Técnico Exigente:** Cada página de la arquitectura "Spoke" inyecta sus propias etiquetas semánticas (`<title>`, `<meta description>`, Open Graph, JSON-LD estructurado para `Person` o `WebSite`) a través del componente `SEO.astro`.

---

## 8. Guía de Solución: Efecto Hover en Degradados (Anti-Flicker Trick)

### El Problema

En Tailwind CSS, aplicar un degradado de fondo en el estado normal y querer cambiarlo a otro color o degradado durante el estado `:hover` suele causar un "parpadeo" o "flicker". Esto ocurre porque el navegador se ve obligado a recalcular el fondo, repintarlo y aplicar la máscara de recorte (`bg-clip-text`) simultáneamente en el momento de la transición.

### La Solución Arquitectónica

No se debe transicionar el `background-image`. El degradado y la regla de recorte deben estar **siempre activos** en el fondo del elemento, pero ocultos detrás del color sólido del texto. Durante el hover, la transición se aplica únicamente al canal alfa del texto, volviéndolo transparente para revelar orgánicamente el fondo.

**Implementación en CSS Global (`global.css`):**

```css
@layer components {
  /* Clase para el estado normal/texto estándar */
  .fluido-base {
    @apply bg-degradado-principal bg-clip-text transition-colors duration-300;
  }

  /* Clase disparadora del hover directo */
  .hover-fluido:hover {
    @apply text-transparent;
  }

  /* Clase disparadora para hovers condicionados a un contenedor padre (group) */
  .group:hover .group-hover-fluido {
    @apply text-transparent;
  }
}
```

**Uso en HTML/Astro:**

```html
<a href="/ruta" class="text-[#898989] fluido-base hover-fluido"> Inicio </a>

<div class="group cursor-pointer">
  <i
    class="icon-palette inline-block text-[#898989] fluido-base group-hover-fluido"
  ></i>
  <span class="text-[#898989] fluido-base group-hover-fluido">Ver Diseño</span>
</div>
```

Este método garantiza animaciones a 60fps constantes, manteniendo intacta la sensación "premium" y elegante de la plataforma sin importar el tamaño o cantidad de los elementos interactivos en pantalla.
