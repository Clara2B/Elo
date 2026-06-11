document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('nav-open'));
});

// Service tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
  });
});

// Contact form -> opens WhatsApp with prefilled message
const WHATSAPP_LINK = 'https://wa.me/message/BHLFEAG3KLSXL1';

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const nome = form.nome.value.trim();
  const telefone = form.telefone.value.trim();
  const procedimento = form.procedimento.value;
  const mensagem = form.mensagem.value.trim();

  let texto = `Olá, Elo! Meu nome é ${nome}.`;
  texto += `\nTenho interesse em: ${procedimento}.`;
  texto += `\nMeu WhatsApp: ${telefone}.`;
  if (mensagem) texto += `\n${mensagem}`;

  const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank', 'noopener');
});
