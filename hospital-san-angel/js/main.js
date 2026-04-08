// ═══════════════════════════════════════════════
//  HOSPITAL SAN ÁNGEL — CHATBOT ENGINE
//  Base de conocimiento editable por el equipo
// ═══════════════════════════════════════════════

const KNOWLEDGE_BASE = [
  // ─── SALUDOS ───
  {
    patterns: ["hola", "buenos días", "buenas tardes", "buenas noches", "buenas", "hi", "hello", "saludos"],
    response: "¡Hola! 👋 Bienvenido al Hospital San Ángel. Estoy aquí para ayudarte con información sobre nuestros servicios, precios y horarios. ¿En qué puedo asistirte hoy?",
    category: "saludo"
  },
  // ─── HORARIOS ───
  {
    patterns: ["horario", "horarios", "hora", "horas", "abierto", "cuando atienden", "atienden", "abren", "cierran", "disponible"],
    response: "🕐 El Hospital San Ángel ofrece <strong>servicio 24 horas al día, los 7 días de la semana</strong>, incluyendo días feriados. Esto incluye:\n• Consultas médicas\n• Emergencias\n• Laboratorio clínico\n• Rayos X\n• Ultrasonidos\n• Procedimientos quirúrgicos\n\n¿Necesitas información específica de algún servicio?",
    category: "horarios"
  },
  // ─── UBICACIÓN ───
  {
    patterns: ["donde", "dirección", "ubicación", "ubicados", "como llegar", "mapa", "dónde están", "chimaltenango", "zona 1"],
    response: "📍 Nos encontramos en:\n\n<strong>4ta. Avenida 1-78, Zona 1\nChimaltenango, Guatemala</strong>\n\nContamos con parqueo propio en las instalaciones. Puedes encontrarnos en Google Maps buscando 'Hospital San Ángel Chimaltenango'.",
    category: "ubicacion"
  },
  // ─── CONTACTO ───
  {
    patterns: ["teléfono", "telefono", "número", "numero", "llamar", "contacto", "whatsapp", "comunicarse", "contactar"],
    response: "📞 Puedes contactarnos por:\n\n• <strong>WhatsApp:</strong> 3297-4228\n• <strong>Teléfono:</strong> 5121-9282\n• <strong>Correo:</strong> sanatoriosanangel@gmail.com\n\nPara emergencias, llama directamente al <strong>5121-9282</strong>. Atendemos las 24 horas. 🚨",
    category: "contacto"
  },
  // ─── EMERGENCIAS ───
  {
    patterns: ["emergencia", "urgencia", "urgente", "accidente", "emergencias", "urgencias", "grave", "ayuda"],
    response: "🚨 <strong>EMERGENCIAS 24 HORAS</strong>\n\nLlama AHORA al:\n• 📱 3297-4228 (WhatsApp)\n• ☎️ 5121-9282\n\nContamos con servicio de ambulancia disponible las 24 horas. Nuestro equipo de emergencias está listo para atenderte de inmediato.\n\n¿Necesitas el servicio de ambulancia?",
    category: "emergencias"
  },
  // ─── AMBULANCIA ───
  {
    patterns: ["ambulancia", "traslado", "transporte", "recoger"],
    response: "🚑 Contamos con <strong>servicio de ambulancia 24 horas</strong>, todos los días de la semana para:\n• Emergencias\n• Traslados de pacientes\n\nPara solicitar la ambulancia llama al:\n• 📱 3297-4228\n• ☎️ 5121-9282",
    category: "ambulancia"
  },
  // ─── SERVICIOS GENERALES ───
  {
    patterns: ["servicios", "que ofrecen", "qué tienen", "que tienen", "ofrecen"],
    response: "🏥 El Hospital San Ángel ofrece los siguientes servicios, <strong>todos disponibles 24 horas</strong>:\n\n• 👨‍⚕️ Consultas médicas\n• 🚨 Emergencias\n• 🚑 Ambulancia\n• 👩‍⚕️ Médicos especialistas\n• ⚕️ Procedimientos quirúrgicos\n• 🔬 Laboratorio clínico\n• 📡 Ultrasonidos\n• ☢️ Rayos X\n• 🧠 Tomografías\n• ❤️ Electrocardiograma (EKG)\n• 🛏️ Habitaciones privadas y semiprivadas\n• 👶 UCI Adultos, Pediátrica y Neonatal\n\n¿Te interesa algún servicio en particular?",
    category: "servicios"
  },
  // ─── CIRUGÍAS / PROCEDIMIENTOS ───
  {
    patterns: ["cirugía", "cirugia", "operación", "operacion", "quirúrgico", "quirurgico", "procedimiento", "intervención"],
    response: "⚕️ Realizamos procedimientos quirúrgicos <strong>las 24 horas</strong>:\n\n• Histerectomía\n• Apendicectomía\n• Hernioplastia\n• Colecistectomía (con y sin video)\n• Cirugía de próstata (con y sin video)\n• Cesáreas\n• Partos\n• Legrado\n• AMEU\n\nCada procedimiento incluye laboratorios pre-operatorios, medicamentos, encamamiento y alimentación. Para más detalles sobre precios, contáctanos al <strong>5121-9282</strong>.",
    category: "cirugias"
  },
  // ─── LABORATORIO ───
  {
    patterns: ["laboratorio", "examen", "análisis", "analisis", "sangre", "orina", "muestra", "resultado", "prueba"],
    response: "🔬 Nuestro <strong>Laboratorio Clínico</strong> está disponible <strong>24 horas</strong> con análisis de:\n\n• Hematología\n• Coagulación\n• Enzimas y bioquímica\n• Electrolitos\n• Urología y coprología\n• Microbiología\n• Hormonas\n• Marcadores tumorales\n• Drogas e inmunología\n\nResultados confiables, prontos y precisos. ¿Necesitas más información?",
    category: "laboratorio"
  },
  // ─── ULTRASONIDO ───
  {
    patterns: ["ultrasonido", "eco", "ecosonograma", "ecografía", "ecografia", "embarazo", "prenatal"],
    response: "📡 Ofrecemos <strong>Ultrasonidos 24 horas</strong>:\n\n• Abdominal (hígado, riñones)\n• Obstétrico (embarazo)\n\nDiagnósticos certeros y precisos. Para más información o citas llama al <strong>5121-9282</strong>.",
    category: "ultrasonido"
  },
  // ─── RAYOS X ───
  {
    patterns: ["rayos x", "radiografía", "radiografia", "rx", "placa"],
    response: "☢️ Servicio de <strong>Rayos X 24 horas</strong> con menos radiación y diagnóstico confiable. Realizamos:\n\n• Tórax\n• Columna\n• Abdomen y pelvis\n• Cabeza y cuello\n• Extremidades superiores e inferiores",
    category: "rayos_x"
  },
  // ─── TOMOGRAFÍA ───
  {
    patterns: ["tomografía", "tomografia", "tac", "scanner", "scan"],
    response: "🧠 Contamos con <strong>Tomografías Computarizadas</strong>, disponibles con diagnóstico rápido y oportuno:\n\n• Cabeza y cuello\n• Tórax\n• Abdomen\n• Pelvis y extremidades\n\nPara más información llama al <strong>5121-9282</strong>.",
    category: "tomografia"
  },
  // ─── EKG ───
  {
    patterns: ["electrocardiograma", "ekg", "ecg", "corazón", "cardio"],
    response: "❤️ Ofrecemos <strong>Electrocardiograma (EKG)</strong>, una prueba médica rápida, indolora y no invasiva para evaluar la salud de tu corazón. Disponible las 24 horas.",
    category: "ekg"
  },
  // ─── HABITACIONES ───
  {
    patterns: ["habitación", "habitacion", "cuarto", "cuartos", "cama", "encamamiento", "internar", "hospedaje"],
    response: "🛏️ Contamos con <strong>dos tipos de habitaciones</strong>:\n\n<strong>Habitación Privada:</strong>\n• Baño y ducha privada\n• Espacio amplio con área abierta\n• Cama hospitalaria, TV, mesa y sillones\n• Precio adicional: Q850 por 24 hrs\n\n<strong>Habitación Semiprivada:</strong>\n• Espacio amplio\n• Cama hospitalaria, TV, mesa y sillones\n• Sin baño privado\n\nAmbas incluyen servicio de enfermería 24 horas.",
    category: "habitaciones"
  },
  // ─── UCI / INTENSIVO ───
  {
    patterns: ["uci", "intensivo", "cuidados intensivos", "icu", "neonatal", "pediátrico", "pediatrico", "neonato", "recién nacido"],
    response: "🏥 Contamos con <strong>Áreas de Cuidados Intensivos</strong> con monitoreo constante 24 horas:\n\n• 🧑‍⚕️ UCI Adultos\n• 👧 UCI Pediátrica\n• 👶 UCI Neonatal\n\nCubículos individuales con personal médico especializado para atender complicaciones severas de salud.",
    category: "uci"
  },
  // ─── CESÁREA ───
  {
    patterns: ["cesárea", "cesarea", "parto", "dar a luz", "nacimiento", "bebé", "bebe", "embarazada"],
    response: "👶 Atendemos <strong>partos y cesáreas 24 horas</strong>. Cada procedimiento incluye:\n• Sala de operaciones\n• Encamamiento y alimentación (24-48 hrs)\n• Medicamentos incluidos\n• Atención médica y de enfermería\n\nPara más información sobre precios o programar tu procedimiento, contáctanos al <strong>5121-9282</strong>.",
    category: "maternidad"
  },
  // ─── POR QUÉ ELEGIRNOS ───
  {
    patterns: ["por qué", "porque", "ventaja", "ventajas", "diferencia", "mejor", "bueno", "calidad", "recomendación"],
    response: "⭐ ¿Por qué elegir el Hospital San Ángel?\n\n• ✅ <strong>Precisión</strong> en diagnóstico y tratamiento\n• ⚡ <strong>Rapidez y eficacia</strong> en todos los servicios\n• 🏗️ <strong>Instalaciones adecuadas y seguras</strong>\n• 👨‍⚕️ <strong>Profesionales apasionados</strong> con vocación de servicio\n• 🕐 <strong>Atención 24/7</strong> todos los días del año\n\nNuestro compromiso es la atención responsable y el respeto a la vida.",
    category: "info"
  },
  // ─── ESPECIALISTAS ───
  {
    patterns: ["especialista", "médico", "medico", "doctor", "doctores", "especialidad"],
    response: "👨‍⚕️ Contamos con <strong>médicos especialistas</strong> disponibles para atenderte. Para consultar disponibilidad de especialistas o agendar una cita, contáctanos:\n\n• 📱 WhatsApp: 3297-4228\n• ☎️ Teléfono: 5121-9282",
    category: "especialistas"
  },
  // ─── PRECIOS GENERALES ───
  {
    patterns: ["precio", "precios", "costo", "costos", "cuánto cuesta", "cuanto cuesta", "tarifa", "tarifas", "cobran"],
    response: "💰 Para conocer los precios de nuestros procedimientos y servicios, te invitamos a:\n\n• Visitar nuestra sección de <strong>Procedimientos</strong> en el menú\n• Contactarnos directamente al <strong>5121-9282</strong> o <strong>3297-4228</strong> (WhatsApp)\n\nNuestro equipo te dará información detallada y personalizada según tus necesidades.",
    category: "precios"
  },
  // ─── AGRADECIMIENTO ───
  {
    patterns: ["gracias", "muchas gracias", "ok gracias", "genial", "excelente", "perfecto", "listo"],
    response: "¡Con mucho gusto! 😊 En Hospital San Ángel estamos para servirte. Si tienes más preguntas, no dudes en escribirnos. Recuerda que para emergencias puedes llamar al <strong>5121-9282</strong> las 24 horas. ¡Que tengas un excelente día!",
    category: "despedida"
  },
  // ─── DESPEDIDA ───
  {
    patterns: ["adiós", "adios", "hasta luego", "bye", "chao", "hasta pronto"],
    response: "¡Hasta luego! 👋 Recuerda que el Hospital San Ángel está disponible las <strong>24 horas</strong> para cualquier emergencia. Cuídate mucho. 💙",
    category: "despedida"
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
  const closeBtn = document.querySelector('.mobile-nav-close');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
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
  initMobileNav();
  initAccordion();
});
