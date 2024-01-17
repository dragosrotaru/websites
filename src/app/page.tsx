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
                  I am a product driven software engineer and founder with 7+ years of
                  experience building all kinds of systems. I started my career designing
                  hardware and writing C code, however most of my career has been
                  full-stack dev, particularly in TypeScript/React. I am capable of picking
                  up new systems quickly. My current side projects include machine
                  learning on WebGPU and writing a graphics programming language in
                  Rust. I am looking for an early stage startup or scale up where I can
                  have substantial impact on the direction of tech and product. I thrive
                  when given a hard challenge. I am eager to prove myself and
                  surround myself with people smarter and more capable than I.
                  For my full resume, please see the link above.
                <br />
                <br />
                Key Interests include: Rust, Swift,
WebGPU, CRDTs, Edge
Computing, Solana, Deep
Learning, NeuroSymbolic AI,
Compilers, Programming
Language Design, Haskell,
Dependent Type Systems, Lisp,
Formal Code Verification, ML
Compilation.
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
