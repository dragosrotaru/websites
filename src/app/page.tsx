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
                Howdy. I am working on neurosymbolic evaluation in pursuit of ASI.
                My resume was designed to make
                money and gain personal independence given traumatic initial
                conditions. I’m a cofounder of a startup, engineer for 7 years, etc.
                If you wish to know me, please just reach out!
                <br /><br />
                I apologize for my lack of conformity, but I spent 27 years trying to fit into 
                a molds and I think it’s time to just be my weird ass myself.
                <br /><br />
                I study Haskell, Rust, Lisp, Metaprogramming, Type Theory,
                Deep Learning, Compiler/Language Design, WebGPU, CRDTs,
                Knowledge Representation, Religion, DMT, Singularity, HCI,
                Hardware, and more. I make money using Node, TS, React, AWS. the
                boring stuff.
                <br /><br />
                I would really
                appreciate a conversation, I want to collaborate!
                Godspeed.
                <br /><br />
                In love and kindness,
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
