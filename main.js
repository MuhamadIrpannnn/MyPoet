// main.js — Barcelona Website

// ── Progress Bar ──
const bar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
});

// ── Scroll Reveal (cards) ──
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const grid = entry.target.closest('.cards-grid');
      const siblings = grid ? [...grid.querySelectorAll('.reveal')] : [];
      const delay = grid ? siblings.indexOf(entry.target) * 80 : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ════════════════════════════════
// NAVBAR — muncul saat section closing terlihat
// ════════════════════════════════
const floatnav = document.getElementById('floatnav');

if (floatnav) {
  const closingSection = document.getElementById('closing');

  if (closingSection) {
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Closing section kelihatan → tampilkan navbar
          floatnav.classList.add('visible');
        } else {
          // Scroll balik ke atas → sembunyikan lagi
          const rect = closingSection.getBoundingClientRect();
          if (rect.top > 0) {
            floatnav.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.1 });

    navObs.observe(closingSection);
  }
}

// ════════════════════════════════
// SPLASH SCREEN + MUSIK
// Klik tombol splash → musik play → splash hilang
// ════════════════════════════════
const splash    = document.getElementById('splash');
const splashBtn = document.getElementById('splashBtn');
const music     = document.getElementById('bgMusic');

if (splashBtn && music) {
  splashBtn.addEventListener('click', () => {
    music.volume = 0.5;
    music.play().catch(() => {});

    splash.classList.add('splash-hide');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 600);
  });
}

// ════════════════════════════════
// VIDEO CONTROLS
// ════════════════════════════════
const video        = document.getElementById('closingVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const videoMuteBtn = document.getElementById('videoMuteBtn');

let videoMuted = true;

function toggleVideo() {
  if (!video) return;
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '⏸';
  } else {
    video.pause();
    playPauseBtn.textContent = '▶';
  }
}

function toggleVideoMute() {
  if (!video) return;
  videoMuted = !videoMuted;
  video.muted = videoMuted;
  videoMuteBtn.textContent = videoMuted ? '🔇' : '🔊';

  if (!videoMuted) {
    if (music) music.pause();
  } else {
    if (music) music.play().catch(() => {});
  }
}