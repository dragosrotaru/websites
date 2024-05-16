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
                Howdy! My name is Dragos and I am a Canadian-Romanian software engineer and entrepreneur.
                My experience is diverse - I have built a consulting business, led engineering teams, brought products to market
                and delivered quality work for silicon valley tech as an individual contributor.
                I have also lived all over the world, From Japan to Romania to Canada and have a deep appreciation
                for international culture and business. I believe we need more entrepreneurship to make the country
                livable for young Canadians and immigrants, so I am working diligently to make that happen. I strive to 
                form international partnerships to help spread wealth and ensure freedom from tyranny,
                especially in less developed places like eastern europe. 
                <br/><br/><br/>
                I want to help you fund your startup, find 
                your founding team, build your product, bring it to new markets and feed your family. I like people who
                are passionate about their work and I am always looking for new opportunities to support their growth.
               
                My developer oriented resume can be found <a href="/resume.pdf">here</a>.
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
