/* ═══════════════════════════════════════════════════
   STUDIO 3 — FOLIO 01
   JavaScript
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL REVEAL ──────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 50);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


  /* ── ACTIVE NAV ─────────────────────────────────── */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks  = document.querySelectorAll('.nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });


  /* ── REFLECTION PANEL TOGGLE ────────────────────── */
  // Click to open, click elsewhere to close.
  // Hover also works via CSS (.rf-panel.open).
  document.querySelectorAll('.rf-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const panel  = btn.nextElementSibling;
      const isOpen = panel.classList.contains('open');

      // Close all open panels first
      document.querySelectorAll('.rf-panel.open').forEach(p => p.classList.remove('open'));

      // Toggle the clicked one
      if (!isOpen) panel.classList.add('open');
    });
  });

  // Close panels on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.rf-panel.open').forEach(p => p.classList.remove('open'));
  });

});