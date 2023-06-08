import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Projects.module.css";
import Navigation from "@/components/NavigationBar/Navigation";
import ProjectDetailCard from "@/components/ProjectDetailCard/ProjectDetailCard";
import Footer from "@/components/Footer/Footer";

const projects = () => {
  return (
    <>
      <Navigation currentPage="Projects" />
      <section className={styles.Main}>
        <div className={styles.Container}>
          <h1>PROJECTS 🛠</h1>
          <ProjectDetailCard
            ProjectImg="https://user-images.githubusercontent.com/110885026/244479286-f48a7069-523b-4608-a1c2-b553382e4ae3.png"
            ProjectImgAlt="linkfy homepage"
            ProjectName="Linkfy"
            ProjectDesc="Linkfy allows you to create shortened URLs for clean sharing! Built with Next.js as a frontend and fireabse as a backend."
            ProjectLiveLink="https://linkfy.vercel.app/"
            ProjectLiveLinkName="linkfy.vercel.app"
            ProjectGithubURL="https://github.com/garadiya0/linkfy"
            ProjectGithubRepo="garadiya0/linkfy"
          />

          <ProjectDetailCard
            ProjectImg="https://user-images.githubusercontent.com/110885026/244510218-f93ea468-b082-4f2f-b3bf-7e7a8bdd88e2.png"
            ProjectName="Protonn - Get Started Now!"
            ProjectImgAlt="Polyverse Illustration home img"
            ProjectDesc="A demo landing page for a SAAS company - Protonn which helps other business grow. Built with HTML & CSS only."
            ProjectLiveLink="https://get-protonn.netlify.app/"
            ProjectLiveLinkName="get-protonn.netlify.app"
            ProjectGithubURL="https://github.com/garadiya0/protonn"
            ProjectGithubRepo="garadiya0/protonn"
          />

          <ProjectDetailCard
            ProjectImg="https://user-images.githubusercontent.com/110885026/229995247-6ecf2b7d-56e3-43f9-9285-019ce60c29b5.png"
            ProjectName="Task Master"
            ProjectImgAlt="Task-Master App"
            ProjectDesc="A simple task manager app which have all basic functionality! Built with React.js as a frontend and Local Storage API."
            ProjectLiveLink="https://task-master-01.web.app/"
            ProjectLiveLinkName="task-master-01.web.app"
            ProjectGithubURL="https://github.com/garadiya0/task-master"
            ProjectGithubRepo="garadiya0/task-master"
          />

          <ProjectDetailCard
            ProjectImg="https://user-images.githubusercontent.com/110885026/244514353-6cc6f4e2-4349-4eb5-8b0e-1b476cb1c384.png"
            ProjectName="Notely"
            ProjectImgAlt="notely screenshot"
            ProjectDesc="Basic Command-Line Notes Application that have basic functionality like add, remove, read and list notes. Built with Node.js and Yargs."
            ProjectLiveLink="https://drive.google.com/file/d/1AnmpirBYG0FKQ_hgdkubaRCQ0m95LAuu/view"
            ProjectLiveLinkName="demo-video"
            ProjectGithubURL="https://github.com/garadiya0/notely"
            ProjectGithubRepo="garadiya0/notely"
          />

          <ProjectDetailCard
            ProjectImg="https://user-images.githubusercontent.com/110885026/230176185-b73fa63b-46fa-40ed-b347-b321e7e5b123.png"
            ProjectName="Polyverse Illustration"
            ProjectImgAlt="Polyverse Illustration home img"
            ProjectDesc="A demo landing page for a 3D Illustration website showcasing 3D illustrations across various categories built with HTML & CSS only."
            ProjectLiveLink="https://polyverse.netlify.app/"
            ProjectLiveLinkName="polyverse.netlify.app"
            ProjectGithubURL="https://github.com/garadiya0/polyverse-illustration"
            ProjectGithubRepo="garadiya0/polyverse-illustration"
          />

          <Link
            href={"https://github.com/garadiya0"}
            className={styles.ViewGithub}
          >
            <h3>
              View More on GitHub
              <Image
                className={styles.NextArrowImg}
                src={"/NextArrowIcon.svg"}
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
