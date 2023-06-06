import {
  EMAIL,
  GITHUB_URL,
  GITHUB_USERNAME,
  LAST_UPDATE,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
} from "./info";
import Neural from "./neural";
import styles from "./page.module.css";
import Portfolio from "./portfolio";

export default function Home() {
  return (
    <>
      <header>
        <img src="icons/icon.png" />
        <nav>
          <ul className="list">
            <li>
              <a href="#here-and-now">Here and Now</a>
            </li>
            <li>
              <a href="#hiring">Hire Me?</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/resume.pdf">Resume</a>
            </li>
            <li>
              <a href={GITHUB_URL}>Github</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Neural />
        <div className={styles.aboveTheFold}>
          <h1>
            <span className="yellowText">Howdy</span> partner 🤠
            <br />
            Ready for an adventure?
          </h1>
        </div>
        <div className={styles.outerSlantUp}>
          <div className={styles.innerSlantUp}>
            <section id="here-and-now">
              <h2>Here and Now 🧘</h2>
              <p>last update: {LAST_UPDATE}</p>
              <h3>🔧 Working On</h3>
              <p>various personal projects</p>
              <p>looking for work</p>
              <h3>✈️ Travel Itinerary</h3>
              <ul className="list">
                <li>
                  <strong>June - August</strong> - 🇸🇰🇨🇿🇩🇪🇪🇸🇫🇷🇨🇭🇮🇹🇦🇹🇧🇪🇳🇱🧗‍♀️ Europe
                </li>
                <li>
                  <strong>September - October</strong> - 🇨🇦🇺🇸🧗‍♀️🚌 Canada + US
                </li>
                <li>
                  <strong>November - December</strong> - 🇪🇸🚴🪂 Spain
                </li>
                <li>
                  <strong>January - February</strong> - 🏔️⛷️ Alps
                </li>
              </ul>
            </section>
            <section id="hiring">
              <h2>Attention all Prospective Employers!</h2>
              <p>
                Of all the species in the world, only human beings have been
                foolish enough to invent jobs, computers and the need to program
                them. This is why I think the term code monkey is insulting
                towards monkeys. Monkeys had the foresight to avoid meetings
                that could have been emails, back pain and even JavaScript. But
                here we are. So...
              </p>
              <p>
                <strong>
                  I am seeking great people to do software engineering work with
                  in a respectful and authentic work environment.
                </strong>
              </p>
              <p>
                I have been programming and tinkering for 12 years, 7 years of
                which have been as a professional (💰). Half of my experience
                has involved a leadership or entrepreneural dimension to it. I
                have been the technical co-founder of a startup, the team lead
                on a couple projects and have an decent portfolio as an
                independent consultant and open source contributor. I have
                worked remotely almost my entire career with teams in North
                America and Europe. I am a dual Canada/EU citizen, based in the
                EU for now and I am looking for long-term remote contract work.
              </p>
              <p>
                My typical goto stack is TypeScript, Node, React, AWS and
                PostGres. I have also worked with Python, C#, Angular, C,
                Golang, Ruby and some other things I cant recall at the moment.
                I would prefer to stick with Typescript as I have become quite
                fond of it, but I am open minded.
              </p>
              <p>I am especially interested in the following topics:</p>
              <p>
                refactoring via chatGPT • domain driven design • event sourcing
                • typescript • programming language design • P2P/DHTs/CRDTs
                • Semantic Web • Graph DBs
              </p>
              <p>
                <strong>
                  Im looking for employers that meet these requirements
                </strong>
              </p>
              <p>
                fully remote • flexible working hours • strong technical
                leadership • good deliniation of responsibilities • frequent
                refactoring, CI/CD, testing • following best practices • async
                work and minimal meetings
              </p>
              <p>
                <strong>
                  If it sounds like we might have a good match, I would love to
                  hear about it.
                </strong>
              </p>
            </section>
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
