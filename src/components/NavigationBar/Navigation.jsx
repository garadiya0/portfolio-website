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
            className={`nav_active ${styles.Items} Highlight_Eff`}
          >
            <li>Home</li>
          </Link>
          <Link href={"/blog"} className={`${styles.Items} Highlight_Eff`}>
            <li>Blog</li>
          </Link>
          <Link href={"/projects"} className={`${styles.Items} Highlight_Eff`}>
            <li>Projects</li>
          </Link>
          <Link
            href={"/guestbook"}
            className={`nav_active ${styles.Items} Highlight_Eff`}
          >
            <li>Guestbook</li>
          </Link>
          <Link href={"/reach_out"} className={`${styles.Items} Highlight_Eff`}>
            <li>Reach Out</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
