import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props) => {
  return (
    <section className={styles.Main}>
      <div className={styles.Card}>
        <Image
          src={props.ProjectLogo}
          width={70}
          height={70}
          alt={props.LogoAltText}
        />

        <span className={styles.Info}>
          <p className={styles.Project_Name}>{props.ProjectName}</p>
          <p className={styles.Project_Desc}>{props.ProjectDesc}</p>

          <div className={styles.Link}>
            <span className={`${styles.Site_Name}`}>
              <Link
                className="Underline_Eff"
                target="_blank"
                href={props.LiveLink}
              >
                {props.LiveLinkName}
              </Link>
              <Image
                src="/arrow.svg"
                width={20}
                height={20}
                alt="upwards arrow icon"
              />
            </span>
            <span className={`${styles.Github_Repo}`}>
              <Image
                src={"/github.svg"}
                width={24}
                height={24}
                alt="github icon"
              />
              <Link
                className="Underline_Eff"
                target="_blank"
                href={props.GithubRepoURL}
              >
                {props.GithubRepoName}
              </Link>
              <Image
                src="/arrow.svg"
                width={20}
                height={20}
                alt="upwards arrow icon"
              />
            </span>
          </div>
        </span>
      </div>
    </section>
  );
};

export default ProjectCard;
