const capabilities = [
  { number: "01", title: "Full-stack web development", description: "Build web applications end to end, from responsive interfaces and reusable components to backend services.", tools: "Angular / React / Next.js / TypeScript / Node.js" },
  { number: "02", title: "APIs, data & integrations", description: "Design and connect the services, databases, and asynchronous jobs behind web applications.", tools: "Express / REST APIs / PostgreSQL / Redis / BullMQ" },
  { number: "03", title: "Applied AI", description: "Integrate OpenAI in Automata and Gemini in RepoLens; use GitHub Copilot and Claude Code for AI-assisted development.", tools: "Product integrations: OpenAI / Gemini. Development tools: GitHub Copilot / Claude Code." },
  { number: "04", title: "Release engineering", description: "Build reliable CI/CD pipelines and developer workflows for shipping web applications and shared libraries.", tools: "Azure DevOps / GitHub Actions / semantic-release / ADRs" },
];

const TechStack = () => (
  <section id="skills" className="section capabilities-section" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="section-index">03 /</span> Capabilities</p><h2 id="skills-title">Full-stack web<br />engineering.</h2></div>
        <p>I build across the web stack: responsive interfaces and reusable components, backend APIs and data, system integrations, and applied AI.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map((capability) => (
          <article className="capability-card" key={capability.number}>
            <span className="capability-number">{capability.number} <span aria-hidden="true">&#8599;</span></span>
            <h3>{capability.title}</h3><p>{capability.description}</p><p className="capability-tools">{capability.tools}</p>
          </article>
        ))}
      </div>
      <div className="working-principles"><span className="eyebrow">How I approach the work</span><p>Understand the product.<span aria-hidden="true">&#8594;</span> Build across the stack.<span aria-hidden="true">&#8594;</span> Test, deploy, iterate.</p></div>
    </div>
  </section>
);

export default TechStack;
