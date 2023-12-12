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
                Howdy. I am a programmer and aspiring researcher
                working towards neurosymbolic ASI.
                I am also a 27 year old Romanian/Canadian first generation immigrant,
                and have lived all over the world following various passions.
                My path is pretty chaotic and unconventional.
                I am open to work anywhere or remotely, but after 7 years mostly remote I prefer to be hybrid.
                <br /><br />
                My interests include Type Theory, Metaprogramming,
                Compiler Design, Decentralization, CRDTs, AGI, Programming Languages,
                WebGPU, Deep Learning, Symbolic AI, Haskell, Rust, Lisp, TypeScript,
                Knowledge Representation, Spirituality, Psychedelics, Philosophy and more.
                <br /><br />
                I am in search of mentors and collaborators.
                If you wish to really know me, please just reach out!
                <br /><br />
                With love and kindness,
                <br />
                Dragos Rotaru
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
