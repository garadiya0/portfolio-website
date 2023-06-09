import React from "react";
import styles from "@/styles/About.module.css";
import Navigation from "@/components/NavigationBar/Navigation";

const about = () => {
  return (
    <>
      <Navigation currentPage="About" />
      <section className={styles.Main}>
        <h1>ABOUT ME</h1>
      </section>
    </>
  );
};

export default about;
