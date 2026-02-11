const LINKEDIN_URL = "https://www.linkedin.com/in/tuyetminhvu";
const GITHUB_URL = "https://github.com/Tuyetminhvu";
const EMAIL = "yourname@email.com"; // TODO: replace

export default function App() {
  return (
    <div className="page">
      {/* Top Nav */}
      <nav className="nav">
        <a className="brand" href="#top">TMV</a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="pill">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="top">
        <div className="heroLeft">
          <p className="badge">Computer Science Student</p>
          <h1 className="title">Tuyet Minh Vu</h1>
          <p className="subtitle">
            I’m a Computer Science student originally from Vietnam. I enjoy problem-solving,
            algorithms, and building clean software that helps people.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="miniLinks">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot">•</span>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="dot">•</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>

        <div className="heroRight" aria-hidden="true">
          <div className="avatar">
            <div className="avatarInner">TV</div>
          </div>
          <div className="heroCard">
            <p className="heroCardTitle">Focus</p>
            <p className="heroCardText">
              Backend development • Web apps • Learning-focused projects • Healthcare-tech interest
            </p>
          </div>
        </div>
      </header>

      <main className="main">
        {/* About */}
        <section className="card" id="about">
          <h2>About</h2>
          <p>
            Hi! I’m Tuyet Minh (Bi). I’m building strong fundamentals in software engineering and
            enjoy turning ideas into simple, working products.
          </p>
          <p>
            I like projects that teach real skills: clean code, solid data structures, and practical
            UI/UX. I’m especially interested in software that supports people and communities.
          </p>
        </section>

        {/* Projects */}
        <section className="card" id="projects">
          <div className="sectionHeader">
            <h2>Projects</h2>
            <p className="muted">A few things I’ve built (or am building).</p>
          </div>

          <div className="grid">
            <ProjectCard
              title="Trie Data Structure"
              desc="Trie implementation with prefix search and proper memory management (Rule of Three)."
              tags={["C++", "OOP", "Memory"]}
              link="#"
              linkLabel="Add GitHub link"
            />
            <ProjectCard
              title="Monopoly Simulation"
              desc="Simulates Monopoly gameplay to analyze landing probabilities using different strategies."
              tags={["Java", "Simulation", "Stats"]}
              link="#"
              linkLabel="Add GitHub link"
            />
            <ProjectCard
              title="Campus Navigation App"
              desc="Search buildings and compute shortest paths across a campus map."
              tags={["Java", "Pathfinding", "Data Structures"]}
              link="#"
              linkLabel="Add GitHub link"
            />
          </div>

          <p className="tiny">
            Tip: replace each “Add GitHub link” with your real repo URL when ready.
          </p>
        </section>

        {/* Skills */}
        <section className="card" id="skills">
          <div className="sectionHeader">
            <h2>Skills</h2>
            <p className="muted">Tools & languages I use and practice.</p>
          </div>

          <div className="chips">
            {[
              "Java",
              "C++",
              "Python",
              "C#",
              "SQL",
              "React",
              "HTML/CSS",
              "Git/GitHub",
              "VS Code",
              "Linux",
            ].map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="card" id="contact">
          <h2>Contact</h2>
          <p className="muted">
            Want to connect? Feel free to reach out on LinkedIn or email me.
          </p>

          <div className="contactRow">
            <a className="btn primary" href={`mailto:${EMAIL}`}>Email me</a>
            <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tuyet Minh Vu • Built with React + Vite</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc, tags, link, linkLabel }) {
  const isExternal = link?.startsWith("http");
  return (
    <article className="project">
      <h3>{title}</h3>
      <p className="muted">{desc}</p>
      <div className="chips">
        {tags.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>

      <a
        className="projectLink"
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {linkLabel} →
      </a>
    </article>
  );
}
