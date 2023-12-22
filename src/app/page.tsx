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
                Howdy partner 🤠. I am a quasi-self-taught programmer/swe and
                researcher interested in human-AI symbiosis, neurosymbolic AI,
                type theory, heterogeneous computing, real time hardware,
                program synthesis, formal verification, metaprogramming,
                language/compiler design, decentralization, deep learning,
                knowledge representation, psychedelics, transhumanism and more.
                I am currently working on AI models on consumer hardware via
                WebGPU and human-ai programming workspaces. I build many things
                with atoms and bits. I am a generalist, polymath, aspiring
                renaissance man. I live in a school bus, walk on highlines, ski
                down mountains, explore lifestyles nomadic and otherwise, and
                have a photolithography (microchip) machine in my parents
                basement.
                <br />
                <br />
                I am in search of mentors and collaborators. If you wish to
                really know me, please just reach out!
                <br />
                <br />
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
