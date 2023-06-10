import React from "react";
import Link from "next/link";
import styles from "./BlogPostCardDetail.module.css";

const BlogPostCardDetail = (props) => {
  return (
    <Link
      href={
        "https://medium.com/@garadiya0/how-to-host-a-react-app-using-firebase-7ebf1c4e27fa"
      }
      className={styles.BlogPostCard}
    >
      <img
        className={styles.Blog_Img}
        src={"/blogpostimg_2.webp"}
        width={"350px"}
        height={"auto"}
        alt={"props.BlogImgAlt"}
      />
      <p className={styles.Blog_Title}>
        {"How to host a React-App using Firebase"}
      </p>
      <p className={styles.Blog_SubHeading}>
        {
          "ReactJS, also known as React, is a popular JavaScript library for building user interfaces. It was developed by Facebook and released in 2013. React allows developers to create reusable UI components that efficient..."
        }
      </p>
      <span className={styles.Blog_Desc}>
        <p>{"07 June, 2023"}</p>&nbsp;/&nbsp;<p>{`${"4"} min read`}</p>
      </span>
    </Link>
  );
};

export default BlogPostCardDetail;
