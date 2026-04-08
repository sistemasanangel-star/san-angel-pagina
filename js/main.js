// ═══════════════════════════════════════════════
//  HOSPITAL SAN ÁNGEL — CHATBOT ENGINE
//  Base de conocimiento editable por el equipo
// ═══════════════════════════════════════════════

const KNOWLEDGE_BASE = [
  {
    patterns: ["hola", "buenos", "buenas", "hi", "saludos", "hey"],
    response: "¡Hola! 👋 Soy el asistente del <strong>Hospital San Ángel</strong>. Puedo darte información sobre precios, servicios y más.\n\n¿Sobre qué procedimiento quieres saber el precio?"
  },
  {
    patterns: ["histerectomia", "histerectomía", "utero", "útero", "uterina"],
    response: "🔹 <strong>Histerectomía</strong>\n\n💰 Precio: <strong>Q8,500</strong>\n\n✅ <strong>Incluye:</strong>\n• Sala de operaciones (hora y media)\n• Laboratorios pre-operatorios básicos\n• 48h encamamiento y alimentación\n• Antibiótico (Ceftriaxona) + Analgésico (Diclofenaco)\n• Soluciones intravenosas + Sonda Foley\n• Materiales de sutura y desechables\n• Atención médica y enfermería 24h\n\n¿Deseas agendar o tienes más preguntas? 📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["apendice", "apéndice", "apendicectomia", "apendicectomía"],
    response: "🔹 <strong>Apendicectomía</strong>\n\n💰 Precio: <strong>Q7,500</strong>\n\n✅ <strong>Incluye:</strong>\n• Sala de operaciones (hora y media)\n• Laboratorios pre-operatorios básicos\n• 48h encamamiento y alimentación\n• Antibiótico (Ceftriaxona) + Analgésico (Diclofenaco)\n• Soluciones intravenosas\n• Materiales de sutura y desechables\n• Atención médica y enfermería 24h\n\n⚡ Disponible como urgencia las 24h. Llama al <strong>3297-4228</strong>"
  },
  {
    patterns: ["hernia", "hernioplastia"],
    response: "🔹 <strong>Hernioplastia</strong>\n\n💰 Precio: <strong>Q8,500</strong>\n\n✅ <strong>Incluye:</strong>\n• Sala de operaciones (hora y media)\n• Laboratorios pre-operatorios básicos\n• 48h encamamiento y alimentación\n• Antibiótico + Analgésico + Soluciones IV\n• Materiales de sutura y desechables\n• Atención médica y enfermería 24h\n\n¿Quieres más información? 📞 <strong>3297-4228</strong>"
  },
  {
    patterns: ["colecistecomia", "colecistectomia", "colecistectomía", "vesicula", "vesícula", "laparoscopia", "laparoscopica", "laparoscópica"],
    response: "🔹 <strong>Colecistectomía</strong>\n\n💰 <strong>Sin video (abierta):</strong> Q8,600\n💰 <strong>Con video (laparoscópica):</strong> Q13,500\n\n✅ <strong>Incluye ambas:</strong>\n• Sala de operaciones equipada\n• Laboratorios pre-operatorios\n• 48h encamamiento y alimentación\n• Antibiótico + Analgésico + Soluciones IV\n• Materiales quirúrgicos\n• Drenaje de penrose\n\n¿Cuál te interesa? Llama al <strong>3297-4228</strong>"
  },
  {
    patterns: ["prostata", "próstata"],
    response: "🔹 <strong>Cirugía de Próstata</strong>\n\n💰 <strong>Con video:</strong> Q13,500\n💰 <strong>Abierta:</strong> Q9,500\n\n✅ <strong>Incluye:</strong>\n• Sala de operaciones equipada\n• Laboratorios pre-operatorios\n• 48h encamamiento y alimentación\n• Antibiótico + Analgésico + Soluciones IV\n• Sonda Foley + Bolsa recolectora\n• Materiales quirúrgicos\n\n📞 Para más info: <strong>3297-4228</strong>"
  },
  {
    patterns: ["cesarea", "cesárea"],
    response: "🔹 <strong>Cesárea</strong>\n\n💰 Precio: <strong>Q7,500</strong>\n\n✅ <strong>Incluye:</strong>\n• Sala de operaciones (hora y media)\n• Laboratorios pre-operatorios\n• 48h encamamiento y alimentación\n• Oxitocina + Antibiótico + Analgésico\n• Gotas de Cloranfernicol\n• Pañales adulto y pediátricos\n• Sonda Foley + Soluciones IV\n• Atención al bebé incluida\n\n🏥 Disponible las 24h. Llama al <strong>3297-4228</strong>"
  },
  {
    patterns: ["parto", "dar a luz", "nacimiento", "labor"],
    response: "🔹 <strong>Parto Vaginal</strong>\n\n💰 Precio: <strong>Q4,500</strong>\n\n✅ <strong>Incluye:</strong>\n• Sala de partos equipada\n• 24h encamamiento y alimentación\n• Oxitocina + Vitamina K\n• Gotas de Cloranfernicol\n• Pañales adulto y pediátricos\n• Sonda de aspiración\n• Atención al bebé incluida\n\n🏥 Disponible las 24h. Llama al <strong>3297-4228</strong>"
  },
  {
    patterns: ["legrado"],
    response: "🔹 <strong>Legrado</strong>\n\n💰 Precio: <strong>Q6,500</strong>\n\n✅ <strong>Incluye:</strong>\n• Sala de operaciones (hora y media)\n• 24h encamamiento y alimentación\n• Pañal para adulto\n• Atención médica y enfermería\n\n⚠️ Medicamentos tienen costo adicional.\n📞 Info: <strong>3297-4228</strong>"
  },
  {
    patterns: ["ameu"],
    response: "🔹 <strong>AMEU</strong>\n\n💰 Precio: <strong>Q4,500</strong>\n\n✅ <strong>Incluye:</strong>\n• Sala equipada (hora y media)\n• 12 a 18h encamamiento y alimentación\n• Pañal para adulto\n• Atención médica y enfermería\n\n⚠️ Medicamentos tienen costo adicional.\n📞 Info: <strong>3297-4228</strong>"
  },
  {
    patterns: ["precio", "precios", "costo", "cuanto", "cuánto", "tarifa", "cobran", "procedimiento", "procedimientos", "cirugia", "cirugía"],
    response: "💰 <strong>Precios de procedimientos:</strong>\n\n🔹 Histerectomía — Q8,500\n🔹 Apendicectomía — Q7,500\n🔹 Hernioplastia — Q8,500\n🔹 Colecistectomía — Q8,600\n🔹 Colecistectomía laparoscópica — Q13,500\n🔹 Próstata con video — Q13,500\n🔹 Próstata abierta — Q9,500\n🔹 Cesárea — Q7,500\n🔹 Parto — Q4,500\n🔹 Legrado — Q6,500\n🔹 AMEU — Q4,500\n\n👆 Escribe el nombre del procedimiento para ver <strong>qué incluye</strong> exactamente."
  },
  {
    patterns: ["horario", "hora", "abierto", "cuando", "atienden", "24"],
    response: "🕐 Estamos abiertos <strong>las 24 horas, los 7 días</strong> incluyendo feriados. Emergencias, laboratorio y quirófano siempre disponibles."
  },
  {
    patterns: ["donde", "dirección", "ubicación", "llegar", "mapa", "chimaltenango"],
    response: "📍 <strong>4ta. Avenida 1-78, Zona 1, Chimaltenango</strong>\n\nCerca del centro. Parqueo propio disponible 24h sin costo. 🅿️"
  },
  {
    patterns: ["emergencia", "urgencia", "urgente", "grave", "ayuda"],
    response: "🚨 <strong>EMERGENCIAS — Llama ahora:</strong>\n\n📞 <strong>3297-4228</strong>\n📞 <strong>3994-4181</strong>\n\nDisponibles las 24 horas, los 7 días."
  },
  {
    patterns: ["ambulancia", "traslado"],
    response: "🚑 Sí, tenemos ambulancia disponible <strong>24 horas</strong> para emergencias y traslados.\n\nLlama al <strong>3297-4228</strong> para solicitarla."
  },
  {
    patterns: ["laboratorio", "examen", "análisis", "analisis", "sangre"],
    response: "🔬 Laboratorio clínico disponible <strong>24 horas</strong>.\n\nRealizamos: Hematología, Bioquímica, Hormonas, Microbiología, Marcadores tumorales y más. Resultados confiables y rápidos."
  },
  {
    patterns: ["intensivo", "uci", "neonatal", "pediatrico", "pediátrico"],
    response: "🏥 <strong>Áreas Intensivas 24h:</strong>\n\n👨‍⚕️ Intensivo Adultos — cubículos individuales\n👧 Intensivo Pediátrico — atención especializada\n👶 Intensivo Neonatal — incubadoras modernas\n\nMonitoreo constante. Llama al <strong>3297-4228</strong>"
  },
  {
    patterns: ["habitacion", "habitación", "privada", "cuarto", "encamamiento"],
    response: "🛏️ <strong>Habitaciones:</strong>\n\n• Semiprivada — incluida en todos los paquetes\n• Privada — Q850 adicionales por día (baño, TV, área de visitas)\n• Encamamiento adicional — Q1,250 por día extra\n\n¿Tienes alguna otra pregunta?"
  },
  {
    patterns: ["gracias", "ok", "listo", "perfecto"],
    response: "¡Con mucho gusto! 😊 Cualquier otra duda estamos aquí las 24h. ¡Que estés bien!"
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
    const lower = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let bestMatch = null;
    let bestScore = 0;

    for (const entry of KNOWLEDGE_BASE) {
      for (const pattern of entry.patterns) {
        const normalizedPattern = pattern.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (lower.includes(normalizedPattern)) {
          const score = normalizedPattern.length;
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
    const text = this.inputEl.value.trim();
    if (!text) return;

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

