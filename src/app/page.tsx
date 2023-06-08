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
                  <strong>June - August</strong> - 🇪🇺🧗‍♀️ Europe
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
                here we are, so:
              </p>
              <p>
                <strong>
                  I am seeking great people to do software engineering work
                  with. I can offer my authentic interest 🧠 a positive attitude
                  🌞 and commitment to growth 🌱.
                </strong>
              </p>
              <p>
                Please find{" "}
                <a href="resume.pdf" target="_blank">
                  my resume here
                </a>{" "}
                for your reading pleasure. Ever since I was a teen, I have been
                in love with computer science, from the most theoretical to the
                most pragmatic aspects. Like all long term relationships there
                are of course ebs and flows. But my dedication to the craft has
                never waned.
              </p>
              <p>
                My preferred stack is TypeScript, Node, React, AWS and PostGres.
                I have also worked on production systems in Python, C#, C,
                Golang, Ruby, Angular, Vue and many many other things, but I
                prefer to stick with Typescript as I have become quite fond of
                it and am developing some tools to make it even better. However
                if there is a chance to work with Haskell or a Lisp variant I
                would take it.
              </p>
              <p>
                I am especially interested in programming language design and
                tooling, in particular using large language models/transformers.
                My bread and butter is applying domain driven design and event
                sourcing to really complex domains. Additionally anything
                related to building a better internet - peer to peer protocols,
                semantic web, distributed data structures (CRDTs), content
                addressable protocols (IPFS) and graph data structures.
              </p>
              <p>
                <strong>
                  Im looking for jobs that are fully remote, with flexible
                  hours. I want to work on teams with focused leadership, an
                  asynchronous workflow with minimal overhead and a commitment
                  to following industry best practices.
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
