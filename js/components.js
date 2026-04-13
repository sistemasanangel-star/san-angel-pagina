// ═══════════════════════════════════════════════
//  HOSPITAL SAN ÁNGEL — SHARED COMPONENTS
// ═══════════════════════════════════════════════

function renderHeader(activePage = '') {
  return `
<header class="site-header">
  <nav class="nav-inner">
    <a href="../index.html" class="nav-logo">
      <img src="../assets/img/logo-transparent.png" alt="Hospital San Ángel" style="height:42px; width:auto; background:rgba(255,255,255,0.12); border-radius:10px; padding:5px 10px; backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.15);">
    </a>

    <ul class="nav-links">
      <li><a href="../index.html" ${activePage==='home'?'class="active"':''}>Inicio</a></li>
      <li><a href="servicios.html" ${activePage==='servicios'?'class="active"':''}>Servicios</a></li>
      <li><a href="procedimientos.html" ${activePage==='procedimientos'?'class="active"':''}>Procedimientos</a></li>
      <li><a href="laboratorio.html" ${activePage==='laboratorio'?'class="active"':''}>Laboratorio</a></li>
      <li><a href="instalaciones.html" ${activePage==='instalaciones'?'class="active"':''}>Instalaciones</a></li>
      <li><a href="contacto.html" class="nav-cta ${activePage==='contacto'?'active':''}">Contáctanos</a></li>
      <li><a href="referentes.html" style="color:var(--gold);font-weight:600;" class="${activePage==='referentes'?'active':''}">🔐 Referentes</a></li>
    </ul>

    <div class="nav-emergency">
      <a href="tel:32974228" class="emergency-pill">
        <span class="dot"></span>
        Emergencias 24h
      </a>
    </div>

    <button class="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<nav class="mobile-nav">
  <a href="../index.html">Inicio</a>
  <a href="servicios.html">Servicios</a>
  <a href="procedimientos.html">Procedimientos</a>
  <a href="laboratorio.html">Laboratorio</a>
  <a href="instalaciones.html">Instalaciones</a>
  <a href="recorrido.html">🎥 Conoce el Hospital</a>
  <a href="referentes.html" style="color:var(--gold);">🔐 Médicos Referentes</a>
  <a href="contacto.html">Contáctanos</a>
  <a href="tel:32974228" style="color: #ef5350; margin-top: 1rem;">🚨 Emergencias: 3297-4228</a>
</nav>
`;
}

function renderHeaderHome(activePage = '') {
  return `
<header class="site-header">
  <nav class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="assets/img/logo-transparent.png" alt="Hospital San Ángel" style="height:42px; width:auto; background:rgba(255,255,255,0.12); border-radius:10px; padding:5px 10px; backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.15);">
    </a>

    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Inicio</a></li>
      <li><a href="pages/servicios.html" ${activePage==='servicios'?'class="active"':''}>Servicios</a></li>
      <li><a href="pages/procedimientos.html" ${activePage==='procedimientos'?'class="active"':''}>Procedimientos</a></li>
      <li><a href="pages/laboratorio.html" ${activePage==='laboratorio'?'class="active"':''}>Laboratorio</a></li>
      <li><a href="pages/instalaciones.html" ${activePage==='instalaciones'?'class="active"':''}>Instalaciones</a></li>
      <li><a href="pages/contacto.html" class="nav-cta ${activePage==='contacto'?'active':''}">Contáctanos</a></li>
      <li><a href="pages/referentes.html" style="color:var(--gold);font-weight:600;" class="${activePage==='referentes'?'active':''}">🔐 Referentes</a></li>
    </ul>

    <div class="nav-emergency">
      <a href="tel:32974228" class="emergency-pill">
        <span class="dot"></span>
        Emergencias 24h
      </a>
    </div>

    <button class="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<nav class="mobile-nav">
  <a href="index.html">Inicio</a>
  <a href="pages/servicios.html">Servicios</a>
  <a href="pages/procedimientos.html">Procedimientos</a>
  <a href="pages/laboratorio.html">Laboratorio</a>
  <a href="pages/instalaciones.html">Instalaciones</a>
  <a href="pages/recorrido.html">🎥 Conoce el Hospital</a>
  <a href="pages/referentes.html" style="color:var(--gold);">🔐 Médicos Referentes</a>
  <a href="pages/contacto.html">Contáctanos</a>
  <a href="tel:32974228" style="color: #ef5350; margin-top: 1rem;">🚨 Emergencias: 3297-4228</a>
</nav>
`;
}

