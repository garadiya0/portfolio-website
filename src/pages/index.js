import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import SocialWidgets from "@/components/SocialWidgets/SocialWidgets";
import Navigation from "@/components/NavigationBar/Navigation";
import getRelativeDate from "@/utils/getRelativeDate";
import { Loading } from "@nextui-org/react";
import { database } from "@/lib/firebase";
import { getDocs, collection } from "firebase/firestore/lite";

export async function getStaticProps() {
  // GETTING BLOGS FROM FIRESTORE
  const blogsCollection = collection(database, "blogs");
  const blogsSnapshot = await getDocs(blogsCollection);

  const blogs = blogsSnapshot.docs.map((doc) => doc.data());

  blogs.reverse();

  blogs.splice(2);

  // GETTING PROJECTS FROM FIRESTORE
  const project_cols = collection(database, "projects");
  const project_snapshot = await getDocs(project_cols);

  const projects = project_snapshot.docs.map((doc) => doc.data());

  projects.reverse();

  projects.splice(3);

  return {
    props: {
      blogs: blogs,
      projects: projects,
    },
  };
}

export default function Home(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const [projects, setProjects] = useState(props.projects);

  return (
    <>
      <Navigation />
      <section className={styles.Page}>
        <section className={styles.Main}>
          <div className={styles.Left_Main}>
            <h1>Hey! I'm Himanshu 👋</h1>
            <p>17 y/o • Self Taught Web Developer • Tech Enthusiast</p>

            <p>
              I'm a web developer, and constantly exploring new technologies.
              Proficient in HTML, CSS, JavaScript, Next.js, Firebase, and MySQL.
              I also enjoy sharing my knowledge through writing on Medium and
              Twitter.
            </p>
          </div>
          <div className={styles.Right_Main}>
            <img src="/pfp.webp" alt="profile picture" width={"250"} />
          </div>
        </section>

        {/* TWITTER | GITHUB | INSTA | HASHNODE */}
        <SocialWidgets center={false} />

        {/* PROJECTS SECTION  */}
        <section className={styles.Project_Section}>
          <h1>PROJECTS</h1>

          <div className={styles.Container}>
            {projects.length === 0 ? (
              <Loading size="xl" type="points" color={"secondary"} />
            ) : (
              projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    ProjectLogo={project.project_logo}
                    ProjectLogoAlt={project.project_img_alt}
                    ProjectName={project.project_name}
                    ProjectDesc={project.project_desc}
                    ProjectLiveLink={project.live_url}
                    ProjectLiveLinkName={project.live_url_name}
                    ProjectGithubURL={project.repo_url}
                    ProjectGithubRepo={project.repo_url_name}
                  />
                );
              })
            )}
          </div>

          <Link href={"/projects"} className={styles.View_Project}>
            <h3>
              View All Project
              <Image
                className={styles.NextArrowImg}
                src={"/icons/next_arrow.svg"}
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

          <div className={styles.row_1}>
            {blogs.length === 0 ? (
              <Loading size="xl" type="points" color={"secondary"} />
            ) : (
              blogs.map((article) => {
                return (
                  <BlogPostCard
                    key={article.id}
                    BlogImg={article.article_img_url}
                    BlogImgAlt={article.article_img_alt}
                    BlogTitle={article.article_title}
                    Date={getRelativeDate(article.published_date)}
                    readTime={article.read_time}
                    BlogLink={article.article_url}
                  />
                );
              })
            )}
          </div>

          {/* <div className="row-2">
            <BlogPostCard />
            <BlogPostCard />
          </div> */}

          <Link href={"/blog"} className={styles.View_Project}>
            <h3>
              View All Blog Post
              <Image
                className={styles.NextArrowImg}
                src={"/icons/next_arrow.svg"}
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
              <img
                src={"/icons/link_arrow.svg"}
                height={20}
                width={20}
                alt="link arrow icon"
              />
            </Link>
          </p>
        </section>

        <Footer />
      </section>
    </>
  );
}
