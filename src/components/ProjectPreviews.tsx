import { useEffect, useId, useState } from "react";
import type { KeyboardEvent } from "react";

const navigateTabs = (event: KeyboardEvent<HTMLDivElement>) => {
  const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const current = tabs.findIndex((tab) => tab === document.activeElement);
  if (current < 0) return;
  let next: number;
  switch (event.key) {
    case "ArrowRight": next = (current + 1) % tabs.length; break;
    case "ArrowLeft": next = (current - 1 + tabs.length) % tabs.length; break;
    case "Home": next = 0; break;
    case "End": next = tabs.length - 1; break;
    default: return;
  }
  event.preventDefault();
  tabs[next].focus();
  tabs[next].click();
};

const components = [
  { id: "table", label: "Data table" },
  { id: "frame", label: "App frame" },
  { id: "panels", label: "Tab panels" },
];
const exampleRows = [
  { name: "Workspace", status: "Active" },
  { name: "Analytics", status: "Active" },
  { name: "Admin", status: "Draft" },
];
const panelExamples = [
  { name: "Overview", title: "Workspace overview", description: "Related views. One consistent interface." },
  { name: "Activity", title: "Activity panel", description: "A separate view, in the same component." },
  { name: "Settings", title: "Settings panel", description: "Switch context without leaving the application." },
];