function renderFooter(isSubpage = false) {
  const base = isSubpage ? '../' : '';
  return `
<footer class="site-footer">
  <div class="footer-inner container">

    <!-- TOP: emergencia destacada -->
    <div class="footer-emergency-bar">
      <div class="footer-emergency-left">
        <span class="footer-emergency-dot"></span>
        <span>Atención 24 horas · 365 días del año</span>
      </div>
      <div class="footer-emergency-right">
        <a href="tel:32974228" class="footer-emergency-btn">🚨 3297-4228</a>
        <a href="https://wa.me/50232974228" target="_blank" class="footer-emergency-btn footer-emergency-btn--wa">💬 WhatsApp</a>
      </div>
    </div>

    <!-- MAIN GRID -->
    <div class="footer-top">

      <!-- Marca -->
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-icon">✚</div>
          <div class="logo-text">
            <strong>San Ángel</strong>
            <span>Hospital · Chimaltenango</span>
          </div>
        </div>
        <p>Salud para tu familia. Atención médica integral con excelencia, precisión y trato humano. Disponibles las 24 horas, los 7 días de la semana.</p>
        <div class="footer-contact-items">
          <a href="tel:32974228" class="footer-contact-item">
            <span class="footer-contact-icon">☎</span>
            <span>3297-4228</span>
          </a>
          <a href="https://wa.me/50232974228" target="_blank" class="footer-contact-item">
            <span class="footer-contact-icon">💬</span>
            <span>3297-4228</span>
          </a>
          <a href="mailto:sanatoriosanangel@gmail.com" class="footer-contact-item">
            <span class="footer-contact-icon">✉</span>
            <span>sanatoriosanangel@gmail.com</span>
          </a>
          <a href="https://www.facebook.com/p/Hospital-San-%C3%81ngel-100075453447320/" target="_blank" class="footer-contact-item">
            <span class="footer-contact-icon" style="font-size:0.85rem;">f</span>
            <span>Hospital San Ángel</span>
          </a>
          <div class="footer-contact-item footer-contact-item--plain">
            <span class="footer-contact-icon">📍</span>
            <span>4ta. Av. 1-78, Zona 1, Chimaltenango</span>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="footer-col">
        <h5>Navegación</h5>
        <ul>
          <li><a href="${base}index.html">Inicio</a></li>
          <li><a href="${base}pages/servicios.html">Servicios</a></li>
          <li><a href="${base}pages/procedimientos.html">Procedimientos</a></li>
          <li><a href="${base}pages/laboratorio.html">Laboratorio</a></li>
          <li><a href="${base}pages/instalaciones.html">Instalaciones</a></li>
          <li><a href="${base}pages/contacto.html">Contáctanos</a></li>
        </ul>
      </div>

      <!-- Servicios -->
      <div class="footer-col">
        <h5>Servicios 24h</h5>
        <ul>
          <li><a href="${base}pages/servicios.html#emergencias">🚨 Emergencias</a></li>
          <li><a href="${base}pages/servicios.html#ambulancia">🚑 Ambulancia</a></li>
          <li><a href="${base}pages/procedimientos.html">⚕️ Cirugías</a></li>
          <li><a href="${base}pages/laboratorio.html">🔬 Laboratorio</a></li>
          <li><a href="${base}pages/servicios.html#uci">🏥 UCI / Intensivo</a></li>
          <li><a href="${base}pages/recorrido.html">🎥 Recorrido virtual</a></li>
        </ul>
      </div>

    </div>

    <!-- BOTTOM -->
    <div class="footer-bottom">
      <p>© 2026 Hospital San Ángel · Chimaltenango, Guatemala · Todos los derechos reservados.</p>
      <a href="${base}pages/referentes.html" style="color:var(--gold);font-size:0.78rem;opacity:0.7;transition:opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">🔐 Portal Referentes</a>
    </div>

  </div>
</footer>
`;
}

function renderChatbot() {
  return `
<!-- CHATBOT TRIGGER -->
<button class="chatbot-trigger" id="chatbotTrigger" aria-label="Abrir chat">
  <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
  <span class="chatbot-badge">1</span>
</button>

<!-- CHATBOT WINDOW -->
<div class="chatbot-window" id="chatbotWindow" role="dialog" aria-label="Chat de ayuda">
  <div class="chatbot-header">
    <div class="chatbot-avatar">🏥</div>
    <div class="chatbot-header-info">
      <strong>San Ángel Asistente</strong>
      <span><span class="online-dot"></span> En línea · Responde al instante</span>
    </div>
    <button class="chatbot-close" id="chatbotClose" aria-label="Cerrar">✕</button>
  </div>

  <div class="chatbot-messages" id="chatMessages">
    <div class="msg bot">
      <div class="msg-bubble">¡Hola! 👋 Soy el asistente virtual del <strong>Hospital San Ángel</strong>. Estoy aquí para ayudarte con información sobre nuestros servicios, horarios, ubicación y más.<br><br>¿En qué puedo ayudarte hoy?</div>
      <span class="msg-time">Ahora</span>
    </div>
  </div>

  <div class="chat-quick-btns">
    <button class="quick-btn">Horarios 🕐</button>
    <button class="quick-btn">Ubicación 📍</button>
    <button class="quick-btn">Emergencias 🚨</button>
    <button class="quick-btn">Servicios 🏥</button>
    <button class="quick-btn">Ambulancia 🚑</button>
  </div>

  <div class="chatbot-input-area">
    <input type="text" class="chatbot-input" id="chatInput" 
      placeholder="Escribe tu pregunta..." 
      autocomplete="off" maxlength="200">
    <button class="chatbot-send" id="chatSend" aria-label="Enviar">
      <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
    </button>
  </div>
</div>
`;
}
