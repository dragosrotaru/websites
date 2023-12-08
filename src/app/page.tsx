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
                  I am working on neurosymbolic compilers and program synthesis in pursuit of ASI.
                  If you want to work together, my email is dragos@rotaru.co. Twitter is @noharamnofoul.
                  Some of my work is public on Github, some of it isnt. My resume was designed to make money
                  and gain personal independence given traumatic initial conditions.
                  If you actually want to know me, talk to me like a human being. If you are a recruiter,
                  non techical person or normie reading this, I apologize for my lack of conformity, but 
                  I spent 7 years trying to fit in your nonsensical boxes
                  and I think its time to just be my weird ass myself. 
                </strong>
                </p>
              <p>last update on {LAST_UPDATE}</p>
            </section>
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
