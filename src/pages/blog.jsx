import React from "react";
import Navigation from "@/components/NavigationBar/Navigation";
import BlogPostCardDetail from "@/components/BlogPostCardDetail/BlogPostCardDetail";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Blog.module.css";
import Footer from "@/components/Footer/Footer";

const blog = () => {
  return (
    <>
      <Navigation currentPage="Blog" />
      <section className={styles.Main}>
        <h1>BLOGS</h1>
        <div className={styles.Container}>
          
          <BlogPostCardDetail
            BlogLink="https://medium.com/@garadiya0/the-only-article-youll-need-to-work-with-local-storage-in-javascript-f33d4a1c84e"
            BlogImg="/temp/blogpostimg.webp"
            BlogImgAlt="img"
            BlogTitle="The only article you’ll need to work with Local Storage in JavaScript"
            BlogSubHeading="If you’ve come here to read this article about local storage, then you probably know tidbits of localStorage. But even if you don’t, no problem, we’ve got you covered! In this article, we’ll learn what it is, how to use it efficie..."
            Date="25 May, 2023"
            ReadTime="5"
          />

          <BlogPostCardDetail
            BlogLink="https://medium.com/@garadiya0/how-to-host-a-react-app-using-firebase-7ebf1c4e27fa"
            BlogImg="/temp/blogpostimg_2.webp"
            BlogImgAlt="img"
            BlogTitle="How to host a React-App using Firebase"
            BlogSubHeading="ReactJS, also known as React, is a popular JavaScript library for building user interfaces. It was developed by Facebook and released in 2013. React allows developers to create reusable UI components that efficient..."
            Date="07 June, 2023"
            ReadTime="4"
          />

          {/* <BlogPostCardDetail
            BlogLink="https://medium.com/@garadiya0/which-package-manager-to-choose-for-your-next-javascript-project-13eab214a05c"
            BlogImg="/temp/blogpostimg_3.webp"
            BlogImgAlt="img"
            BlogTitle="Which package manager to choose for your next javascript project?"
            BlogSubHeading="What is a package manager? In the context of JavaScript, a package manager allows developers to easily install, manage, and distribute JavaScript modules or libraries for both server-side and client-side..."
            Date="12 June, 2023"
            ReadTime="3"
          /> */}
        </div>
        <Link
          href={"https://medium.com/@garadiya0"}
          className={styles.ViewMedium}
        >
          <h3>
            View More on Medium
            <Image
              className={styles.NextArrowImg}
              src={"/icons/next_arrow.svg"}
              width={28}
              height={28}
              alt="next arrow icon"
            />
          </h3>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default blog;
