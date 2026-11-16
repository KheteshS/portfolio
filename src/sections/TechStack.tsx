const capabilities = [
  { number: "01", title: "Product engineering", description: "Translate product requirements and real workflows into usable applications.", tools: "Angular / React / Next.js / TypeScript / Storybook" },
  { number: "02", title: "Systems & integrations", description: "Connect application interfaces, APIs, data, and asynchronous work.", tools: "Node.js / Express / PostgreSQL / Redis / BullMQ" },
  { number: "03", title: "Applied AI", description: "Integrate OpenAI in Automata and Gemini in RepoLens; use GitHub Copilot and Claude Code for AI-assisted development.", tools: "Product integrations: OpenAI / Gemini. Development tools: GitHub Copilot / Claude Code." },
  { number: "04", title: "Delivery & enablement", description: "Make the path from a code change to a usable release repeatable.", tools: "Azure DevOps / GitHub Actions / semantic-release / ADRs" },
];

const TechStack = () => (
  <section id="skills" className="section capabilities-section" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="section-index">03 /</span> Capabilities</p><h2 id="skills-title">The right tool.<br />The whole problem.</h2></div>
        <p>I connect product requirements with implementation: interfaces people can use, systems that work together, and a repeatable path to delivery.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map((capability) => (
          <article className="capability-card" key={capability.number}>
            <span className="capability-number">{capability.number} <span aria-hidden="true">&#8599;</span></span>
            <h3>{capability.title}</h3><p>{capability.description}</p><p className="capability-tools">{capability.tools}</p>
          </article>
        ))}
      </div>
      <div className="working-principles"><span className="eyebrow">How I approach the work</span><p>Understand the workflow.<span aria-hidden="true">&#8594;</span> Make the trade-offs explicit.<span aria-hidden="true">&#8594;</span> Build, deploy, iterate.</p></div>
    </div>
  </section>
);

export default TechStack;
