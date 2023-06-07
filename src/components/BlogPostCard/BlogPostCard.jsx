import React from "react";
import Link from "next/link";
import styles from "./BlogPostCard.module.css";

const BlogPostCard = (props) => {
  return (
    <Link href={props.BlogLink} className={styles.BlogPostCard}>
      <img
        className={styles.Blog_Img}
        src={props.BlogImg}
        width={"350px"}
        height={"auto"}
        alt={props.BlogImgAlt}
      />
      <p className={styles.Blog_Title}>{props.BlogTitle}</p>
      <span className={styles.Blog_Desc}>
        <p>{props.Date}</p>&nbsp;/&nbsp;<p>{`${props.readTime} min read`}</p>
      </span>
    </Link>
  );
};

export default BlogPostCard;
