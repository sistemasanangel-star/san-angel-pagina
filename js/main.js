// ═══════════════════════════════════════════════
//  HOSPITAL SAN ÁNGEL — CHATBOT ENGINE
//  Base de conocimiento editable por el equipo
// ═══════════════════════════════════════════════

const KNOWLEDGE_BASE = [
  {
    patterns: ["hola", "buenos", "buenas", "hi", "saludos", "hey"],
    response: "¡Hola! 👋 Soy el asistente del <strong>Hospital San Ángel</strong>. Puedo darte información sobre precios y servicios.\n\n¿Sobre qué procedimiento quieres saber?"
  },
  {
    patterns: ["histerectomia", "histerectomía", "utero", "útero", "uterina"],
    response: "🔹 <strong>Histerectomía</strong>\nExtirpación del útero. Cirugía ginecológica mayor.\n\n💰 Precio: <strong>Q8,500</strong>\n\n✅ Incluye: sala de operaciones, laboratorios pre-operatorios, encamamiento y alimentación, medicamentos básicos, materiales quirúrgicos y atención médica 24h.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["apendice", "apéndice", "apendicectomia", "apendicectomía"],
    response: "🔹 <strong>Apendicectomía</strong>\nExtirpación del apéndice. Disponible como urgencia las 24h.\n\n💰 Precio: <strong>Q7,500</strong>\n\n✅ Incluye: sala de operaciones, laboratorios pre-operatorios, encamamiento y alimentación, medicamentos básicos, materiales quirúrgicos y atención médica 24h.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["hernia", "hernioplastia"],
    response: "🔹 <strong>Hernioplastia</strong>\nReparación quirúrgica de hernias abdominales e inguinales.\n\n💰 Precio: <strong>Q8,500</strong>\n\n✅ Incluye: sala de operaciones, laboratorios pre-operatorios, encamamiento y alimentación, medicamentos básicos, materiales quirúrgicos y atención médica 24h.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["colecistecomia", "colecistectomia", "colecistectomía", "vesicula", "vesícula", "laparoscopia", "laparoscopica", "laparoscópica"],
    response: "🔹 <strong>Colecistectomía</strong>\nExtirpación de la vesícula biliar.\n\n💰 Sin video: <strong>Q8,600</strong>\n💰 Con video (laparoscópica): <strong>Q13,500</strong>\n\n✅ Incluye: sala de operaciones, laboratorios pre-operatorios, encamamiento y alimentación, medicamentos básicos, materiales quirúrgicos y atención médica 24h.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["prostata", "próstata"],
    response: "🔹 <strong>Cirugía de Próstata</strong>\nTratamiento quirúrgico de la próstata.\n\n💰 Con video: <strong>Q13,500</strong>\n💰 Abierta: <strong>Q9,500</strong>\n\n✅ Incluye: sala de operaciones, laboratorios pre-operatorios, encamamiento y alimentación, medicamentos básicos, materiales quirúrgicos y atención médica 24h.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["cesarea", "cesárea"],
    response: "🔹 <strong>Cesárea</strong>\nParto quirúrgico programado o de urgencia, disponible las 24h.\n\n💰 Precio: <strong>Q7,500</strong>\n\n✅ Incluye: sala de operaciones, laboratorios pre-operatorios, encamamiento y alimentación, medicamentos básicos, atención al bebé y enfermería 24h.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["parto", "dar a luz", "nacimiento", "labor"],
    response: "🔹 <strong>Parto Vaginal</strong>\nAtención del parto natural con personal especializado las 24h.\n\n💰 Precio: <strong>Q4,500</strong>\n\n✅ Incluye: sala de partos, encamamiento y alimentación, medicamentos básicos, atención al bebé y enfermería 24h.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["legrado"],
    response: "🔹 <strong>Legrado</strong>\nProcedimiento ginecológico de limpieza uterina.\n\n💰 Precio: <strong>Q6,500</strong>\n\n✅ Incluye: sala de operaciones, encamamiento y alimentación, y atención médica.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["ameu", "aspiracion", "aspiración", "endouterina"],
    response: "🔹 <strong>AMEU</strong>\nAspiración Manual Endouterina — procedimiento ginecológico menor.\n\n💰 Precio: <strong>Q4,500</strong>\n\n✅ Incluye: sala de operaciones, encamamiento y alimentación, y atención médica.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["precio", "precios", "costo", "cuanto", "cuánto", "tarifa", "cobran", "procedimiento", "procedimientos", "cirugia", "cirugía", "lista", "todos"],
    response: "💰 <strong>Precios de procedimientos:</strong>\n\n🔹 Histerectomía — Q8,500\n🔹 Apendicectomía — Q7,500\n🔹 Hernioplastia — Q8,500\n🔹 Colecistectomía — Q8,600\n🔹 Colecistectomía laparoscópica — Q13,500\n🔹 Próstata con video — Q13,500\n🔹 Próstata abierta — Q9,500\n🔹 Cesárea — Q7,500\n🔹 Parto — Q4,500\n🔹 Legrado — Q6,500\n🔹 AMEU — Q4,500\n\n👆 Escribe el nombre del procedimiento para ver más detalles."
  },
  {
    patterns: ["horario", "hora", "abierto", "cuando", "atienden", "24"],
    response: "🕐 Estamos abiertos <strong>las 24 horas, los 7 días</strong> incluyendo feriados."
  },
  {
    patterns: ["donde", "dirección", "ubicación", "llegar", "mapa", "chimaltenango"],
    response: "📍 <strong>4ta. Avenida 1-78, Zona 1, Chimaltenango</strong>\n\nParqueo propio disponible 24h sin costo. 🅿️"
  },
  {
    patterns: ["emergencia", "urgencia", "urgente", "grave", "ayuda"],
    response: "🚨 <strong>EMERGENCIAS:</strong>\n\n📞 <strong>3297-4228</strong>\n📞 <strong>3994-4181</strong>\n\nDisponibles las 24 horas."
  },
  {
    patterns: ["ambulancia", "traslado"],
    response: "🚑 Servicio de ambulancia disponible <strong>24 horas</strong>.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["laboratorio", "examen", "análisis", "analisis", "sangre"],
    response: "🔬 Laboratorio clínico disponible <strong>24 horas</strong> con resultados rápidos y confiables.\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["intensivo", "uci", "neonatal", "pediatrico", "pediátrico"],
    response: "🏥 <strong>Áreas Intensivas 24h:</strong>\n\n👨‍⚕️ Adultos — cubículos individuales\n👧 Pediátrico — atención especializada\n👶 Neonatal — incubadoras modernas\n\n📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["habitacion", "habitación", "privada", "cuarto", "encamamiento"],
    response: "🛏️ <strong>Habitaciones:</strong>\n\n• Semiprivada — incluida en todos los paquetes\n• Privada — Q850 adicionales por día\n• Encamamiento adicional — Q1,250/día"
  },
  {
    patterns: ["gracias", "ok", "listo", "perfecto"],
    response: "¡Con mucho gusto! 😊 Estamos disponibles las 24h. ¡Que estés bien!"
  },
];

