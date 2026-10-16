import React, { useEffect, useRef } from "react";

/**
 * CosmicMotionCanvas
 * Ultra-high-performance 3D starfield with scroll-responsive hyperspace warp,
 * mouse parallax, shooting stars, and cosmic nebula glow.
 */
export default function CosmicMotionCanvas({ scrollProgress = 0, scrollSpeed = 0 }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    stars: [],
    shootingStars: [],
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    speed: 0.8,
    targetSpeed: 0.8,
    scrollSpeed: 0,
    time: 0
  });

  useEffect(() => {
    stateRef.current.scrollSpeed = scrollSpeed;
  }, [scrollSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let lastTime = performance.now();

    const STAR_COUNT = window.innerWidth < 768 ? 450 : 850;

    const initStars = (w, h) => {
      const stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: (Math.random() - 0.5) * w * 2.2,
          y: (Math.random() - 0.5) * h * 2.2,
          z: Math.random() * 1000 + 1,
          pz: 0,
          size: Math.random() * 1.5 + 0.6,
          hue: Math.random() > 0.7 ? 190 + Math.random() * 30 : Math.random() > 0.85 ? 270 + Math.random() * 40 : 210,
          brightness: Math.random() * 0.7 + 0.3
        });
      }
      return stars;
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      stateRef.current.width = w;
      stateRef.current.height = h;
      stateRef.current.stars = initStars(w, h);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const w = stateRef.current.width || window.innerWidth;
      const h = stateRef.current.height || window.innerHeight;
      stateRef.current.targetMouseX = (e.clientX - w / 2) * 0.05;
      stateRef.current.targetMouseY = (e.clientY - h / 2) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Spawn shooting star occasionally
    const spawnShootingStar = () => {
      const w = stateRef.current.width;
      const h = stateRef.current.height;
      stateRef.current.shootingStars.push({
        x: Math.random() * w * 0.8,
        y: Math.random() * h * 0.4,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 14 + 16,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
        opacity: 1,
        life: 0,
        maxLife: 40
      });
    };

    let shootTimer = setInterval(() => {
      if (Math.random() > 0.45) spawnShootingStar();
    }, 2800);

    const render = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const state = stateRef.current;
      state.time += dt;

      // Mouse lerp
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.06;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.06;

      // Scroll speed to warp speed lerp
      const warpFactor = Math.min(state.scrollSpeed * 0.06, 12);
      state.targetSpeed = 0.9 + warpFactor;
      state.speed += (state.targetSpeed - state.speed) * 0.1;

      const w = state.width;
      const h = state.height;
      const cx = w / 2 + state.mouseX;
      const cy = h / 2 + state.mouseY;

      // Clear with slight trail for motion blur if warping
      if (state.speed > 2.5) {
        ctx.fillStyle = "rgba(3, 7, 18, 0.35)";
      } else {
        ctx.fillStyle = "rgba(3, 7, 18, 0.75)";
      }
      ctx.fillRect(0, 0, w, h);

      // Render Stars in 3D
      const stars = state.stars;
      const speed = state.speed;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.pz = star.z;
        star.z -= speed * 10;

        if (star.z <= 0) {
          star.z = 1000;
          star.pz = 1000;
          star.x = (Math.random() - 0.5) * w * 2.2;
          star.y = (Math.random() - 0.5) * h * 2.2;
        }

        const k = 320 / star.z;
        const x = star.x * k + cx;
        const y = star.y * k + cy;

        if (x < -50 || x > w + 50 || y < -50 || y > h + 50) continue;

        // Warp streak calculation
        const pk = 320 / Math.max(star.pz, 1);
        const px = star.x * pk + cx;
        const py = star.y * pk + cy;

        const alpha = Math.min((1 - star.z / 1000) * star.brightness * 1.2, 1);
        const size = Math.max(star.size * (1 - star.z / 1000) * 2.2, 0.8);

        if (speed > 2.5) {
          // Draw warp streak
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `hsla(${star.hue}, 90%, 75%, ${alpha})`;
          ctx.lineWidth = size * 1.2;
          ctx.stroke();
        } else {
          // Standard star with glow
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${star.hue}, 85%, 80%, ${alpha})`;
          ctx.fill();

          // Subtle twinkle halo on closest stars
          if (star.z < 350) {
            ctx.beginPath();
            ctx.arc(x, y, size * 2.4, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${star.hue}, 95%, 70%, ${alpha * 0.25})`;
            ctx.fill();
          }
        }
      }

      // Render Shooting Stars
      for (let i = state.shootingStars.length - 1; i >= 0; i--) {
        const s = state.shootingStars[i];
        s.life += 1;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        const a = Math.max(0, 1 - s.life / s.maxLife);
        grad.addColorStop(0, `rgba(255, 255, 255, ${a})`);
        grad.addColorStop(0.3, `rgba(0, 242, 254, ${a * 0.8})`);
        grad.addColorStop(1, "rgba(0, 242, 254, 0)");

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (s.life >= s.maxLife || s.x > w + 200 || s.y > h + 200) {
          state.shootingStars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cosmic-canvas-wrapper" aria-hidden="true">
      {/* Deep Space Milky Way & Nebula Backdrops */}
      <div
        className="cosmic-bg-layer cosmic-bg-milkyway"
        style={{
          backgroundImage: `url('/images/cosmic-milkyway.jpg')`,
          transform: `translateY(${scrollProgress * -60}px)`
        }}
      />
      <div
        className="cosmic-bg-layer cosmic-bg-nebula"
        style={{
          backgroundImage: `url('/images/cosmic-nebula.jpg')`,
          transform: `translateY(${scrollProgress * -120}px) scale(${1 + scrollProgress * 0.08})`
        }}
      />
      {/* Interactive 3D Stars Canvas */}
      <canvas ref={canvasRef} className="cosmic-star-canvas" />
      {/* Ambient Vignette & Scanlines */}
      <div className="cosmic-scanlines" />
      <div className="cosmic-vignette" />
    </div>
  );
}
