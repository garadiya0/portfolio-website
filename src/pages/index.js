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

          <ProjectCard
            ProjectLogo="https://raw.githubusercontent.com/garadiya0/linkfy/main/public/link.svg"
            LogoAltText="linkfy logo"
            ProjectName="Linkfy"
            ProjectDesc="Linkfy allows you to create shortened URLs for clean sharing ✨"
            LiveLink="https://linkfy.vercel.app/"
            LiveLinkName="linkfy.vercel.app"
            GithubRepoURL="https://github.com/garadiya0/linkfy"
            GithubRepoName="garadiya0/linkfy"
          />

          <ProjectCard
            ProjectLogo="https://raw.githubusercontent.com/garadiya0/protonn/main/assets/logo.webp"
            LogoAltText="protonn logo"
            ProjectName="Protonn"
            ProjectDesc="A demo landing page for a SAAS company"
            LiveLink="https://get-protonn.netlify.app/"
            LiveLinkName="get-protonn.netlify.app"
            GithubRepoURL="https://github.com/garadiya0/protonn"
            GithubRepoName="garadiya0/protonn"
          />

          <ProjectCard
            ProjectLogo="https://raw.githubusercontent.com/garadiya0/polyverse-illustration/main/assets/favicon.png"
            LogoAltText="polyverse logo"
            ProjectName="Polyverse Illustration"
            ProjectDesc="Landing page showcasing 3D illustrations across various categories"
            LiveLink="https://polyverse.netlify.app/"
            LiveLinkName="polyverse.netlify.app"
            GithubRepoURL="https://github.com/garadiya0/polyverse-illustration/"
            GithubRepoName="garadiya0/polyverse-illustration"
          />

          <Link href={"/projects"} className={styles.View_Project}>
            <h3>
              View All Project
              <Image
                className={styles.NextArrowImg}
                src={"/NextArrowIcon.svg"}
                width={28}
                height={28}
                alt="next arrow icon"
              />
            </h3>
          </Link>
        </section>
      </section>
    </>
  );
}