// ─── RESPUESTA POR DEFECTO ───
const DEFAULT_RESPONSE = "No encontré información específica sobre eso, pero nuestro equipo puede ayudarte con todos los detalles. Contáctanos:\n\n• 📱 WhatsApp: 3297-4228\n• ☎️ Teléfono: 5121-9282\n• 📧 sanatoriosanangel@gmail.com\n\nAtendemos las <strong>24 horas</strong>, los 7 días de la semana. ¿Hay algo más en lo que pueda ayudarte?";

// ─── MOTOR DEL CHATBOT ───
class HospitalChatbot {
  constructor() {
    this.isOpen = false;
    this.messageCount = 0;
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

  findResponse(userText) {
    const lower = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    let bestMatch = null;
    let bestScore = 0;

    for (const entry of KNOWLEDGE_BASE) {
      for (const pattern of entry.patterns) {
        const np = pattern.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (lower.includes(np)) {
          // Exact full-message match gets massive bonus
          // Whole-word match gets bonus
          // Otherwise score by length
          let score = np.length;
          if (lower === np) score += 1000;
          else if (new RegExp('\\b' + np + '\\b').test(lower)) score += 100;
          if (score > bestScore) {
            bestScore = score;
            bestMatch = entry.response;
          }
        }
      }
    }
    return bestMatch || DEFAULT_RESPONSE;
  }

  sendMessage() {
    let text = this.inputEl.value.trim();
    if (!text) return;
    // Strip common question prefixes so "¿Cuánto cuesta AMEU?" → "AMEU"
    text = text.replace(/^[¿?]?cu[aá]nto cuesta\s+/i, '').trim();
    text = text.replace(/^[¿?]?cu[aá]nto vale\s+/i, '').trim();
    text = text.replace(/^[¿?]?precio de\s+/i, '').trim();
    text = text.replace(/^[¿?]?qu[eé] incluye\s+/i, '').trim();

    this.addMessage(text, 'user');
    this.inputEl.value = '';
    this.inputEl.focus();

    this.showTyping();
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      this.hideTyping();
      const response = this.findResponse(text);
      this.addMessage(response, 'bot');
    }, delay);
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

