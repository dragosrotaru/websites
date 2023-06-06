import { EMAIL, INSTAGRAM, PHONE_CA, PHONE_EU } from "../info";
import styles from "./page.module.css";

export default function Found() {
  return (
    <>
      <header>
        <img src="icons/icon.png" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.found}>
        <div>
          <h1>Hello stranger 👋</h1>
          <p>It looks like I was careless and lost something.</p>
          <p>
            Will you please please return it? I would really appreciate having
            that thing you found back. It is probably super important to me and
            hard to replace, I might even need it to earn a living. depending on
            how valuable it is, I can offer you a reward, like a coffee, a
            bottle of wine, or cold hard cash.
          </p>
        </div>
        <img src="cat-begging.gif" />
      </div>
      <div></div>
      <div
        className={styles.contact}
        style={{ backgroundColor: "var(--color-background-light)" }}
      >
        <p>Here is my contact information:</p>
        <ul>
          <li>email: {EMAIL}</li>
          <li>phone: {PHONE_CA} (Canada)</li>
          <li>phone: {PHONE_EU} (Europe)</li>
          <li>instagram: {INSTAGRAM}</li>
        </ul>
      </div>
    </>
  );
}
