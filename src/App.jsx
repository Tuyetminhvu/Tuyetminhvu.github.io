import "./App.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { portfolio } from "./portfolio";

export default function App() {
  const base = import.meta.env.BASE_URL || "/";
  const toUrl = (path) => {
    if (!path) return path;
    if (/^https?:\/\//i.test(path)) return path;
    const clean = path.replace(/^\//, "");
    try {
      return new URL(clean, window.location.origin + base).toString();
    } catch {
      return `${base}${clean}`;
    }
  };

  const g = portfolio.greeting;
  const s = portfolio.socialMediaLinks;
  const skills = portfolio.skillsSection;
  const education = portfolio.educationInfo;
  const work = portfolio.workExperiences;
  const projects = portfolio.projects;
  const things = portfolio.thingsILove;
  const contact = portfolio.contactInfo;
  const [openProjects, setOpenProjects] = useState({});
  const [openLoves, setOpenLoves] = useState({});
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [showGreeting, setShowGreeting] = useState(true);
  const [route, setRoute] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!lightboxSrc) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxSrc(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxSrc]);

  useEffect(() => {
    if (!showGreeting) return;
    const timer = setTimeout(() => setShowGreeting(false), 3500);
    return () => clearTimeout(timer);
  }, [showGreeting]);

  if (route === "#things-i-love") {
    return (
      <div className="page">
        <FlowerBloom toUrl={toUrl} />
        <header className="site-header">
          <nav className="nav">
            <div className="nav-links">
              <a href="#top">HOME</a>
              <a href="#work">WORK</a>
              <a href="#projects">PROJECTS</a>
            </div>
          </nav>
        </header>

        <section className="section">
          <div className="section-header">
            <h2>Things I Love</h2>
            <p>A little scrapbook of my favorites.</p>
          </div>

          <div className="love-grid">
            {things.items.map((item) => {
              const isOpen = !!openLoves[item.title];
              return (
                <article key={item.title} className="love-card">
                  <div className="love-media">
                    <button
                      className="project-image-button"
                      type="button"
                      onClick={() => setLightboxSrc(toUrl(item.image))}
                      aria-label={`Open ${item.title} image`}
                    >
                      <img src={toUrl(item.image)} alt={item.title} />
                    </button>
                  <button
                    className="love-cta"
                    type="button"
                    onClick={() =>
                      setOpenLoves((prev) => ({ ...prev, [item.title]: !prev[item.title] }))
                    }
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Show less" : "Show more"}
                  </button>
                </div>
                <div className="love-body">
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
                {isOpen && (
                  <div className="love-more">
                    <p>{item.details}</p>
                    <div className="love-gallery">
                      {item.gallery.map((img, i) => (
                        <button
                          className="project-image-button"
                          type="button"
                          key={i}
                          onClick={() => setLightboxSrc(toUrl(img))}
                          aria-label={`Open ${item.title} gallery image ${i + 1}`}
                        >
                          <img src={toUrl(img)} alt={`${item.title} ${i + 1}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )})}
          </div>

          <div className="love-back">
            <a className="btn btn-ghost" href="#top">Back to portfolio</a>
          </div>
        </section>

        {lightboxSrc &&
          typeof document !== "undefined" &&
          createPortal(
            <div className="lightbox" onClick={() => setLightboxSrc(null)}>
              <div
                className="lightbox-frame"
                role="dialog"
                aria-modal="true"
                aria-label="Project image preview"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>
                  Close
                </button>
                <img src={lightboxSrc} alt="Project full view" />
              </div>
            </div>,
            document.body
          )}
        {showGreeting &&
          typeof document !== "undefined" &&
          createPortal(
            <div className="greeting-overlay" onClick={() => setShowGreeting(false)}>
              <div
                className="greeting-card"
                role="dialog"
                aria-modal="true"
                aria-label="Greeting"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="greeting-close" onClick={() => setShowGreeting(false)}>
                  Close
                </button>
                <div className="greeting-emoji">₊✩‧₊˚౨ৎ˚₊✩‧₊</div>
                <h2>Hi there!</h2>
                <p>Welcome to my portfolio. I’m so happy you’re here.</p>
              </div>
            </div>,
            document.body
          )}
      </div>
    );
  }

  return (
    <div className="page">
      <FlowerBloom toUrl={toUrl} />
      <header className="site-header">
        <nav className="nav">
          <a className="brand" href="#top">TMV</a>
          <div className="nav-links">
            <a href="#work">WORK</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
            <a href="#about">ABOUT</a>
          </div>
        </nav>
      </header>

      {g.display && (
        <section id="top" className="hero">
          <div className="hero-left">
            <p className="hero-eyebrow">HELLO</p>
            <h1 className="hero-title">{g.title}</h1>
            <p className="hero-subtitle">{g.subTitle}</p>

            <div className="hero-social">
              <a href={`mailto:${s.gmail}`}>EMAIL</a>
              <span>•</span>
              <a href={s.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
              <span>•</span>
              <a href={s.github} target="_blank" rel="noreferrer">GITHUB</a>
            </div>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={toUrl(g.resumeLink)}
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
              <a className="btn btn-ghost" href="#work">View Work</a>
              <a className="btn btn-ghost" href="#projects">View Projects</a>
            </div>
            <div className="hero-more">
              <span className="hero-fun">Want to know more about me?</span>
              <a className="btn btn-ghost" href="#things-i-love">Things I Love</a>
            </div>
          </div>

          <div className="hero-right">
            {g.profilePicture && (
              <img
                className="hero-image"
                src={toUrl(g.profilePicture)}
                alt={g.username}
              />
            )}
          </div>
        </section>
      )}

      <main>
        {work.display && (
          <section id="work" className="section">
            <div className="section-header">
              <h2>Work</h2>
              <p>Selected roles and leadership highlights.</p>
            </div>

            <div className="work-list">
              {work.experience.map((e, idx) => (
                <article key={idx} className="work-item">
                  <div className="work-meta">
                    <h3>{e.role}</h3>
                    <p className="work-company">{e.company}</p>
                    <p className="work-date">{e.date}</p>
                  </div>
                  <div className="work-body">
                    <p>{e.desc}</p>
                    {e.descBullets?.length > 0 && (
                      <ul className="work-bullets">
                        {e.descBullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {projects?.display && (
          <section id="projects" className="section section-soft">
            <div className="section-header">
              <h2>Projects</h2>
              <p>Recent builds and experiments.</p>
            </div>
            <div className="project-grid">
              {projects.items.map((p) => {
                const isOpen = !!openProjects[p.title];
                return (
                <article key={p.title} className="project-card">
                  <div className="project-media">
                    <button
                      className="project-image-button"
                      type="button"
                      onClick={() => setLightboxSrc(toUrl(p.thumbnail))}
                      aria-label={`Open ${p.title} image`}
                    >
                      <img
                        src={toUrl(p.thumbnail)}
                        alt={p.title}
                        className={p.thumbnail.includes("snake1") ? "project-zoomout" : ""}
                      />
                    </button>
                    <button
                      className="project-cta"
                      type="button"
                      onClick={() =>
                        setOpenProjects((prev) => ({ ...prev, [p.title]: !prev[p.title] }))
                      }
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Show less" : "Show more"}
                    </button>
                  </div>
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p className="project-meta">{p.date}</p>
                    <p className="project-desc">{p.description}</p>
                  </div>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                      View project →
                    </a>
                  )}
                  {isOpen && (
                    <div className="project-more">
                      <p>{p.details}</p>
                      <div className="project-gallery">
                      {p.gallery.map((img, i) => (
                        <button
                          className="project-image-button"
                          type="button"
                          key={i}
                          onClick={() => setLightboxSrc(toUrl(img))}
                          aria-label={`Open ${p.title} gallery image ${i + 1}`}
                        >
                          <img
                            src={toUrl(img)}
                            alt={`${p.title} ${i + 1}`}
                          />
                        </button>
                      ))}
                    </div>
                    </div>
                  )}
                </article>
              )})}
            </div>
          </section>
        )}

        {skills.display && (
          <section id="skills" className="section section-soft">
            <div className="section-header">
              <h2>{skills.title}</h2>
              <p>Tools and technologies I use to ship.</p>
            </div>
            <div className="skill-grid">
              {skills.categories.map((group) => (
                <div key={group.label} className="skill-card">
                  <h3>{group.label}</h3>
                  <div className="pill-grid">
                    {group.items.map((skill) => (
                      <span key={skill} className="pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.display && (
          <section id="about" className="section">
            <div className="section-header">
              <h2>About</h2>
              <p>Education and a quick snapshot.</p>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <h3>Education</h3>
                {education.schools.map((s, idx) => (
                  <div key={idx} className="about-row">
                    <p className="about-strong">{s.schoolName}</p>
                    <p className="about-muted">{s.subHeader}</p>
                    <p className="about-muted">{s.duration}</p>
                  </div>
                ))}
              </div>
              <div className="about-card">
                <h3>Contact</h3>
                <p className="about-muted">{contact.subtitle}</p>
                <div className="contact-actions">
                  <a className="btn btn-primary" href={`mailto:${contact.email}`}>
                    Email
                  </a>
                  <a className="btn btn-ghost" href={s.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
                <p className="contact-detail">{contact.email}</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">© {new Date().getFullYear()} Tuyet Minh Vu</footer>

      {lightboxSrc &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="lightbox" onClick={() => setLightboxSrc(null)}>
            <div
              className="lightbox-frame"
              role="dialog"
              aria-modal="true"
              aria-label="Project image preview"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>
                Close
              </button>
              <img src={lightboxSrc} alt="Project full view" />
            </div>
          </div>,
          document.body
        )}
      {showGreeting &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="greeting-overlay" onClick={() => setShowGreeting(false)}>
            <div
              className="greeting-card"
              role="dialog"
              aria-modal="true"
              aria-label="Greeting"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="greeting-close" onClick={() => setShowGreeting(false)}>
                Close
              </button>
              <div className="greeting-emoji">👋</div>
              <h2>Hi there!</h2>
              <p> Welcome to my portfolio! I’m really glad you’re here. 
                   Feel free to explore and have a great day!</p>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

function FlowerBloom({ toUrl }) {
  const blooms = [
    { x: "-240px", y: "-40px", size: 200, img: "flower3.png", delay: "0s", opacity: 0.95 },
    { x: "-180px", y: "120px", size: 160, img: "flower4.png", delay: "0.6s", opacity: 0.9 },
    { x: "-220px", y: "320px", size: 140, img: "flower2.png", delay: "1.2s", opacity: 0.85 },
    { x: "-160px", y: "520px", size: 180, img: "flower1.png", delay: "1.8s", opacity: 0.9 },
    { x: "-200px", y: "760px", size: 150, img: "flower4.png", delay: "2.4s", opacity: 0.85 },
    { x: "-240px", y: "980px", size: 170, img: "flower2.png", delay: "3s", opacity: 0.9 },
    { x: "-180px", y: "1220px", size: 140, img: "flower1.png", delay: "0.8s", opacity: 0.85 },
    { x: "-210px", y: "1460px", size: 190, img: "flower3.png", delay: "1.6s", opacity: 0.9 },
    { x: "-160px", y: "1700px", size: 150, img: "flower4.png", delay: "2.6s", opacity: 0.85 },
    { x: "-230px", y: "1940px", size: 180, img: "flower2.png", delay: "3.2s", opacity: 0.9 },

    { x: "40px", y: "40px", size: 120, img: "flower1.png", delay: "0.4s", opacity: 0.8 },
    { x: "120px", y: "260px", size: 140, img: "flower2.png", delay: "1s", opacity: 0.85 },
    { x: "60px", y: "520px", size: 160, img: "flower3.png", delay: "1.6s", opacity: 0.9 },
    { x: "180px", y: "780px", size: 130, img: "flower4.png", delay: "2.2s", opacity: 0.85 },
    { x: "90px", y: "1040px", size: 150, img: "flower1.png", delay: "2.8s", opacity: 0.9 },
    { x: "160px", y: "1280px", size: 120, img: "flower2.png", delay: "0.6s", opacity: 0.8 },
    { x: "40px", y: "1520px", size: 140, img: "flower3.png", delay: "1.4s", opacity: 0.85 },
    { x: "140px", y: "1760px", size: 160, img: "flower4.png", delay: "2s", opacity: 0.9 },
    { x: "80px", y: "2000px", size: 130, img: "flower1.png", delay: "2.6s", opacity: 0.85 },
    { x: "170px", y: "2240px", size: 150, img: "flower2.png", delay: "3.1s", opacity: 0.9 },

    { x: "60%", y: "120px", size: 160, img: "flower3.png", delay: "0.7s", opacity: 0.9 },
    { x: "70%", y: "360px", size: 140, img: "flower1.png", delay: "1.3s", opacity: 0.85 },
    { x: "62%", y: "620px", size: 180, img: "flower2.png", delay: "1.9s", opacity: 0.9 },
    { x: "74%", y: "860px", size: 150, img: "flower4.png", delay: "2.5s", opacity: 0.85 },
    { x: "66%", y: "1100px", size: 130, img: "flower3.png", delay: "3.1s", opacity: 0.9 },
    { x: "72%", y: "1340px", size: 170, img: "flower1.png", delay: "0.9s", opacity: 0.85 },
    { x: "60%", y: "1580px", size: 150, img: "flower2.png", delay: "1.7s", opacity: 0.9 },
    { x: "76%", y: "1820px", size: 140, img: "flower4.png", delay: "2.3s", opacity: 0.85 },
    { x: "64%", y: "2060px", size: 180, img: "flower3.png", delay: "2.9s", opacity: 0.9 },
    { x: "70%", y: "2300px", size: 150, img: "flower1.png", delay: "3.4s", opacity: 0.85 },

    { x: "calc(100% - 60px)", y: "20px", size: 170, img: "flower2.png", delay: "0.2s", opacity: 0.9 },
    { x: "calc(100% - 20px)", y: "240px", size: 140, img: "flower4.png", delay: "0.9s", opacity: 0.85 },
    { x: "calc(100% - 80px)", y: "480px", size: 160, img: "flower1.png", delay: "1.5s", opacity: 0.9 },
    { x: "calc(100% - 10px)", y: "720px", size: 130, img: "flower3.png", delay: "2.1s", opacity: 0.85 },
    { x: "calc(100% - 70px)", y: "960px", size: 180, img: "flower2.png", delay: "2.7s", opacity: 0.9 },
    { x: "calc(100% - 30px)", y: "1200px", size: 150, img: "flower4.png", delay: "3.3s", opacity: 0.85 },
    { x: "calc(100% - 90px)", y: "1440px", size: 170, img: "flower1.png", delay: "0.5s", opacity: 0.9 },
    { x: "calc(100% - 20px)", y: "1680px", size: 140, img: "flower3.png", delay: "1.1s", opacity: 0.85 },
    { x: "calc(100% - 80px)", y: "1920px", size: 160, img: "flower2.png", delay: "1.9s", opacity: 0.9 },
    { x: "calc(100% - 40px)", y: "2160px", size: 150, img: "flower4.png", delay: "2.6s", opacity: 0.85 },

    { x: "32%", y: "160px", size: 120, img: "flower2.png", delay: "0.3s", opacity: 0.8 },
    { x: "28%", y: "520px", size: 140, img: "flower3.png", delay: "1.1s", opacity: 0.85 },
    { x: "36%", y: "880px", size: 130, img: "flower1.png", delay: "1.9s", opacity: 0.8 },
    { x: "24%", y: "1240px", size: 150, img: "flower4.png", delay: "2.7s", opacity: 0.85 },
    { x: "34%", y: "1600px", size: 120, img: "flower2.png", delay: "3.3s", opacity: 0.8 },
    { x: "26%", y: "1960px", size: 140, img: "flower3.png", delay: "0.7s", opacity: 0.85 },
    { x: "38%", y: "2320px", size: 130, img: "flower1.png", delay: "1.5s", opacity: 0.8 },
    { x: "30%", y: "2680px", size: 150, img: "flower4.png", delay: "2.3s", opacity: 0.85 },
    { x: "22%", y: "3040px", size: 120, img: "flower2.png", delay: "3.1s", opacity: 0.8 },
    { x: "40%", y: "3400px", size: 140, img: "flower3.png", delay: "0.9s", opacity: 0.85 },
  ];

  return (
    <div className="bloom-layer" aria-hidden="true">
      {blooms.map((b, idx) => (
        <span
          key={idx}
          className="bloom"
          style={{
            "--x": b.x,
            "--y": b.y,
            "--size": `${b.size}px`,
            "--img": `url(${toUrl(`assets/flower/${b.img}`)})`,
            "--delay": b.delay,
            "--opacity": b.opacity,
          }}
        />
      ))}
    </div>
  );
}
