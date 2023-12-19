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
                type theory, program synthesis, formal verification,
                metaprogramming, language/compiler design, decentralization,
                deep learning, knowledge representation, the combination of
                spirituality and science, psychedelics, transhumanism, trauma,
                mental illness, neurodivergence, collaboration, and the future
                of humanity. I am working on human-ai programming workspaces,
                and I would like to build a archaic-revivalist techno-optimist
                community. I would also like to settle on Mars. I build many
                things with atoms and bits. I am a generalist, polymath,
                aspiring renaissance man. I live in a school bus, walk on
                highlines, ski down mountains, explore lifestyles nomadic and
                otherwise, and have a photolithography (microchip) machine in my
                parents basement.
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
