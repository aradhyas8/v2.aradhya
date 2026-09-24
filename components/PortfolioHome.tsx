import Image from "next/image";
import PortfolioSidebar from "@/components/PortfolioSidebar";
import { sketches } from "@/components/ProjectSketches";
import CopyEmail from "@/components/CopyEmail";
import HushfieldScreens from "@/components/HushfieldScreens";
import RevealObserver from "@/components/RevealObserver";
import RippleText from "@/components/RippleText";

const resume = "/static/Resume/AradhyaSingh_Software_Developer.pdf";

const projects = [
  {
    name: "PageMind",
    desc: "Conversational document intelligence: upload a PDF, ask questions, and get citation-backed answers through retrieval-augmented generation over vector embeddings.",
    href: "https://www.pagemind.app",
    label: "pagemind.app",
  },
  {
    name: "QueryIO",
    desc: "A Model Context Protocol server that lets AI coding agents introspect schemas, parse SQL ASTs, and run validated queries against PostgreSQL.",
    status: "In development",
  },
  {
    name: "Paperrow",
    desc: "Spreadsheet intelligence linking Google Sheets with multimodal Gemini extraction pipelines, PostgreSQL, and Cloudflare R2 storage.",
    href: "https://paperrow.com",
    label: "paperrow.com",
  },
  {
    name: "Serverus",
    desc: "High-throughput object storage and media processing service on AWS EC2 and Docker, with a Redis cache-aside layer to cut S3 latency and egress, and multipart stream uploads.",
    href: "https://github.com/aradhyas8/serverus",
    label: "View the code",
  },
  {
    name: "v2.aradhya",
    desc: "The previous version of this portfolio: a dark Next.js and TypeScript site with Framer Motion interactions.",
    href: "https://aradhyapf.vercel.app/",
    label: "aradhyapf.vercel.app",
  },
  {
    name: "For The Horses",
    desc: "Animal rescue app that won first prize at yuHacks 2022, with search, a dashboard, adopter matching, and messaging.",
    href: "https://github.com/aradhyas8/ForTheHorses",
    label: "View the code",
  },
];

const roles = [
  {
    company: "Empire Life",
    position: "Software Engineer",
    time: "2026–present",
    dateTime: "2026-09",
    bullets: [
      "Developing and maintaining Customer Identity and Access Management (CIAM) solutions using Auth0, supporting secure authentication, authorization, and user access workflows.",
    ],
    tech: "Auth0 · CIAM",
  },
  {
    company: "CIBC · Fraud Technology",
    position: "Business Analyst",
    time: "2023–2026",
    dateTime: "2023-01",
    bullets: [
      "Built Python automation scripts and reconciliation pipelines using pandas, NumPy, SQL, and PostgreSQL to identify SLA breaches, queue mismatches, duplicate fraud cases, and workflow anomalies, reducing manual review effort by approximately 40%.",
      "Developed internal tooling to support fraud case assignment, investigator queue monitoring, exception handling, and operational reporting across high-volume fraud workflows.",
      "Investigated production workflow issues by analyzing transaction patterns, case routing logic, API responses, and data inconsistencies across CNP, tap, chip, debit, and e-Transfer fraud channels.",
    ],
    tech: "Python · pandas · NumPy · SQL · PostgreSQL",
  },
  {
    company: "Fibra Inc.",
    position: "Software Engineer",
    time: "2023",
    dateTime: "2023-01",
    bullets: [
      "Designed and built RESTful backend services using Node.js, Express.js, and PostgreSQL, including authentication endpoints, user-management APIs, normalized database schemas, and backend validation logic for the product’s beta launch.",
      "Implemented authentication and identity controls using JWT, bcrypt hashing, request validation, and role-based access policies, securing all backend routes and standardizing authorization logic.",
      "Optimized PostgreSQL schema design and query performance through indexing and normalization, improving average response time by approximately 35%.",
    ],
    tech: "Node.js · Express.js · PostgreSQL · JWT · bcrypt",
  },
  {
    company: "Score Media and Gaming",
    position: "Quality Engineering Intern",
    time: "2023",
    dateTime: "2023-01",
    bullets: [
      "Designed and executed automated unit, functional, and regression test suites using Python, covering REST API responses, payment scenarios, geolocation checks, and regulatory compliance logic across Android, iOS, and web platforms.",
      "Used Charles Proxy, Postman, Jira, TestRail, and CI/CD pipeline logs to debug API requests, reproduce defects, and validate fixes across UAT, staging, and production environments.",
      "Automated QA reporting workflows with Python by generating TestRail test cases and Jira defect tickets from structured failure outputs, reducing manual reporting effort by approximately 50%.",
    ],
    tech: "Python · Charles Proxy · Postman · Jira · TestRail",
  },
];

