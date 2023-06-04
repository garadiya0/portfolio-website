import Head from "next/head";
import styles from "@/styles/Home.module.css";

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

      <section className={styles.Main}>
        <div className={styles.Left_Main}>
          <h1>Hey! I'm Himanshu 👋</h1>
          <p>
            17 y/o • Fullstack Web Developer • Tech Enthusiast • Design Agnostic
          </p>

          <p>
            I'm a fullstack web developer, currently looking into learning new
            technologies. Proficient in HTML, CSS, JavaScript, NextJS, Firebase
            & MySQL. I've recently started writing on Hashnode & Twitter.
          </p>
        </div>
        <div className={styles.Right_Main}></div>
      </section>
    </>
  );
}
