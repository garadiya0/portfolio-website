import React from "react";
import styles from "@/styles/Guestbook.module.css";
import Giscus from "@giscus/react";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/NavigationBar/Navigation";

const guestbook = () => {
  return (
    <>
      <Navigation currentPage="Guestbook" />
      <section className={styles.Main}>
        <h1>GUESTBOOK</h1>
        <p>Leave a message :)</p>

        <div className={styles.Container}>
          <Giscus
            key={"Comments"}
            repo="garadiya0/garadiya0"
            repoId="R_kgDOHymOVw"
            category="General"
            mapping="url"
            reactionsEnabled="1"
            emitMetadata="0"
            theme="dark"
            async
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default guestbook;
