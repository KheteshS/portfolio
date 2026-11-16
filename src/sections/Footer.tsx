const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <a className="footer-name" href="#hero">Khetesh Singh Rajpurohit<span>Built with clarity. Shipped with care.</span></a>
      <p>&copy; {new Date().getFullYear()} Khetesh Singh</p>
      <a className="back-to-top" href="#hero">Back to top <span aria-hidden="true">&#8593;</span></a>
    </div>
  </footer>
);

export default Footer;
