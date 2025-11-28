import "./styles.css";

export default function App() {
  return (
    <div className="page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AI<span>Vision</span></div>
        <div className="menu">
          <a href="#intro">Home</a>
          <a href="#features">Features</a>
          <a href="#future">Future</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="hero">
        <h1 className="hero-title">
          Introducing <span>AI</span>
        </h1>
        <p className="hero-subtitle">
          Powerful simplicity. Intelligent speed.  
          A new era of automation — built for everyone.
        </p>
        <button className="cta-btn" onClick={() => alert("Coming soon!")}>
          Explore the Future →
        </button>
      </section>

      {/* Feature Section */}
      <section id="features" className="features">
        <h2 className="section-title">What Makes It Different?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚡ Super Fast</h3>
            <p>AI that reacts instantly — making complex decisions in milliseconds.</p>
          </div>

          <div className="feature-card">
            <h3>🎯 Intelligent</h3>
            <p>Understands context, adapts to patterns, and gets smarter with use.</p>
          </div>

          <div className="feature-card">
            <h3>🌐 Always Connected</h3>
            <p>Works seamlessly across devices, clouds, and environments.</p>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section id="future" className="future-section">
        <h2 className="section-title">The Future Starts Here</h2>
        <p className="future-text">
          AI is not just a tool — it’s the next evolution of human capability.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2 className="section-title">Stay Updated</h2>
        <p>More exciting updates are coming soon.</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} AIVision. All rights reserved.
      </footer>
    </div>
  );
}
