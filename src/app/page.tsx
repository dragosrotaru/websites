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
                Howdy! I am a product driven software engineer and former co-founder
                looking to build useful things with cool people. I started my career designing hardware and writing C code 10 years ago,
                however most of my work has been in full stack software engineering
                with a lean towards TypeScript/Node/React/AWS and some devops/data science sprinkled in.
                <br/>
                <br/>
                I live by three core principles:
                <br/>
                <br/>
                #1 a great company culture supersedes a great mission
                <br/>
                <br/>
                #2 the hardest problems in tech are almost always people problems
                <br/>
                <br/>
                #3 Quality OR Speed is a false dichotomy. Quality IS Speed 
                <br/>
                <br/>
                My current side projects include implementing machine learning papers in
                WebGPU and writing a graphics programming language in Rust/WebGPU (see PAL for details).
                <br/><br/>
                I am looking for a long term position in EU/US/Canada. Because I am a dual citizen of 
                Canada and Romania, I have spent an equal amount of time working on both continents
                and I will relocate without issue. I dont have a preference. I can also work in the US on a TN authorization.
                My resume can be found <a href="/resume.pdf">here</a>.
            </p>
            <p>last update on {LAST_UPDATE}</p>
          </section>
        </div>
        <div className={styles.outerSlantUp}>
          <div className={styles.innerSlantUp}>
            <Portfolio />
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
