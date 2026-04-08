// ═══════════════════════════════════════════════
//  HOSPITAL SAN ÁNGEL — SHARED COMPONENTS
// ═══════════════════════════════════════════════

function renderHeader(activePage = '') {
  return `
<header class="site-header">
  <nav class="nav-inner">
    <a href="../index.html" class="nav-logo">
      <div class="logo-icon">✚</div>
      <div class="logo-text">
        <strong>San Ángel</strong>
        <span>Hospital</span>
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="../index.html" ${activePage==='home'?'class="active"':''}>Inicio</a></li>
      <li><a href="servicios.html" ${activePage==='servicios'?'class="active"':''}>Servicios</a></li>
      <li><a href="procedimientos.html" ${activePage==='procedimientos'?'class="active"':''}>Procedimientos</a></li>
      <li><a href="laboratorio.html" ${activePage==='laboratorio'?'class="active"':''}>Laboratorio</a></li>
      <li><a href="instalaciones.html" ${activePage==='instalaciones'?'class="active"':''}>Instalaciones</a></li>
      <li><a href="contacto.html" class="nav-cta ${activePage==='contacto'?'active':''}">Contáctanos</a></li>
    </ul>

    <div class="nav-emergency">
      <a href="tel:51219282" class="emergency-pill">
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
  <button class="mobile-nav-close" aria-label="Cerrar">✕</button>
  <a href="../index.html">Inicio</a>
  <a href="servicios.html">Servicios</a>
  <a href="procedimientos.html">Procedimientos</a>
  <a href="laboratorio.html">Laboratorio</a>
  <a href="instalaciones.html">Instalaciones</a>
  <a href="contacto.html">Contáctanos</a>
  <a href="tel:51219282" style="color: #ef5350; margin-top: 1rem;">🚨 Emergencias: 5121-9282</a>
</nav>
`;
}

function renderHeaderHome(activePage = '') {
  return `
<header class="site-header">
  <nav class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="logo-icon">✚</div>
      <div class="logo-text">
        <strong>San Ángel</strong>
        <span>Hospital</span>
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Inicio</a></li>
      <li><a href="pages/servicios.html" ${activePage==='servicios'?'class="active"':''}>Servicios</a></li>
      <li><a href="pages/procedimientos.html" ${activePage==='procedimientos'?'class="active"':''}>Procedimientos</a></li>
      <li><a href="pages/laboratorio.html" ${activePage==='laboratorio'?'class="active"':''}>Laboratorio</a></li>
      <li><a href="pages/instalaciones.html" ${activePage==='instalaciones'?'class="active"':''}>Instalaciones</a></li>
      <li><a href="pages/contacto.html" class="nav-cta ${activePage==='contacto'?'active':''}">Contáctanos</a></li>
    </ul>

    <div class="nav-emergency">
      <a href="tel:51219282" class="emergency-pill">
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
  <button class="mobile-nav-close" aria-label="Cerrar">✕</button>
  <a href="index.html">Inicio</a>
  <a href="pages/servicios.html">Servicios</a>
  <a href="pages/procedimientos.html">Procedimientos</a>
  <a href="pages/laboratorio.html">Laboratorio</a>
  <a href="pages/instalaciones.html">Instalaciones</a>
  <a href="pages/contacto.html">Contáctanos</a>
  <a href="tel:51219282" style="color: #ef5350; margin-top: 1rem;">🚨 Emergencias: 5121-9282</a>
</nav>
`;
}

function renderFooter(isSubpage = false) {
  const base = isSubpage ? '../' : '';
  return `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="nav-logo" style="margin-bottom:0;">
          <div class="logo-icon">✚</div>
          <div class="logo-text">
            <strong>San Ángel</strong>
            <span>Hospital</span>
          </div>
        </div>
        <p>Salud para tu familia. Atención médica integral con excelencia, precisión y trato humano. Disponibles 24 horas al día, los 7 días de la semana.</p>
        <div style="display:flex; gap:0.8rem; margin-top:0.5rem;">
          <a href="tel:51219282" style="color:rgba(255,255,255,0.4); font-size:1.4rem; transition:color 0.2s;" onmouseover="this.style.color='#42A5F5'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">📞</a>
          <a href="https://wa.me/50232974228" target="_blank" style="color:rgba(255,255,255,0.4); font-size:1.4rem; transition:color 0.2s;" onmouseover="this.style.color='#42A5F5'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">💬</a>
          <a href="mailto:sanatoriosanangel@gmail.com" style="color:rgba(255,255,255,0.4); font-size:1.4rem; transition:color 0.2s;" onmouseover="this.style.color='#42A5F5'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">✉️</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Navegación</h5>
        <ul>
          <li><a href="${base}index.html">Inicio</a></li>
          <li><a href="${base}pages/servicios.html">Servicios</a></li>
          <li><a href="${base}pages/procedimientos.html">Procedimientos</a></li>
          <li><a href="${base}pages/laboratorio.html">Laboratorio</a></li>
          <li><a href="${base}pages/instalaciones.html">Instalaciones</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Servicios</h5>
        <ul>
          <li><a href="${base}pages/servicios.html#emergencias">Emergencias 24h</a></li>
          <li><a href="${base}pages/servicios.html#ambulancia">Ambulancia</a></li>
          <li><a href="${base}pages/laboratorio.html">Laboratorio</a></li>
          <li><a href="${base}pages/procedimientos.html">Cirugías</a></li>
          <li><a href="${base}pages/servicios.html#uci">UCI / Intensivo</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contacto</h5>
        <ul>
          <li style="font-size:0.85rem; color:rgba(255,255,255,0.5); margin-bottom:0.3rem;">📍 4ta. Av. 1-78 Z.1, Chimaltenango</li>
          <li><a href="tel:51219282">☎️ 5121-9282</a></li>
          <li><a href="https://wa.me/50232974228">📱 3297-4228</a></li>
          <li><a href="mailto:sanatoriosanangel@gmail.com">✉️ Email</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Hospital San Ángel. Todos los derechos reservados.</p>
      <p>Diseñado con <span>♥</span> para Chimaltenango</p>
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
