import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPostCard.module.css";

const BlogPostCard = () => {
  return (
    <Link href={'/'} className={styles.BlogPostCard}>
      <img
        className={styles.Blog_Img}
        src={"/blogpostimg.webp"}
        width={'350px'}
        height={"auto"}
        alt="Local Storage in JavaScript"
      />
      <p className={styles.Blog_Title}>
        The only article you’ll need to work with Local Storage in JavaScript.
      </p>
      <span className={styles.Blog_Desc}>
        <p>May 25th, 2023</p>&nbsp;/&nbsp;<p>5 min read</p>
      </span>
    </Link>
  );
};

export default BlogPostCard;
