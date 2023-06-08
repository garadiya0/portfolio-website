import React from "react";
import styles from "@/styles/Projects.module.css";
import Navigation from "@/components/NavigationBar/Navigation";
import ProjectDetailCard from "@/components/ProjectDetailCard/ProjectDetailCard";

const projects = () => {
  return (
    <>
      <Navigation currentPage="Projects" />
      <section className={styles.Main}>
        <h1>PROJECTS ⬇</h1>
        <div className={styles.Container}>
          <ProjectDetailCard />
        </div>
      </section>
    </>
  );
};

export default projects;
