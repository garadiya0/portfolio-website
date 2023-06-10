import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import Navigation from "@/components/NavigationBar/Navigation";

const about = () => {
  return (
    <>
      <Navigation currentPage="About" />
      <section className={styles.Main}>
        <h1>ABOUT ME</h1>
        <div className={styles.Container}>
          <span>
            I'm{" "}
            <Link href={"https://linktr.ee/garadiya0"} className={``}>
              Himanshu Garadiya
            </Link>
            , 17-year-old with just a laptop. Although I'm still figuring things
            out,but I have a deep passion for programming. I'm a self-taught web
            developer, and I dabble in a bit of design too.
          </span>
          <span>
            My journey began when I delved into Java out of pure curiosity and
            soon started web development. Over the past two years, I've learned
            HTML, CSS, JavaScript, Next.js, MySQL, Firebase, along with Git
            and&nbsp;
            <Link href={"https://github.com/garadiya0/"} className="">
              GitHub
            </Link>
            . I also have a little knowledge of Python, Express.js, and Node.js.
          </span>
          <span>
            Apart from my love for programming, I enjoy playing basketball,
            watching anime and movies, and even swimming. Hailing from Pune,
            India, I recently graduated from high school. I'm constantly
            building cool projects and you can find me very active on{" "}
            <Link
              className={`${styles.LinkEle}`}
              href={"https://twitter.com/garadiya0"}
            >
              Twitter{" "}
              <Image
                src={"/arrow.svg"}
                width={23}
                height={23}
                alt="arrow icon"
              />
            </Link>
          </span>
          <span>
            P.S I'm open to new opportunities, you can DM me on twitter or write
            me at{" "}
            <Link
              className={`${styles.LinkEle}`}
              href={"emailto:himanshup1308@gmail.com"}
            >
              {" "}
              himanshup1308@gmail.com
              <Image src="/arrow.svg" height={23} width={23} alt="arrow icon" />
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default about;
