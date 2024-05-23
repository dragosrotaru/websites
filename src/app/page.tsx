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
                Howdy, Im Dragos - a Canadian-Romanian immigrant, polymath, software engineer, entrepreneur and investor.
                I spent the last 10 years with high growth bay area startups, cofounding a waterloo startup,
                launching hardware/software products and growing our family run accounting/tech firm in the Waterloo-Toronto-Montreal corridor.
                <br/><br/>
                My life philosophy is centered around lifelong experiential learning and long term investment into people.
                Ive lived in 7+ countries and countless cities to build relationships and gain insight into markets abroad.
                Now I am doubling down on the Canadian tech scene to create a better future for Canadians and the rest of the world by building
                my own companies and helping others to do the same right here at home.
                <br/><br/>
                If youre an entrepreneur, I want to help you get funding, find 
                your team, build your product and leverage international opportunities. I am super happy to meet with people who
                are passionate about their work and look out for opportunities to support their vision.
                <br/><br/>
                I cast a very wide net when it comes to my interests – my current obsessions include international tax, psychedelic medicine,
                AI/ML, housing and the future of work. When Im not writing code, reading or looking at spreadsheets I like to highline, climb,
                and ski. You can find me at burning man, on the road in my converted school bus or solo long distance fast-packing around the world.
               
                My software engineer resume can be found <a href="/resume.pdf">here</a>.
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
