import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Projects.module.css";
import Navigation from "@/components/NavigationBar/Navigation";
import ProjectDetailCard from "@/components/ProjectDetailCard/ProjectDetailCard";
import Footer from "@/components/Footer/Footer";
import { getDocs, collection } from "firebase/firestore/lite";
import { database } from "@/lib/firebase";

export async function getStaticProps() {
  const project_cols = collection(database, "projects");
  const project_snapshot = await getDocs(project_cols);

  const projects = project_snapshot.docs.map((doc) => doc.data());

  projects.reverse();

  return {
    props: {
      projects,
    },
  };
}

const projects = (props) => {
  const [projects, setProjects] = useState(props.projects);

  return (
    <>
      <Navigation currentPage="Projects" />
      <section className={styles.Main}>
        <div className={styles.Container}>
          <h1>PROJECTS 🛠</h1>

          <div className={styles.Container}>
            {projects.length === 0 ? (
              <Loading size="xl" type="points" color={"secondary"} />
            ) : (
              projects.map((project) => {
                return (
                  <ProjectDetailCard
                    key={project.id}
                    ProjectImg={project.project_img_url}
                    ProjectImgAlt={project.project_img_alt}
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

          <Link
            href={"https://github.com/garadiya0"}
            className={styles.ViewGithub}
          >
            <h3>
              View More on GitHub
              <Image
                className={styles.NextArrowImg}
                src={"/icons/next_arrow.svg"}
                width={28}
                height={28}
                alt="next arrow icon"
              />
            </h3>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default projects;