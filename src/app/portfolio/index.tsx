import { Project as ProjectType, Projects } from "./projects";
import styles from "./styles.module.css";

function Project({
  title,
  description,
  image,
  imageAlt,
  button,
  position = "left",
}: ProjectType & { position?: "left" | "right" }) {
  return (
    <div
      className={[
        styles.project,
        position == "left" ? styles.left : styles.right,
      ].join(" ")}
    >
      <div className={styles.image}>
        <img src={"portfolio/" + image} alt={imageAlt} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        {button ? (
          <a href={button.url} target="_blank" rel="noopener noreferrer">
            <div
              className={[styles.button, button.color + "Background"].join(" ")}
            >
              {button.title}
            </div>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <h2>Experience Spotlight 🔦</h2>
      <p>
        Below are some of the highlights of my career. There are many more
        projects on my gitub or social media.
      </p>
      {Projects.map((project, index) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          imageAlt={project.imageAlt}
          button={project.button}
          position={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </section>
  );
}
