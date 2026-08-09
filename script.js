function initAccordions(container) {
  const headers = container.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const isOpen = header.getAttribute('aria-expanded') === 'true';
      const body = header.nextElementSibling;

      header.setAttribute('aria-expanded', String(!isOpen));
      body.classList.toggle('open', !isOpen);
    });
  });
}

function initChipLinks(container) {
  const scrollContainer = container;

  container.querySelectorAll('.chip-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = container.querySelector(`#${targetId}`);
      if (!target) return;

      const header = target.querySelector('.accordion-header');
      const body = target.querySelector('.accordion-body');
      if (header && body && header.getAttribute('aria-expanded') === 'false') {
        header.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const helpContainer = document.getElementById('helpContainer');
  if (!helpContainer) return;

  initAccordions(helpContainer);
  initChipLinks(helpContainer);
});
