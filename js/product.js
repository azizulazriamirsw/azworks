// js/product.js

/**
 * Initializes all product "Learn more" toggle buttons.
 * Each button toggles the visibility of the panel referenced by its
 * `aria-controls` attribute.
 */
export function initProductToggles() {
  const buttons = document.querySelectorAll('.products-toggle-btn');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(targetId);
      if (!panel) return;

      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Toggle visibility
      panel.hidden = isOpen;

      // Update button state
      btn.setAttribute('aria-expanded', String(!isOpen));

      const label = btn.querySelector('.btn-label');
      if (label) {
        label.textContent = isOpen ? 'Ketahui lebih lanjut' : 'Tutup';
      }
    });
  });
}