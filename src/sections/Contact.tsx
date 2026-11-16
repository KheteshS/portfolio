import { useState } from "react";

const email = "kheteshs@gmail.com";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus(`Could not copy the address. Please email ${email} or use the email link.`);
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="eyebrow"><span className="section-index">04 /</span> Let's connect</p>
            <h2 id="contact-title">Have a complex problem?<br /><span>Let's make it work.</span></h2>
            <p>Working through a complex workflow, a difficult integration, or a product that needs to ship? Let's talk about the problem, the constraints, and what useful software could look like.</p>
            <a className="button button-primary" href={`mailto:${email}`}>Start a conversation <span aria-hidden="true">&#8599;</span></a>
          </div>
          <div className="contact-details">
            <span className="eyebrow">Direct is better.</span>
            <a className="email-link" href={`mailto:${email}`}>{email}<span aria-hidden="true">&#8599;</span></a>
            <button type="button" className="copy-button" onClick={copyEmail}>Copy email address <span aria-hidden="true">&#10697;</span></button>
            <p className="copy-status" role="status">{copyStatus}</p>
            <div className="contact-facts"><span>Based in</span><strong>Bengaluru, India</strong><span>Focus</span><strong>Enterprise systems & applied AI</strong></div>
            <div className="contact-links">
              <a href="https://github.com/KheteshS" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">&#8599;</span><span className="sr-only"> (opens in a new tab)</span></a>
              <a href="https://www.linkedin.com/in/kheteshs" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">&#8599;</span><span className="sr-only"> (opens in a new tab)</span></a>
              <a href="/resume.html">Resume <span aria-hidden="true">&#8599;</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
