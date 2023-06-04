import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Left_Nav}>
        <Link href={"/"}>~</Link>
      </div>
      <div className={styles.Right_Nav}>
        <ul className={styles.List}>
          <Link href={"/"} className={`${styles.Items} highlight`}>
            <li>Home</li>
          </Link>
          <Link href={"/blog"} className={`${styles.Items} highlight`}>
            <li>Blog</li>
          </Link>
          <Link href={"/projects"} className={`${styles.Items} highlight`}>
            <li>Projects</li>
          </Link>
          <Link href={"/guestbook"} className={`${styles.Items} highlight`}>
            <li>Guestbook</li>
          </Link>
          <Link href={"/reach_out"} className={`${styles.Items} highlight`}>
            <li>Reach Out</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
