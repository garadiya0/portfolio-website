import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import SocialWidgets from "@/components/SocialWidgets/SocialWidgets";

export default function Home() {
  return (
    <>
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
              I also enjoy sharing my knowledge through writing on Medium and
              Twitter.
            </p>
          </div>
          <div className={styles.Right_Main}>
            <img src="/pfp.png" alt="profile picture" width={"250"} />
          </div>
        </section>

        {/* TWITTER | GITHUB | INSTA | HASHNODE */}
        <SocialWidgets center={false} />

        {/* PROJECTS SECTION  */}
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

        {/* BLOGS SECTION */}
        <section className={styles.Blog_Section}>
          <h1>BLOG POSTS</h1>

          <div className="row-1">
            <BlogPostCard />
            <BlogPostCard />
          </div>
          <div className="row-2">
            <BlogPostCard />
            <BlogPostCard />
          </div>

          <Link href={"/blog"} className={styles.View_Project}>
            <h3>
              View All Blog Post
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

        {/* CONTACT SECTION */}
        <section className={styles.Contact_Section}>
          <h1>CONTACT ME</h1>
          <p>
            Feel free to send me an email at
            <Link
              href={"emailto:himanshup1308@gmail.com"}
              className={`${styles.EmailID} Underline_Eff`}
            >
              &nbsp;himanshup1308@gmail.com
            </Link>
            <Image src={"/arrow.svg"} height={20} width={20} alt="arrow icon" />
          </p>
        </section>

        <Footer />
      </section>
    </>
  );
}
