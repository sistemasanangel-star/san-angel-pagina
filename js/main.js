// ═══════════════════════════════════════════════
//  HOSPITAL SAN ÁNGEL — CHATBOT CON IA (Claude)
// ═══════════════════════════════════════════════

const HOSPITAL_SYSTEM_PROMPT = `Eres el asistente virtual del Hospital San Ángel, ubicado en 4ta. Avenida 1-78, Zona 1, Chimaltenango, Guatemala. Atiendes las 24 horas, los 7 días de la semana, incluyendo feriados.

Responde siempre en español, de forma amable, clara y concisa. Usa emojis moderadamente. No uses markdown con asteriscos, usa HTML simple si necesitas negritas (<strong>texto</strong>). Saltos de línea con \n.

⚠️ REGLA ABSOLUTA — MÉDICOS REFERENTES:
Si alguien pregunta sobre médicos referentes, comisiones, referir pacientes o convenios médicos, SOLO responde esto exactamente:
"Para información sobre el programa de médicos referentes, comuníquese directamente con nuestra visitadora médica:\n📱 <strong>5121-9282</strong> (llamadas y WhatsApp)"
NO des ningún precio, comisión, ni detalle adicional. Nada más.

⚠️ REGLA ABSOLUTA — TELÉFONOS:
El número 5121-9282 NUNCA debe aparecer en ninguna otra respuesta que no sea sobre médicos referentes. Para cualquier otra consulta usa ÚNICAMENTE: 3297-4228 y 3994-4181.

INFORMACIÓN DEL HOSPITAL:

TELÉFONOS GENERALES:
- Emergencias: 3297-4228 / 3994-4181
- WhatsApp: 3297-4228
- Correo: sanatoriosanangel@gmail.com

SERVICIOS GENERALES:
- UCI adultos, pediátrica y neonatal (24h)
- Laboratorio clínico (24h)
- Rayos X, ultrasonidos, tomografía, EKG
- Ambulancia (24h)
- Habitaciones semiprivadas (incluidas) y privadas (Q850/día adicional)
- Parqueo gratuito 24h

PROCEDIMIENTOS QUIRÚRGICOS Y PRECIOS (precio al paciente):
- Histerectomía: Q6,800
- Apendicectomía: Q6,800
- Hernioplastia: Q6,800
- Colecistectomía sin video: Q7,000
- Colecistectomía con video (laparoscópica): Q12,500
- Próstata con video: Q12,500
- Próstata sin video: Q9,500
- Cesárea: Q6,800
- Parto vaginal: Q3,800
- Legrado: Q3,800
- AMEU: Q3,500

TODOS LOS PAQUETES INCLUYEN:
- Laboratorios pre-operatorios básicos (Hematología, BUN, Creatinina, Glucosa)
- Sala de operaciones (hora y media)
- Encamamiento semiprivado y alimentación (48h en cirugías mayores, 24h en menores)
- Medicamentos y materiales básicos
- Atención médica y enfermería 24h

COSTOS ADICIONALES:
- Habitación privada: Q850 por 24h
- Kit de aseo personal: Q100
- Exámenes adicionales a los pre-operatorios básicos tienen costo extra
- Complicaciones: costo adicional con autorización previa del paciente

Si no sabes algo específico, invita a contactar: 3297-4228 o 3994-4181. No inventes precios ni información que no esté aquí.`;

// ─── MOTOR DEL CHATBOT CON IA ───
class HospitalChatbot {
  constructor() {
    this.isOpen = false;
    this.conversationHistory = [];
    this.isLoading = false;
    this.init();
  }