export const LibraryPreview = () => {
  const id = useId();
  const [component, setComponent] = useState("table");
  const [ascending, setAscending] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [panel, setPanel] = useState("Overview");
  const rows = [...exampleRows].sort((a, b) => a.name.localeCompare(b.name) * (ascending ? 1 : -1));

  useEffect(() => {
    document.dispatchEvent(new Event("portfolio:layout-change"));
  }, [component, panel]);

  return (
    <div className="project-visual library-visual">
      <div className="library-aside">
        <div className="visual-topline"><span className="mono">COMPONENT PLAYGROUND</span></div>
        <div className="preview-heading"><h4>One library.<br /><span>Many building blocks.</span></h4><p>Switch components. Try the interactions.</p></div>
        <div className="library-impact">
          <div><span>APP-FRAME UPGRADE</span><p>Initial application load</p></div>
          <div className="library-impact-times"><span>10-12s</span><i aria-hidden="true">&#8594;</i><strong>1-2s</strong></div>
        </div>
        <span className="preview-caption">Interactive concept / example data</span>
      </div>
      <div className="component-workbench">
        <div className="component-switcher" role="tablist" aria-label="Library component previews" onKeyDown={navigateTabs}>
          {components.map((item) => (
            <button type="button" role="tab" id={`${id}-${item.id}-tab`} aria-controls={`${id}-${item.id}`} aria-selected={component === item.id} tabIndex={component === item.id ? 0 : -1} key={item.id} onClick={() => setComponent(item.id)}>{item.label}</button>
          ))}
        </div>
        <div className="library-preview" role="tabpanel" id={`${id}-table`} aria-labelledby={`${id}-table-tab`} hidden={component !== "table"}>
          <div className="preview-content-heading"><strong>Applications</strong><span>{selected.length ? `${selected.length} selected` : "3 example rows"}</span></div>
          <table className="preview-table">
            <caption className="sr-only">Interactive data table with fictional applications. Sort by name or select rows.</caption>
            <thead><tr><th><span className="sr-only">Select</span></th><th aria-sort={ascending ? "ascending" : "descending"}><button type="button" onClick={() => setAscending(!ascending)}>Name <span aria-hidden="true">{ascending ? "\u2191" : "\u2193"}</span></button></th><th>Status</th></tr></thead>
            <tbody>{rows.map((row) => (
              <tr key={row.name} data-selected={selected.includes(row.name)}>
                <td><label className="preview-row-check"><input type="checkbox" aria-label={`Select ${row.name}`} checked={selected.includes(row.name)} onChange={() => setSelected((previous) => previous.includes(row.name) ? previous.filter((name) => name !== row.name) : [...previous, row.name])} /></label></td>
                <td>{row.name}</td><td><span className={`preview-status${row.status === "Draft" ? " is-draft" : ""}`}>{row.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
          <div className="preview-anatomy"><span>Sortable columns</span><span>Row selection</span></div>
        </div>
        <div className="library-preview" role="tabpanel" id={`${id}-frame`} aria-labelledby={`${id}-frame-tab`} hidden={component !== "frame"}>
          <div className="preview-content-heading"><strong>Application frame</strong><span>Composable layout</span></div>
          <div className="frame-preview">
            <div className="frame-header"><span className="frame-brand" aria-hidden="true">T</span><strong>Workspace</strong><span className="frame-avatar" aria-hidden="true">KS</span></div>
            <div className="frame-body"><div className="frame-navigation"><span>Navigation</span><strong>Overview</strong><span>Projects</span><span>Settings</span></div><div className="frame-content"><span>Workspace / Overview</span><strong>Your application,<br />inside the frame.</strong><div className="frame-slots"><span>Content slot</span><span>Content slot</span></div></div></div>
          </div>
          <div className="preview-anatomy"><span>App header</span><span>Navigation</span><span>Content slots</span></div>
        </div>
        <div className="library-preview" role="tabpanel" id={`${id}-panels`} aria-labelledby={`${id}-panels-tab`} hidden={component !== "panels"}>
          <div className="preview-content-heading"><strong>Tab panels</strong><span>Connected views</span></div>
          <div className="panel-switcher" role="tablist" aria-label="Example application tabs" onKeyDown={navigateTabs}>
            {panelExamples.map((item) => <button key={item.name} type="button" role="tab" id={`${id}-${item.name}-tab`} aria-selected={panel === item.name} aria-controls={`${id}-${item.name}-panel`} tabIndex={panel === item.name ? 0 : -1} onClick={() => setPanel(item.name)}>{item.name}</button>)}
          </div>
          {panelExamples.map((item) => <div className="panel-example" key={item.name} role="tabpanel" id={`${id}-${item.name}-panel`} aria-labelledby={`${id}-${item.name}-tab`} hidden={panel !== item.name}><span className="panel-example-index" aria-hidden="true">0{panelExamples.indexOf(item) + 1}</span><strong>{item.title}</strong><p>{item.description}</p><div className="panel-example-lines" aria-hidden="true"><i /><i /></div></div>)}
          <div className="preview-anatomy"><span>Keyboard navigation</span><span>Distinct panel content</span></div>
        </div>
      </div>
    </div>
  );
};

const testKinds = [
  { id: "browser", number: "01", label: "Browser / UI", scope: "Framework scope", description: "AI-powered automation for browser and interface testing." },
  { id: "api", number: "02", label: "API testing", scope: "My contribution", description: "Built the complete API-testing feature, end to end." },
  { id: "e2e", number: "03", label: "End-to-end", scope: "Framework scope", description: "Testing connected application workflows, not just individual screens." },
  { id: "regression", number: "04", label: "Regression", scope: "Framework scope", description: "Repeatable testing workflows within the same AI-powered framework." },
];

export const AutomataPreview = () => {
  const id = useId();
  const [selected, setSelected] = useState(testKinds[1]);

  useEffect(() => {
    document.dispatchEvent(new Event("portfolio:layout-change"));
  }, [selected]);

  return (
    <div className="project-visual automata-visual">
      <div className="visual-topline"><span className="mono">EXPLORE THE TEST MATRIX</span><span className="tiny-tag">Interactive concept</span></div>
      <div className="testing-console">
        <div className="testing-map">
          <div className="testing-origin">
            <div className="testing-input"><span>Scenarios in.</span><span>Agent-driven testing out.</span></div>
            <div className="testing-agent"><span className="testing-agent-icon" aria-hidden="true">AI</span><div><strong>Automata agents</strong><span>Powered by OpenAI</span></div><span className="testing-agent-signal" aria-hidden="true" /></div>
          </div>
          <svg className="testing-branches" viewBox="0 0 64 128" preserveAspectRatio="none" aria-hidden="true"><path className="testing-branch-base" d="M0 64H20Q28 64 28 56V32Q28 24 36 24H64M28 64V96Q28 104 36 104H64" /><path className="testing-branch-flow" d="M0 64H20Q28 64 28 56V32Q28 24 36 24H64M28 64V96Q28 104 36 104H64" /></svg>
          <div className="testing-kinds" role="group" aria-label="Explore Automata testing scope">
            {testKinds.map((kind) => <button type="button" key={kind.id} aria-pressed={selected.id === kind.id} aria-controls={`${id}-scope`} onClick={() => setSelected(kind)}><span>{kind.number} / {kind.id === "api" ? "FEATURE OWNED" : "FRAMEWORK"}</span><strong>{kind.label}</strong><i aria-hidden="true" /></button>)}
          </div>
          <div className="testing-scope" id={`${id}-scope`} aria-live="polite"><span>{selected.scope}</span><p>{selected.description}</p></div>
        </div>
      </div>
    </div>
  );
};
