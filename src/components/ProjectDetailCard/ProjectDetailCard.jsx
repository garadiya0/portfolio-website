import React from "react";
import styles from "./ProjectDetailCard.module.css";
import Link from "next/link";
import Image from "next/image";

const ProjectDetailCard = (props) => {
  return (
    <section className={styles.Main}>
      <Link className={styles.ProjectImgLink} href={""}>
        <img
          src={props.ProjectImg}
          className={styles.Img}
          width={300}
          height={168}
          alt={props.ProjectImgAlt}
        />
      </Link>
      <div className={styles.ProjectDetails}>
        <div>
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
                alt="upwards arrow icon"
              />
            </span>
          </div>
        </div>

        <div>
          <Link
            href={props.ProjectGithubURL}
            className={`${styles.LearnMore} Underline_Eff`}
          >
            <p>Learn More</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailCard;
