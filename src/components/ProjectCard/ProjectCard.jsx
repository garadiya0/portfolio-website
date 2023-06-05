import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <section className={styles.Main}>
      <div className={styles.Card}>
        <Image
          src="https://raw.githubusercontent.com/garadiya0/polyverse-illustration/main/assets/favicon.png"
          width={80}
          height={80}
          alt="polyverse logo"
        />

        <span className={styles.Info}>
          <p className={styles.Project_Name}>Polyverse Illustration</p>
          <p className={styles.Project_Desc}>
            Landing page showcasing 3D illustrations across various categories
          </p>

          <div className={styles.Link}>
            <span className={styles.Site_Name}>polyverse.netlify.app</span>
            <span className={styles.Github_Repo}>
              <Image
                src={"/github.svg"}
                width={24}
                height={24}
                alt="github icon"
              />
              garadiya0/polyverse-illustration
              <Image
                src={"/arrow.svg"}
                width={15}
                height={15}
                alt="upwards arrow icon"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </span>
      </div>
    </section>
  );
};

export default ProjectCard;
