import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import SocialWidgets from "@/components/SocialWidgets/SocialWidgets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Himanshu Garadiya | Developer</title>
        <meta
          name="description"
          content="Personal Portfolio of Himanshu Garadiya"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.Page}>
        <section className={styles.Main}>
          <div className={styles.Left_Main}>
            <h1>Hey! I'm Himanshu 👋</h1>
            <p>
              17 y/o • Self Taught Web Developer • Tech Enthusiast • Design
              Agnostic
            </p>

            <p>
              I'm a web developer, and constantly exploring new technologies.
              Proficient in HTML, CSS, JavaScript, Next.js, Firebase, and MySQL.
              I also enjoy sharing my knowledge through writing on Hashnode and
              Twitter.
            </p>
          </div>
          <div className={styles.Right_Main}>
            <img src="/pfp.png" alt="profile picture" width={"250"} />
          </div>
        </section>

        {/* TWITTER | GITHUB | INSTA | HASHNODE */}
        <SocialWidgets />

        <section className={styles.Project_Section}>
          <h1>PROJECTS</h1>

          <ProjectCard />
        </section>
      </section>
    </>
  );
}
