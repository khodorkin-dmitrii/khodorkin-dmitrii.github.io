export function startPumpkinRain() {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const canvas = document.createElement('canvas');
  canvas.className = 'pumpkin-rain';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);
  const ctx = canvas.getContext('2d');
  const sprite = new Image();
  sprite.src = new URL('../assets/pumpkin-48x48.png', import.meta.url).href;
  const glow = document.createElement('canvas');
  glow.width = glow.height = 128;
  const gc = glow.getContext('2d');
  const gradient = gc.createRadialGradient(64, 64, 5, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,218,95,.85)');
  gradient.addColorStop(.35, 'rgba(255,184,35,.45)');
  gradient.addColorStop(1, 'rgba(255,168,20,0)');
  gc.fillStyle = gradient;
  gc.fillRect(0, 0, 128, 128);
  // Fixed slots avoid per-frame object/array allocations.
  const pumpkins = Array.from({ length: 5 }, () => ({ active: false }));
  let width, height, frame = 0, last = 0, delay = .4;
  function resize() {
    width = innerWidth;
    height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function draw(now) {
    frame = 0;
    if (document.hidden || motion.matches) return;
    const dt = Math.min((now - last) / 1000, .05);
    last = now;
    ctx.clearRect(0, 0, width, height);
    delay -= dt;
    const limit = width < 768 ? 3 : 5;
    if (sprite.naturalWidth && delay <= 0) {
      let slot;
      for (let i = 0; i < limit; i++) {
        if (!pumpkins[i].active) { slot = pumpkins[i]; break; }
      }
      if (slot) {
        Object.assign(slot, {
          active: true, x: width * (.12 + Math.random() * .8), y: -64,
          size: 36 + Math.random() * 28, speed: 30 + Math.random() * 28,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() < .5 ? -1 : 1) * (.18 + Math.random() * .18),
          phase: Math.random() * Math.PI * 2, age: 0, flash: 0
        });
        delay = 2 + Math.random() * 2;
      }
    }
    for (const p of pumpkins) {
      if (!p.active) continue;
      p.y += p.speed * dt;
      p.age += dt;
      p.angle += p.spin * dt;
      p.flash = Math.max(0, p.flash - dt);
      if (p.y > height + p.size) { p.active = false; continue; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = .5;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(sprite, -p.size / 2, -p.size / 2, p.size, p.size);
      // The small sine oscillation preserves the average glow strength.
      const pulse = 1 + .12 * Math.sin(p.age * 2.4 + p.phase);
      const flash = p.flash / .55;
      ctx.globalAlpha = Math.min(1, .3 * pulse + .65 * flash);
      ctx.imageSmoothingEnabled = true;
      const radius = p.size * (1 + .25 * flash);
      ctx.drawImage(glow, -radius, -radius, radius * 2, radius * 2);
      ctx.restore();
    }
    frame = requestAnimationFrame(draw);
  }
  function sync() {
    cancelAnimationFrame(frame);
    frame = 0;
    if (document.hidden || motion.matches) {
      ctx.clearRect(0, 0, width, height);
      return;
    }
    last = performance.now();
    frame = requestAnimationFrame(draw);
  }
  window.addEventListener('click', event => {
    if (motion.matches || event.target.closest('a, button, input, textarea, select, video')) return;
    for (const p of pumpkins) {
      if (!p.active) continue;
      const dx = event.clientX - p.x, dy = event.clientY - p.y;
      const x = dx * Math.cos(p.angle) + dy * Math.sin(p.angle);
      const y = -dx * Math.sin(p.angle) + dy * Math.cos(p.angle);
      if (Math.abs(x) <= p.size / 2 && Math.abs(y) <= p.size / 2) p.flash = .55;
    }
  });
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', sync);
  resize();
  sync();
}
