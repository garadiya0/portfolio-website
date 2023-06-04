import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const TWITTER_URL = "https://twitter.com/garadiya0";
  const GITHUB_URL = "https://github.com/garadiya0/";
  const INSTAGRAM_URL = "https://www.instagram.com/codexhimanshu/";
  const HASHNODE_URL = "";
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
              17 y/o • Fullstack Web Developer • Tech Enthusiast • Design
              Agnostic
            </p>

            <p>
              As a full-stack web developer, I'm constantly exploring new
              technologies. Proficient in HTML, CSS, JavaScript, Next.js,
              Firebase, and MySQL. I also enjoy sharing my knowledge through
              writing on Hashnode and Twitter.
            </p>
          </div>
          <div className={styles.Right_Main}>
            <img src="/pfp.png" alt="profile picture" width={"250"} />
          </div>
        </section>

        <section className={styles.Socials}>
          <ul>
            <Link
              className={`${styles.Social_Twitter} Items`}
              href={TWITTER_URL}
            >
              <li>
                <Image
                  src="/twitter.svg"
                  alt="twitter icon"
                  width={25}
                  height={25}
                />
              </li>
            </Link>

            <Link className={`${styles.Social_Github} Items`} href={GITHUB_URL}>
              <li>
                <Image
                  width={29}
                  height={29}
                  src="/github.svg"
                  alt="github icon"
                />
              </li>
            </Link>

            <Link
              className={`${styles.Social_Insta} Items`}
              href={INSTAGRAM_URL}
            >
              <li>
                <Image
                  width={29}
                  height={29}
                  src="/instagram.svg"
                  alt="instagram icon"
                />
              </li>
            </Link>

            <Link
              className={`${styles.Social_Hashnode} Items`}
              href={HASHNODE_URL}
            >
              <li>
                <Image
                  width={28}
                  height={28}
                  src="/hashnode.svg"
                  alt="hashnode icon"
                />
              </li>
            </Link>
          </ul>
        </section>
      </section>
    </>
  );
}
