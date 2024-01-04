import {
  EMAIL,
  GITHUB_URL,
  GITHUB_USERNAME,
  LAST_UPDATE,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
  TWITTER_URL,
  TWITTER_USERNAME,
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
                I am a Canadian-Romanian software engineer and entrepreneur
                approaching a decade of experience building all kinds of
                products and systems. My scope of work is extensive - I started
                my career designing analog + embedded music hardware and writing
                C code. Now I mostly do full-stack software engineering with a
                particular interest in Machine Learning and Programming Language
                Design. I am a polyglot capable of building systems in a wide
                range of languages and styles. I love to write experimental
                software, and my current side project obsessions include
                replicating machine learning papers on consumer hardware /
                WebGPU, and building a human-AI pair programming language + IDE
                in Rust. For my full resume, please see the link above.
                <br />
                <br />
                Key Interests include: Deep Learning, NeuroSymbolic AI,
                Compilers, Programming Language Design, Haskell, Dependent Type
                Systems, Lean, Coq, Idris, Lisp, Formal Code Verification,
                Program Synthesis, Rust, GPU Programming, Cuda, WebGPU, ML
                Compilation, Human-AI Symbiosis, Colonizing Mars, e/acc,
                Networked States, Singularity, Decentralization.
                <br />
                <br />
                I will be in Melbourne, Australia until July at the earliest and
                am available for flexible remote jobs. I am in search of mentors
                and collaborators for research projects, and am finishing my
                math degree part-time. Dont hesitate to reach out :)
                <br />
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
            <a href={TWITTER_URL}>linkedin @{TWITTER_USERNAME}</a>
          </li>
          <li>
            <a href={LINKEDIN_URL}>linkedin @{LINKEDIN_USERNAME}</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
