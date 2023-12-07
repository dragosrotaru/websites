import {
  EMAIL,
  GITHUB_URL,
  GITHUB_USERNAME,
  LAST_UPDATE,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
} from "./info";
import Logo from "./logo";
import Neural from "./neural";
import styles from "./page.module.css";
import Portfolio from "./portfolio";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
        <nav>
          <ul className="list">
            {/* <li>
              <a href="#here-and-now">Here and Now</a>
            </li> */}
            <li>
              <a href="#hiring">Work with me</a>
            </li>
            {/* <li>
              <a href="#portfolio">Portfolio</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/resume.pdf">Resume</a>
            </li>
            <li>
              <a href={GITHUB_URL}>Github</a>
            </li>
           {/*  <li>
              <a href="/blog">Blog</a>
            </li> */}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Neural />
        <div className={styles.aboveTheFold}>
        <section id="here-and-now">
              <h2>Here and Now 🧘</h2>
              <p>
              <strong>
                  I am seeking great people to do software engineering / ML work
                  with. I can offer my authentic interest 🧠 a positive attitude
                  🌞 and commitment to growth 🌱.
                </strong>
                </p>
              <p>last update on {LAST_UPDATE}</p>
            </section>
        </div>
        <div className={styles.outerSlantUp}>
          <div className={styles.innerSlantUp}>
            <section id="hiring">
              <h2>Lets Work Together</h2>
              <p>After spending 7 years in the software industry
                I have decided to return to school so that I can pursue AI research.
                I am actively looking for work opportunities in conjunction with school.
                I currently have full availability for work at least for 8 months.
              </p>
              <p>
                Please find{" "}
                <a href="resume.pdf" target="_blank">
                  my resume here
                </a>{" "}
                for your reading pleasure. I am primarily a Fullstack software engineer
                 who has dabbled in a wide variety of work,
                diverse in purpose, scope and technology.
                My past work includes SaaS B2B platforms 
                and P2P open source consumer applications
                for high growth silicon valley companies,
                web/mobile applications for close to 20 clients,
                consulting startups on technical direction,
                finding vulnerabilities in web applications,
                designing embedded hardware,
                data analysis for a legal case, and much more.
                I am also the cofounder/CTO of Huckleberry AI based in Waterloo, we 
                are working on a better discovery experience for home buyers and have
                3 products in the market.
              </p>
              <p>
                My workhorse stack is TypeScript, Node, React, AWS and PostGres.
                I have also worked on production systems in Python, C#, C,
                Golang, Ruby, Redis, RabbitMQ, Mongo and many other technologies.
                I am very interested in Haskell, Rust and
                Lisp variants, and currently I am learning gpu programming with WebGPU.
              </p>
            </section>
            {/* <Portfolio /> */}
          </div>
        </div>
      </main>
      <footer id="contact">
        <ul className="list">
          <li>
            <h2>Contact</h2>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <a href={GITHUB_URL}>github @{GITHUB_USERNAME}</a>
          </li>
          <li>
            <a href={LINKEDIN_URL}>linkedin @{LINKEDIN_USERNAME}</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
