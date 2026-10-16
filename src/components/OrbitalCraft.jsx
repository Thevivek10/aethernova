import React, { useEffect, useRef, useState } from "react";
import { Compass, Crosshair, Radio, Shield, Sparkles, Zap } from "lucide-react";

/**
 * OrbitalCraft
 * Cinematic moving spacecraft component featuring user's orbital spacecraft asset,
 * reactive scroll kinematics, 3D tilt, ion thruster particle flare,
 * and high-tech telemetry HUD.
 */
export default function OrbitalCraft({
  scrollProgress = 0,
  scrollSpeed = 0,
  activeSector = "LAUNCH"
}) {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isWarping, setIsWarping] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // Track mouse for interactive 3D perspective tilt
  useEffect(() => {
    const handleMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      setMouseOffset({ x: dx * 12, y: dy * 12 });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Compute flight trajectory based on scroll progress (0.0 to 1.0)
  // Seamless bezier/spline path across sections
  const getTransform = () => {
    const p = Math.max(0, Math.min(scrollProgress, 1));

    // Dynamic position interpolation
    let posX = 0;
    let posY = 0;
    let rotate = 0;
    let scale = 1;

    if (p < 0.22) {
      // Sector 1: Hero Orbit
      const t = p / 0.22;
      posX = 0 + t * 40;
      posY = 0 + t * 50;
      rotate = -4 + t * 12;
      scale = 1 - t * 0.05;
    } else if (p < 0.48) {
      // Sector 2: Capabilities Maneuver (Bank to left, descend)
      const t = (p - 0.22) / 0.26;
      posX = 40 - t * 80;
      posY = 50 + t * 70;
      rotate = 8 - t * 22;
      scale = 0.95 + t * 0.08;
    } else if (p < 0.72) {
      // Sector 3 & 4: Telemetry & Partners (Float across)
      const t = (p - 0.48) / 0.24;
      posX = -40 + t * 70;
      posY = 120 + t * 60;
      rotate = -14 + t * 24;
      scale = 1.03 - t * 0.06;
    } else {
      // Sector 5: Terminal Station
      const t = (p - 0.72) / 0.28;
      posX = 30 - t * 30;
      posY = 180 + t * 40;
      rotate = 10 - t * 12;
      scale = 0.97 + t * 0.05;
    }

    // Scroll speed reaction: bank angle and thruster surge
    const speedTilt = Math.min(scrollSpeed * 0.4, 18);
    const totalRotate = rotate + speedTilt;
    const rotX = -mouseOffset.y;
    const rotY = mouseOffset.x;

    return `translate3d(${posX}px, ${posY}px, 0) rotate(${totalRotate}deg) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
  };

  const handleWarp = () => {
    setIsWarping(true);
    setTimeout(() => setIsWarping(false), 1400);
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  // Speed telemetry calculation
  const baseSpeed = 27600;
  const currentSpeed = (baseSpeed + scrollSpeed * 280).toLocaleString();
  const currentAltitude = (418.4 - scrollProgress * 12).toFixed(1);

  return (
    <div
      ref={containerRef}
      className={`orbital-craft-container ${isWarping ? "craft-warp-surge" : ""} ${isScanning ? "craft-scan-active" : ""}`}
      style={{
        transform: getTransform()
      }}
    >
      {/* 3D Spacecraft Body Wrapper */}
      <div className="craft-body-wrap">
        {/* Holographic Radar / Orbital Reticle */}
        <div className="craft-reticle" aria-hidden="true">
          <div className="reticle-ring reticle-ring-outer" />
          <div className="reticle-ring reticle-ring-mid" />
          <div className="reticle-ticks" />
          <div className="reticle-crosshair" />
        </div>

        {/* Spacecraft Image with Atmospheric Corona Blend */}
        <div className="craft-image-frame">
          <img
            src="/images/orbital-spacecraft.jpg"
            alt="AetherNova Orbital Spacecraft in Earth High Orbit"
            className="craft-image"
            loading="eager"
          />
          {/* Laser Scanner Wave */}
          <div className="craft-scanline" />
          {/* Atmospheric Rim Glow */}
          <div className="craft-rim-glow" />
          {/* Ion Thruster Plume */}
          <div
            className="craft-thruster-plume"
            style={{
              opacity: 0.6 + Math.min(scrollSpeed * 0.1, 0.4),
              transform: `scaleY(${1 + Math.min(scrollSpeed * 0.15, 2.5)})`
            }}
          />
        </div>

        {/* High-Tech Telemetry Cockpit HUD */}
        <div className="craft-hud-badge">
          <div className="craft-hud-header">
            <span className="craft-hud-pulse" />
            <span className="craft-hud-callsign">AETHER-01 // ORBITAL</span>
            <span className="craft-hud-sector">{activeSector}</span>
          </div>

          <div className="craft-hud-grid">
            <div className="craft-hud-metric">
              <span className="hud-label">VELOCITY</span>
              <span className="hud-val hud-accent">{currentSpeed} <small>KM/H</small></span>
            </div>
            <div className="craft-hud-metric">
              <span className="hud-label">ALTITUDE</span>
              <span className="hud-val">{currentAltitude} <small>KM</small></span>
            </div>
          </div>

          {/* Interactive Flight Controls */}
          <div className="craft-hud-actions">
            <button
              type="button"
              className="craft-hud-btn"
              onClick={handleWarp}
              title="Engage Hyperspace Warp Drive"
            >
              <Zap size={12} />
              <span>WARP</span>
            </button>
            <button
              type="button"
              className="craft-hud-btn"
              onClick={handleScan}
              title="Run Deep Orbit Sector Radar Scan"
            >
              <Crosshair size={12} />
              <span>SCAN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
