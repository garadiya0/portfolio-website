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
          alt={props.ProjectLogoAlt}
        />

        <span className={styles.Info}>
          <p className={styles.Project_Name}>{props.ProjectName}</p>
          <p className={styles.Project_Desc}>{props.ProjectDesc}</p>

          <div className={styles.Link}>
            <span className={`${styles.Site_Name}`}>
              <Link
                className="Underline_Eff"
                target="_blank"
                href={props.ProjectLiveLink}
              >
                {props.ProjectLiveLinkName}
              </Link>
              <Image
                src="/icons/link_arrow.svg"
                width={20}
                height={20}
                alt="link arrow icon"
              />
            </span>
            <span className={`${styles.Github_Repo}`}>
              <Image
                src={"/icons/github.svg"}
                width={24}
                height={24}
                alt="github icon"
              />
              <Link
                className="Underline_Eff"
                target="_blank"
                href={props.ProjectGithubURL}
              >
                {props.ProjectGithubRepo}
              </Link>
              <Image
                src="/icons/link_arrow.svg"
                width={20}
                height={20}
                alt="link arrow icon"
              />
            </span>
          </div>
        </span>
      </div>
    </section>
  );
};

export default ProjectCard;
