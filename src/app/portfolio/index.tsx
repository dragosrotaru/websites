import Image from "next/image";
import { GITHUB_URL } from "../info";
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
        <Image
          src={"portfolio/" + image}
          alt={imageAlt}
          width={500}
          height={500}
        />
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
        Below is a selection of my past jobs, clients and select side projects.
        <br />
        Additionally you can find my projects on <a href={GITHUB_URL}>Github</a>.
        <br />
        This section needs to be updated.
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
