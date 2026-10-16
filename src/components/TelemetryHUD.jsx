import React from "react";

/**
 * TelemetryHUD
 * Fixed futuristic overlay providing sector navigation, radar status pings,
 * scroll progress indicators, and anamorphic motion flares.
 */
export default function TelemetryHUD({
  scrollProgress = 0,
  scrollSpeed = 0,
  activeSectorIndex = 0,
  onSectorSelect
}) {
  const sectors = [
    { id: "top", label: "01 // LAUNCH", name: "Orbit" },
    { id: "capabilities", label: "02 // CAPABILITIES", name: "Systems" },
    { id: "impact", label: "03 // IMPACT", name: "Telemetry" },
    { id: "partners", label: "04 // PARTNERS", name: "Alliance" },
    { id: "protocol", label: "05 // PROTOCOL", name: "Execution" },
    { id: "contact", label: "06 // TRANSMISSION", name: "Dock" }
  ];

  return (
    <div className="telemetry-hud-root" aria-hidden="false">
      {/* Dynamic Anamorphic Lens Flare on Fast Scroll */}
      <div
        className="hud-anamorphic-flare"
        style={{
          opacity: Math.min(scrollSpeed * 0.08, 0.75),
          transform: `scaleX(${1 + Math.min(scrollSpeed * 0.1, 2)}) scaleY(${1 + Math.min(scrollSpeed * 0.02, 0.5)})`
        }}
        aria-hidden="true"
      />

      {/* Top Telemetry Ticker */}
      <aside className="hud-top-telemetry" aria-label="System telemetry">
        <div className="hud-ticker-inner">
          <span className="hud-beacon" />
          <span className="hud-tag">SYSTEMS NOMINAL</span>
          <span className="hud-sep">/</span>
          <span className="hud-coord">LAT 28.5721° N · LON 80.6480° W</span>
          <span className="hud-sep">/</span>
          <span className="hud-metric">SYNC: 99.98%</span>
        </div>
      </aside>

      {/* Right Edge Sector Radar Navigation */}
      <nav className="hud-sector-rail" aria-label="Orbital sectors">
        <div className="hud-rail-track">
          <div
            className="hud-rail-fill"
            style={{ height: `${Math.min(Math.max(scrollProgress * 100, 2), 100)}%` }}
          />
        </div>

        <ul className="hud-sector-list">
          {sectors.map((sec, idx) => {
            const isActive = activeSectorIndex === idx;
            return (
              <li key={sec.id} className="hud-sector-item">
                <a
                  href={`#${sec.id}`}
                  className={`hud-sector-btn ${isActive ? "hud-sector-active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onSectorSelect) onSectorSelect(sec.id);
                  }}
                  title={sec.label}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span className="hud-sector-dot">
                    {isActive && <span className="hud-sector-ping" />}
                  </span>
                  <span className="hud-sector-label">{sec.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
