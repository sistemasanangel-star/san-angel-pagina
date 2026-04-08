# 🏥 Hospital San Ángel — Sitio Web

## 📁 Estructura de Archivos

```
hospital-san-angel/
│
├── index.html              ← Página de inicio
│
├── pages/
│   ├── servicios.html      ← Todos los servicios
│   ├── procedimientos.html ← Cirugías y precios
│   ├── laboratorio.html    ← Lab, rayos X, ultrasonidos
│   ├── instalaciones.html  ← Fotos y descripción de áreas
│   └── contacto.html       ← Contacto, mapa y FAQ
│
├── css/
│   └── main.css            ← Todos los estilos (diseño completo)
│
└── js/
    ├── main.js             ← Chatbot, animaciones, menú
    └── components.js       ← Header, footer, chatbot HTML
```

---

## 🤖 Cómo Entrenar el Chatbot

El chatbot está **completamente en el archivo `js/main.js`** y NO requiere ningún servicio de pago.

### Para agregar o editar respuestas, busca `KNOWLEDGE_BASE` al inicio del archivo:

```javascript
const KNOWLEDGE_BASE = [
  {
    patterns: ["palabras clave", "más palabras", "sinónimos"],
    response: "La respuesta que dará el bot...",
    category: "nombre_categoria"
  },
  // ... más entradas
];
```

### Ejemplo — Agregar una especialidad médica:

```javascript
{
  patterns: ["cardiología", "cardiólogo", "corazón", "arritmia"],
  response: "Contamos con servicio de Cardiología. Para consultas o citas llama al 5121-9282.",
  category: "especialidades"
},
```

### Reglas:
- **`patterns`**: Palabras o frases que activan esta respuesta (sin acentos funciona igual)
- **`response`**: Puede incluir `<strong>texto</strong>` para negritas y `\n` para saltos de línea
- **`category`**: Solo para organización tuya, no afecta el funcionamiento
- El bot busca la coincidencia **más larga** primero

### Respuesta por defecto:
Si el bot no encuentra ninguna coincidencia, usa `DEFAULT_RESPONSE` al final de `KNOWLEDGE_BASE`.

---

## 📱 Botones de Acceso Rápido del Chat

En `js/components.js`, función `renderChatbot()`, busca:

```html
<button class="quick-btn">Horarios 🕐</button>
<button class="quick-btn">Ubicación 📍</button>
```

Puedes cambiar el texto de estos botones. El bot tomará ese texto como mensaje.

---

## 🎨 Cambiar Colores

En `css/main.css`, al inicio están las variables:

```css
:root {
  --blue: #1565C0;    /* Azul principal */
  --red: #D32F2F;     /* Rojo de emergencias */
  --navy: #0A1628;    /* Fondo oscuro */
}
```

---

## 📞 Actualizar Teléfonos

Busca y reemplaza en todos los archivos:
- `5121-9282` → nuevo número
- `3297-4228` → nuevo WhatsApp  
- `50232974228` → código país + número WhatsApp (sin guiones)

---

## 🖼️ Agregar Fotos Reales

Busca en los archivos las secciones con `facility-visual` o `hero-cards` y reemplaza los íconos emoji con:

```html
<img src="../assets/fotos/quirofano.jpg" alt="Quirófano" 
     style="width:100%; height:100%; object-fit:cover;">
```

---

## 🌐 Publicar el Sitio

El sitio es **100% estático** (HTML, CSS, JS puro). Puedes alojarlo en:
- **Netlify** — Arrastra la carpeta (gratis)
- **GitHub Pages** — Gratis
- **cPanel / Hosting tradicional** — Sube la carpeta por FTP
- No necesita servidor, PHP, ni base de datos

---

## ✅ Resumen de Páginas

| Página | Contenido |
|--------|-----------|
| `index.html` | Inicio, por qué elegirnos, servicios, contacto |
| `servicios.html` | Todos los servicios, UCI, habitaciones |
| `procedimientos.html` | Precios, paquetes quirúrgicos detallados |
| `laboratorio.html` | Análisis, rayos X, ultrasonido, tomografía, EKG |
| `instalaciones.html` | Recepción, quirófano, UCI, habitaciones, etc. |
| `contacto.html` | Teléfonos, mapa, FAQ |
