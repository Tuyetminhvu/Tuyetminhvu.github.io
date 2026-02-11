import { portfolio } from "./portfolio";

export default function App() {
  return (
    <>
      {portfolio.backgroundImage && (
        <div style={styles.backgroundOverlay}></div>
      )}
      <div style={styles.page}>
        <TopNav />

        {portfolio.greeting.display && (
          <Header />
        )}

        <main style={styles.main}>
          {portfolio.skillsSection.display && <Skills />}
          {portfolio.educationInfo.display && <Education />}
          {portfolio.workExperiences.display && <Experience />}
          {portfolio.contactInfo.display && <Contact />}
        </main>

        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} Tuyet Minh Vu</p>
        </footer>
      </div>
    </>
  );
}

function TopNav() {
  return (
    <nav style={styles.nav}>
      <a href="#top" style={styles.brand}>TMV</a>
      <div style={styles.navLinks}>
        <a href="#skills" style={styles.navLink}>Skills</a>
        <a href="#education" style={styles.navLink}>Education</a>
        <a href="#experience" style={styles.navLink}>Experience</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </div>
    </nav>
  );
}

function Header() {
  const g = portfolio.greeting;
  const s = portfolio.socialMediaLinks;

  return (
    <header id="top" style={styles.hero}>
      <div style={styles.headerContent}>
        <div>
          <p style={styles.badge}>{g.username}</p>
          <h1 style={styles.title}>{g.title}</h1>
          <p style={styles.subtitle}>{g.subTitle}</p>

          <div style={styles.ctaRow}>
            <a href="#experience" style={{ ...styles.btn, ...styles.btnPrimary }}>View Experience</a>
            
            <a href={g.resumeLink} target="_blank" rel="noreferrer" style={styles.btn}>
              Resume
            </a>
            {s.linkedin && (
              <a href={s.linkedin} target="_blank" rel="noreferrer" style={styles.btn}>
                LinkedIn
              </a>
            )}
            {s.github && (
              <a href={s.github} target="_blank" rel="noreferrer" style={styles.btn}>
                GitHub
              </a>
            )}
          </div>

          <div style={styles.miniLinks}>
            <a href={`mailto:${s.gmail}`}>{s.gmail}</a>
            <span style={styles.dot}>•</span>
            <a href={s.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span style={styles.dot}>•</span>
            <a href={s.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {g.profilePicture && (
          <img 
            src={g.profilePicture} 
            alt={g.username}
            style={styles.profilePic}
          />
        )}
      </div>
    </header>
  );
}

function Skills() {
  const sec = portfolio.skillsSection;

  return (
    <section id="skills" style={styles.card}>
      <h2 style={styles.h2}>{sec.title}</h2>
      <p style={styles.muted}>{sec.subTitle}</p>

      <div style={styles.chips}>
        {sec.softwareSkills.map((skill) => (
          <span key={skill} style={styles.chip}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const schools = portfolio.educationInfo.schools;

  return (
    <section id="education" style={styles.card}>
      <h2 style={styles.h2}>Education</h2>
      {schools.map((s, idx) => (
        <div key={idx} style={styles.block}>
          <p style={styles.strong}>{s.schoolName}</p>
          <p style={styles.muted}>{s.subHeader}</p>
          <p style={styles.muted}>{s.duration}</p>
        </div>
      ))}
    </section>
  );
}

function Experience() {
  const exp = portfolio.workExperiences.experience;

  return (
    <section id="experience" style={styles.card}>
      <h2 style={styles.h2}>Experience</h2>
      {exp.map((e, idx) => (
        <div key={idx} style={styles.block}>
          <p style={styles.strong}>{e.role}</p>
          <p style={styles.muted}>{e.company} · {e.date}</p>
          <p style={styles.text}>{e.desc}</p>
          {e.descBullets?.length > 0 && (
            <ul style={styles.list}>
              {e.descBullets.map((b, i) => (
                <li key={i} style={styles.li}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

function Contact() {
  const c = portfolio.contactInfo;
  const s = portfolio.socialMediaLinks;

  return (
    <section id="contact" style={styles.card}>
      <h2 style={styles.h2}>{c.title}</h2>
      <p style={styles.muted}>{c.subtitle}</p>

      <div style={styles.contactRow}>
        <a style={{ ...styles.btn, ...styles.btnPrimary }} href={`mailto:${c.email}`}>
          Email
        </a>
        <a style={styles.btn} href={s.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a style={styles.btn} href={s.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <p style={{ ...styles.muted, marginTop: 10 }}>
        {c.phone} · {c.email}
      </p>
    </section>
  );
}

const styles = {
  backgroundOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: portfolio.backgroundImage 
      ? `url(${portfolio.backgroundImage})` 
      : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    zIndex: -1,
    opacity: 0.4 // Adjust opacity (0.1 = very faint, 1 = full strength)
  },
  page: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "22px 16px 40px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    lineHeight: 1.6,
    minHeight: "100vh",
    position: "relative"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    background: "rgba(255, 255, 255, 0.9)",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid #e6e6e6"
  },
  
  navLink: {
    textDecoration: "none",
    color: "#111",
    fontWeight: 500,
    padding: "8px 12px",
    borderRadius: 8,
    transition: "background 0.2s"
  },

  brand: {
    fontWeight: 900,
    letterSpacing: ".04em",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: 12,
    textDecoration: "none",
    color: "#111"
  },
  navLinks: {
    display: "flex",
    gap: 14,
    alignItems: "center"
  },
  pill: {
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid #ddd"
  },
  hero: {
    border: "1px solid #e6e6e6",
    background: "#fafafa",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14
  },
  badge: {
    display: "inline-block",
    fontSize: 12,
    color: "#555",
    border: "1px solid #e6e6e6",
    padding: "6px 10px",
    borderRadius: 999,
    margin: "0 0 10px"
  },
  title: { margin: 0, fontSize: 40, letterSpacing: "-.02em" },
  subtitle: { marginTop: 10, color: "#444", maxWidth: "60ch" },
  ctaRow: { display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #ddd",
    background: "white",
    textDecoration: "none",
    color: "#111",
    fontWeight: 700
  },
  btnPrimary: {
    background: "#111",
    color: "white",
    borderColor: "#111"
  },
  miniLinks: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginTop: 14,
    color: "#555",
    flexWrap: "wrap"
  },
  dot: { opacity: 0.7 },
  main: { display: "grid", gap: 14, marginTop: 14 },
  card: {
    border: "1px solid #e6e6e6",
    background: "white",
    borderRadius: 16,
    padding: 16
  },
  h2: { margin: "0 0 10px", fontSize: 18 },
  muted: { color: "#555", margin: 0 },
  text: { margin: "10px 0 0", color: "#222" },
  strong: { margin: 0, fontWeight: 800, color: "#111" },
  block: { marginTop: 12 },
  list: { paddingLeft: 18, margin: "10px 0 0" },
  li: { marginBottom: 6 },
  chips: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 },
  chip: {
    fontSize: 12,
    border: "1px solid #ddd",
    borderRadius: 999,
    padding: "6px 10px",
    background: "#f7f7f7"
  },
  barTrack: {
    height: 10,
    borderRadius: 999,
    background: "#eee",
    overflow: "hidden",
    marginTop: 6
  },
  barFill: {
    height: "100%",
    borderRadius: 999,
    background: "#111"
  },
  contactRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 },
  footer: { marginTop: 18, textAlign: "center", color: "#777", fontSize: 12 },

  headerContent: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  profilePic: {
    width: 190,
    height: 190,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #e6e6e6",
    flexShrink: 10,
    alignSelf: "flex-start",
  },
};