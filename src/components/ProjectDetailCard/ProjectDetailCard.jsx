import React from "react";
import styles from "./ProjectDetailCard.module.css";
import Link from "next/link";
import Image from "next/image";

const ProjectDetailCard = (props) => {
  return (
    <section className={styles.Main}>
      <Link className={styles.ProjectImgLink} href={""}>
        <Image
          src={
            "https://user-images.githubusercontent.com/110885026/244479286-f48a7069-523b-4608-a1c2-b553382e4ae3.png"
          }
          className={styles.Img}
          width={300}
          height={168}
          alt="linkfy logo"
        />
      </Link>
      <div className={styles.ProjectDetails}>
        <div>
          <p className={styles.Project_Name}>Linkfy</p>
          <p className={styles.Project_Desc}>
            Linkfy allows you to create shortened URLs for clean sharing ✨
          </p>

          <div className={styles.Link}>
            <span className={`${styles.Site_Name}`}>
              <Link
                className="Underline_Eff"
                target="_blank"
                href={"https://linkfy.vercel.app/"}
              >
                {"linkfy.vercel.app"}
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
                href={"https://github.com/garadiya0/linkfy"}
              >
                {"garadiya0/linkfy"}
              </Link>
              <Image
                src="/arrow.svg"
                width={20}
                height={20}
                alt="upwards arrow icon"
              />
            </span>
          </div>
        </div>

        <div>
          <Link
            href={"https://github.com/garadiya0/linkfy"}
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
