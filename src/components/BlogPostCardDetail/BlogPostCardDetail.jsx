import React from "react";
import Link from "next/link";
import styles from "./BlogPostCardDetail.module.css";

const BlogPostCardDetail = (props) => {
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
      <p className={styles.Blog_SubHeading}>{props.BlogSubHeading}</p>
      <span className={styles.Blog_Desc}>
        <p>{props.Date}</p>&nbsp;/&nbsp;<p>{`${props.ReadTime} min read`}</p>
      </span>
    </Link>
  );
};

export default BlogPostCardDetail;
