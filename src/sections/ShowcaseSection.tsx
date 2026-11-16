import AnimatedDetails from "../components/AnimatedDetails";
import { AutomataPreview, LibraryPreview } from "../components/ProjectPreviews";

const projects = [
  {
    id: "platform",
    number: "01",
    category: "FRONTEND LIBRARY + DEVELOPER EXPERIENCE",
    status: "Enterprise work",
    title: "Enterprise frontend library.",
    subtitle: "Complex UI components, built once and used across 10+ platforms.",
    description: "I build complex data tables, app frames, tab panels, and their documentation for a shared Angular library, so teams can compose applications instead of rebuilding the foundations.",
    role: "Component engineering, documentation & library delivery",
    stack: ["Angular", "Storybook", "Azure Pipelines", "semantic-release"],
    problem: "Repeated UI implementation and inconsistent delivery practices created unnecessary work across internal platforms.",
    contribution: "Built and documented 20+ reusable UI components, including complex tables, application frames, and tab panels, for a shared library adopted across 10+ internal platforms. My app-frame upgrade reduced initial application load time from 10-12 seconds to 1-2 seconds in consuming applications.",
    detail: "The work spans component implementation, Storybook documentation, and library maintenance. I also own its Azure Pipelines delivery workflow, with semantic-release, versioned Artifactory publishing, quality gates, and contributor runbooks.",
    result: "App-frame upgrade: initial application load reduced from 10-12s to 1-2s.",
  },
  {
    id: "repolens",
    number: "02",
    category: "PERSONAL PROJECT + AI TOOLING",
    status: "Public repository",
    title: "RepoLens",
    subtitle: "Turning unfamiliar code into connected system context.",
    description: "An AI-powered GitHub repository analyzer with architecture summaries, dependency and call graphs, and repository-scoped streaming chat.",
    role: "Personal full-stack project",
    stack: ["Next.js", "Express", "BullMQ / Redis", "Gemini"],
    problem: "Understanding an unfamiliar repository means piecing together its structure, dependencies, and execution paths before useful work can begin.",
    contribution: "Built a Turborepo monorepo with a six-stage asynchronous analysis pipeline, ReactFlow graphs with dagre layout, and WebSocket-streamed AI chat scoped to the analyzed repository.",
    detail: "BullMQ and Redis coordinate analysis outside the request lifecycle. The project includes Vitest backend tests, Playwright end-to-end coverage, and a three-job parallel GitHub Actions pipeline.",
    result: "Explore the implementation, architecture, and tests in the public repository.",
    href: "https://github.com/KheteshS/repolens",
  },
  {
    id: "automata",
    number: "03",
    category: "ENTERPRISE WORK + APPLIED AI",
    status: "Enterprise work",
    title: "Automata",
    subtitle: "AI-powered testing across interfaces, APIs, and complete workflows.",
    description: "An enterprise testing framework powered by OpenAI, bringing browser/UI, API, end-to-end, and regression testing into one framework. I contributed improvements to its automation agents and built its complete API-testing feature.",
    role: "Agent improvements & end-to-end API-testing development",
    stack: ["Python / FastAPI", "OpenAI", "Playwright", "Angular", "Azure DevOps"],
    problem: "Extend the framework's automation capabilities and add a complete API-testing feature alongside its browser-based testing workflows.",
    contribution: "Contributed improvements to Automata's testing agents and built the complete API-testing feature from start to finish.",
    detail: "My contribution includes changes to the testing agents themselves and ownership of the API-testing feature. The enterprise framework uses OpenAI alongside Angular, Python/FastAPI, Playwright, and Azure DevOps.",
    result: "Delivered the complete API-testing feature and contributed improvements to automated testing agents.",
  },
];

const ProjectVisual = ({ id }: { id: string }) => {
  if (id === "automata") {
    return <AutomataPreview />;
  }

  if (id === "platform") {
    return <LibraryPreview />;
  }

  return (
    <div className="project-visual repo-visual">
      <div className="visual-topline"><span className="mono">REPOLENS / ANALYSIS PIPELINE</span><span className="tiny-tag">Concept</span></div>
      <div className="repo-illustration">
        <div className="repo-root"><span aria-hidden="true">&#8997;</span> github / repository</div>
        <span className="repo-flow" aria-hidden="true">&#8594;</span>
        <div className="repo-tree"><span>Structure</span><span>Dependencies</span><span>Call graphs</span></div>
        <span className="repo-flow" aria-hidden="true">&#8594;</span>
        <div className="repo-insight"><span className="status-dot" /><span>Architecture insights<br /><small>Gemini-powered summaries + chat</small></span></div>
      </div>
    </div>
  );
};

const ShowcaseSection = () => (
  <section id="work" className="section work-section" aria-labelledby="work-title">
    <div className="container">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="section-index">01 /</span> Selected work</p><h2 id="work-title">Built around real problems.</h2></div>
        <p>Frontend libraries, connected systems, and applied AI. Each project starts with a workflow and the people behind it.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" id={project.id} key={project.id} aria-labelledby={`${project.id}-title`} data-spotlight>
            <div className="project-copy">
              <div className="project-meta"><span>{project.category}</span><span>{project.number} / 03</span></div>
              <div className="project-overview">
                <div className="project-introduction">
                  <div className="project-title-row"><h3 id={`${project.id}-title`}>{project.title}</h3><span className="project-status">{project.status}</span></div>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-evidence">
                  <p className="project-role"><span>My scope</span>{project.role}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                  <div className="project-result"><span aria-hidden="true">&#8627;</span><p>{project.result}</p></div>
                </div>
              </div>
            </div>
            <ProjectVisual id={project.id} />
            <div className="project-footer">
              <AnimatedDetails>
                <div className="project-notes-grid">
                  <div><h4>The problem</h4><p>{project.problem}</p></div>
                  <div><h4>My contribution</h4><p>{project.contribution}</p></div>
                  <div><h4>Implementation & scope</h4><p>{project.detail}</p></div>
                </div>
              </AnimatedDetails>
              {project.href && <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">Explore the repository <span aria-hidden="true">&#8599;</span><span className="sr-only"> (opens in a new tab)</span></a>}
            </div>
          </article>
        ))}
      </div>
      <p className="confidentiality-note"><span aria-hidden="true">&#9432;</span> Enterprise previews are interactive concepts with example data, not proprietary interfaces or live test runs.</p>
    </div>
  </section>
);

export default ShowcaseSection;