export default function PortfolioHome() {
  return (
    <div className="portfolio portfolio-home">
      <a className="skip-link" href="#main">Skip to content</a>
      <RevealObserver />

      <div className="portfolio-shell" id="top">
        <PortfolioSidebar counts={{ work: projects.length + 1, experience: roles.length }} />

        <main id="main" className="portfolio-main">
          <section className="home-section work-section" id="work" aria-labelledby="work-title">
            <h2 className="section-title" id="work-title" data-reveal>Selected work</h2>

            <article className="hushfield" aria-labelledby="hushfield-title">
              <div className="hushfield-bg" aria-hidden="true">
                <Image
                  src="/static/Images/hushfield/playback.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 960px) 900px, 100vw"
                  priority
                  className="hushfield-backdrop"
                />
              </div>
              <div className="hushfield-copy">
                <h3 id="hushfield-title">Hushfield</h3>
                <p>
                  An ambient audio app built around places rather than isolated sound tracks: a rainy café, a quiet wooden library, a cabin at night. I built the complete listening experience and native DSP mixer, releasing to both platforms.
                </p>
                <div className="hushfield-links">
                  <a href="https://apps.apple.com/app/id6802781534" target="_blank" rel="noopener noreferrer">App Store ↗</a>
                  <a href="https://play.google.com/store/apps/details?id=com.inethan18.hushfield" target="_blank" rel="noopener noreferrer">Google Play ↗</a>
                </div>
              </div>
              <HushfieldScreens />
            </article>

            <div className="card-grid">
              {projects.map((p) => {
                const Sketch = sketches[p.name];
                const id = `${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
                return (
                  <article className={`card project-card${p.href ? " is-linked" : ""}`} key={p.name} aria-labelledby={id} data-reveal>
                    <div className="sketch-frame" aria-hidden="true"><Sketch /></div>
                    <div className="card-body">
                      <h3 id={id}>{p.name}</h3>
                      <p className="card-desc">{p.desc}</p>
                      {p.href ? (
                        <a className="card-link" href={p.href} target="_blank" rel="noopener noreferrer">{p.label} ↗</a>
                      ) : p.status ? (
                        <span className="card-status">{p.status}</span>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>

            <a href="/project_archive" className="text-link archive-link">Full project archive (13) ↗</a>
          </section>

          <section className="home-section" id="experience" aria-labelledby="experience-title">
            <h2 className="section-title" id="experience-title" data-reveal>Experience</h2>
            <ol className="timeline">
              {roles.map((role) => (
                <li className="tl-item" key={role.company} data-reveal>
                  <time dateTime={role.dateTime} className="tl-date">{role.time}</time>
                  <div className="tl-body">
                    <h3>{role.position}</h3>
                    <p className="role-position">{role.company}</p>
                    <ul className="role-bullets">
                      {role.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <p className="project-tags">{role.tech}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a className="text-link experience-resume-link" href={resume} target="_blank" rel="noopener noreferrer">Read full résumé (PDF) ↗</a>
          </section>

          <section className="home-section about-section" id="about" aria-labelledby="about-title">
            <h2 className="section-title" id="about-title" data-reveal>About</h2>
            <div className="about-grid">
              <p className="about-lead" data-reveal>
                I care most about making complicated software <em>robust, well-modeled, and intuitive</em> for the people who rely on it.
              </p>
              <dl className="about-facts">
                <div><dt>Now</dt><dd>Software Engineer at Empire Life</dd></div>
                <div><dt>Works across</dt><dd>Backend infrastructure, mobile audio, AI developer tooling</dd></div>
                <div><dt>Studied</dt><dd>Computer science, <a href="https://www.yorku.ca/" target="_blank" rel="noopener noreferrer">York University</a></dd></div>
                <div><dt>Based in</dt><dd>Toronto</dd></div>
              </dl>
            </div>

            <div className="contact-panel">
              <h3>Get in touch.</h3>
              <div className="contact-email">
                <a href="mailto:aradhyas8@zohomailcloud.ca"><RippleText lines={["aradhyas8@zohomailcloud.ca"]} label="aradhyas8@zohomailcloud.ca" /></a>
                <CopyEmail email="aradhyas8@zohomailcloud.ca" />
              </div>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/aradhyas8/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href="https://github.com/aradhyas8" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href={resume} target="_blank" rel="noopener noreferrer">Résumé (PDF) ↗</a>
              </div>
            </div>
          </section>

          <footer className="portfolio-footer">
            <p>© 2026 Aradhya Singh</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