  init() {
    this.window = document.getElementById('chatbotWindow');
    this.trigger = document.getElementById('chatbotTrigger');
    this.closeBtn = document.getElementById('chatbotClose');
    this.messagesEl = document.getElementById('chatMessages');
    this.inputEl = document.getElementById('chatInput');
    this.sendBtn = document.getElementById('chatSend');

    if (!this.window) return;

    this.trigger.addEventListener('click', () => this.toggle());
    this.closeBtn.addEventListener('click', () => this.close());
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.inputEl.value = btn.textContent;
        this.sendMessage();
      });
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.window.classList.add('open');
    const badge = document.querySelector('.chatbot-badge');
    if (badge) badge.style.display = 'none';
    setTimeout(() => this.inputEl.focus(), 300);
  }

  close() {
    this.isOpen = false;
    this.window.classList.remove('open');
  }

  async callAI(messages) {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.reply || null;
  }

  async sendMessage() {
    if (this.isLoading) return;
    const text = this.inputEl.value.trim();
    if (!text) return;

    this.addMessage(text, 'user');
    this.inputEl.value = '';
    this.inputEl.focus();

    this.conversationHistory.push({ role: 'user', content: text });

    this.isLoading = true;
    this.sendBtn.disabled = true;
    this.showTyping();

    try {
      const messages = [
        { role: 'system', content: HOSPITAL_SYSTEM_PROMPT },
        ...this.conversationHistory
      ];

      const reply = await this.callAI(messages);

      this.hideTyping();

      if (reply) {
        this.conversationHistory.push({ role: 'assistant', content: reply });
        this.addMessage(reply, 'bot');
      } else {
        this.addMessage('En este momento hay mucha demanda. Por favor contáctanos:\n📞 <strong>3297-4228</strong> | <strong>3994-4181</strong>', 'bot');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      this.hideTyping();
      this.addMessage('Hubo un problema de conexión. Por favor contáctanos directamente:\n📞 <strong>5121-9282</strong>', 'bot');
    } finally {
      this.isLoading = false;
      this.sendBtn.disabled = false;
    }
  }

  addMessage(text, sender) {
    const now = new Date();
    const time = now.toLocaleTimeString('es-GT', { hour: '2-digit', minute: '2-digit' });

    const div = document.createElement('div');
    div.className = `msg ${sender}`;
    div.innerHTML = `
      <div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>
      <span class="msg-time">${time}</span>
    `;
    this.messagesEl.appendChild(div);
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }

  showTyping() {
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.id = 'typingIndicator';
    div.innerHTML = `
      <div class="msg-bubble">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    this.messagesEl.appendChild(div);
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }

  hideTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
  }
}

// ─── SCROLL ANIMATIONS ───
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── STICKY HEADER ───
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── MOBILE NAV ───
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.add('open');
    hamburger.classList.add('active');
  }
  function closeMenu() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('active');
  }

  hamburger.addEventListener('click', () => {
    mobileNav.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close when clicking a link
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) closeMenu();
  });
}

// ─── ACCORDION ───
function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.accordion-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  new HospitalChatbot();
  initScrollAnimations();
  initStickyHeader();
  initCarousels();
  initMobileNav();
  initAccordion();
});

// ─── PHOTO CAROUSEL ───
function initCarousels() {
  document.querySelectorAll('.carousel').forEach(car => {
    const track = car.querySelector('.carousel-track');
    const slides = car.querySelectorAll('.carousel-slide');
    const prev = car.querySelector('.carousel-prev');
    const next = car.querySelector('.carousel-next');
    const dots = car.querySelector('.carousel-dots');
    if (!track || slides.length === 0) return;

    let cur = 0;
    let autoTimer = null;

    // Build dots
    if (dots) {
      dots.innerHTML = Array.from(slides).map((_, i) =>
        `<button class="carousel-dot ${i===0?'active':''}" data-i="${i}"></button>`
      ).join('');
      dots.querySelectorAll('.carousel-dot').forEach(d => {
        d.addEventListener('click', () => goTo(Number(d.dataset.i)));
      });
    }

    function goTo(i) {
      cur = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      car.querySelectorAll('.carousel-dot').forEach((d, j) =>
        d.classList.toggle('active', j === cur)
      );
      resetAuto();
    }

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => goTo(cur + 1), 4500);
    }

    if (prev) prev.addEventListener('click', () => goTo(cur - 1));
    if (next) next.addEventListener('click', () => goTo(cur + 1));

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) goTo(dx < 0 ? cur + 1 : cur - 1);
    }, {passive:true});

    resetAuto();
  });
}

