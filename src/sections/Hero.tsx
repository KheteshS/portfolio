const Hero = () => (
  <section id="hero" className="hero-section" aria-labelledby="hero-title">
    <div className="hero-ambience" aria-hidden="true">
      <div className="ambient-orb ambient-orb-green" />
      <div className="ambient-orb ambient-orb-blue" />
      <div className="ambient-grid" />
    </div>
    <div className="container">
      <div className="hero-topline">
        <span className="eyebrow"><span className="status-dot" /> Full-stack engineer</span>
        <span className="location">Bengaluru, India <span aria-hidden="true">&#8599;</span></span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">Hi, I'm Khetesh.</p>
          <h1 id="hero-title">Complex workflows.<br /><span>Working software.</span></h1>
          <p className="hero-description">
            I work with product teams to turn complex requirements into
            software people can use. 4+ years at Daimler Truck, building
            enterprise applications, connecting systems, and improving
            how teams ship.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">&#8600;</span></a>
            <a className="button button-secondary" href="/resume.html">View resume <span aria-hidden="true">&#8599;</span></a>
          </div>
          <p className="role-note"><span className="status-dot" /> Product thinking. Hands-on engineering. Delivery ownership.</p>
        </div>
        <div className="hero-visual" data-spotlight>
          <div className="system-globe" aria-hidden="true">
            <div className="system-ring system-ring-one"><span className="orbital-track"><i /></span></div>
            <div className="system-ring system-ring-two"><span className="orbital-track"><i /></span></div>
            <div className="system-ring system-ring-three"><span className="orbital-track"><i /></span></div>
          </div>
          <span className="floating-chip floating-chip-code" aria-hidden="true"><span>&lt;/&gt;</span> build.ts</span>
          <span className="floating-chip floating-chip-api" aria-hidden="true"><span>&#8644;</span> API + DATA</span>
          <div className="workflow-panel" aria-label="Animated conceptual system connecting people, application interfaces, APIs, and data. This is an illustration, not a live service.">
            <div className="panel-toolbar">
              <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
              <span>systems / connected</span>
              <span className="panel-badge">CONCEPTUAL SYSTEM</span>
            </div>
            <div className="workflow-content">
              <p className="eyebrow">From problem to product</p>
              <h2>Everything connects.</h2>
              <svg className="system-scene" viewBox="0 0 480 300" aria-hidden="true">
                <defs>
                  <radialGradient id="system-core-glow">
                    <stop offset="0" stopColor="#c2f58a" stopOpacity=".4" />
                    <stop offset="1" stopColor="#71e2ce" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="system-ring-color">
                    <stop stopColor="#c2f58a" />
                    <stop offset="1" stopColor="#72d9ff" />
                  </linearGradient>
                </defs>
                <circle cx="240" cy="150" r="115" fill="url(#system-core-glow)" />
                <g className="scene-wires">
                  <path d="M110 150H168" /><path d="M312 150H370" />
                  <path d="M240 48V78" /><path d="M240 222V252" />
                </g>
                <g className="scene-flow">
                  <path d="M110 150H168" /><path d="M312 150H370" />
                  <path d="M240 48V78" /><path d="M240 222V252" />
                </g>
                <g className="scene-rotor">
                  <circle cx="240" cy="150" r="72" />
                  <circle className="scene-satellite" cx="240" cy="78" r="5" />
                  <circle className="scene-satellite scene-satellite-blue" cx="240" cy="222" r="4" />
                </g>
                <g className="scene-rotor scene-rotor-outer">
                  <ellipse cx="240" cy="150" rx="105" ry="40" />
                  <circle className="scene-satellite" cx="345" cy="150" r="4" />
                </g>
                <circle className="scene-core-halo" cx="240" cy="150" r="52" />
                <circle className="scene-core" cx="240" cy="150" r="43" />
                <text className="scene-code" x="240" y="148" textAnchor="middle">&lt;/&gt;</text>
                <text className="scene-core-label" x="240" y="170" textAnchor="middle">BUILD</text>
                <g className="scene-node"><rect x="30" y="130" width="80" height="40" rx="8" /><text x="70" y="154">PEOPLE</text></g>
                <g className="scene-node scene-node-blue"><rect x="370" y="130" width="80" height="40" rx="8" /><text x="410" y="154">APIs</text></g>
                <g className="scene-node"><rect x="190" y="12" width="100" height="36" rx="8" /><text x="240" y="34">INTERFACES</text></g>
                <g className="scene-node scene-node-blue"><rect x="190" y="252" width="100" height="36" rx="8" /><text x="240" y="274">DATA</text></g>
              </svg>
              <div className="system-legend"><span>Understand</span><span>Build</span><span>Deploy</span></div>
              <p className="diagram-caption">A conceptual map of the systems I connect.</p>
            </div>
            <a className="panel-footer" href="#work">Explore the work <span aria-hidden="true">&#8594;</span></a>
          </div>
        </div>
      </div>
      <div className="impact-strip" aria-label="Selected career outcomes">
        <div><strong>4+<span> years</span></strong><p>Engineering at Daimler Truck</p></div>
        <div><strong>10+<span> platforms</span></strong><p>Shared component adoption</p></div>
        <div><strong>60%<span> faster</span></strong><p>Feature delivery with shared UI</p></div>
        <div><strong>10-12s <span aria-hidden="true">&#8594;</span> 1-2s</strong><p>Initial app load after app-frame upgrade</p></div>
      </div>
    </div>
    <div className="engineering-ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {[0, 1].map((group) => (
          <div className="ribbon-group" key={group}>
            {["Product engineering", "System integration", "Applied AI", "Delivery ownership"].map((item) => (
              <span key={item}><i>&#10035;</i>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
