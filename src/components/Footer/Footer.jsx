import React from "react";
import styles from "./Footer.module.css";
import SocialWidgets from "../SocialWidgets/SocialWidgets";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const TWITTER_LINK = "https://twitter.com/garadiya0";
  return (
    <section className={styles.Footer}>
      <SocialWidgets center={true} />
      <p>
        Made by{" "}
        <Link
          href={TWITTER_LINK}
          target="_blank"
          className={`Underline_Eff ${styles.Link}`}
        >
          &nbsp;Himanshu Garadiya
        </Link>{" "}
        <Image
          src="/arrow.svg"
          width={20}
          height={20}
          alt="upwards arrow icon"
        />
      </p>
    </section>
  );
};

export default Footer;
