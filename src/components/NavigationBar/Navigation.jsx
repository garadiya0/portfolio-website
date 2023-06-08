import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

const Navigation = (props) => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Left_Nav}>
        <Link href={"/"}>~</Link>
        {props.currentPage && (
          <>
            <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <Link href={""} className={styles.current_page}>
              {props.currentPage}
            </Link>
          </>
        )}
      </div>

      <div className={styles.Right_Nav}>
        <ul className={styles.List}>
          <Link
            href={"/"}
            className={
              props.currentPage === undefined
                ? `${styles.Items} ${styles.active_nav}`
                : `${styles.Items}`
            }
          >
            <li>Home</li>
          </Link>
          <Link
            href={"/about"}
            className={
              props.currentPage === "About"
                ? `${styles.Items} ${styles.active_nav}`
                : `${styles.Items}`
            }
          >
            <li>About Me</li>
          </Link>
          <Link
            href={"/blog"}
            className={
              props.currentPage === "Blog"
                ? `${styles.Items} ${styles.active_nav}`
                : `${styles.Items}`
            }
          >
            <li>Blog</li>
          </Link>
          <Link
            href={"/projects"}
            className={
              props.currentPage === "Projects"
                ? `${styles.Items} ${styles.active_nav}`
                : `${styles.Items}`
            }
          >
            <li>Projects</li>
          </Link>
          <Link
            href={"/guestbook"}
            className={
              props.currentPage === "Guestbook"
                ? `${styles.Items} ${styles.active_nav}`
                : `${styles.Items}`
            }
          >
            <li>Guestbook</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
