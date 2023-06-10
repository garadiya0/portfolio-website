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
          <BlogPostCardDetail />
          <BlogPostCardDetail />
          <BlogPostCardDetail />
          <BlogPostCardDetail />
          <Link
            href={"https://medium.com/@garadiya0"}
            className={styles.ViewMedium}
          >
            <h3>
              View More on Medium
              <Image
                className={styles.NextArrowImg}
                src={"/NextArrowIcon.svg"}
                width={28}
                height={28}
                alt="next arrow icon"
              />
            </h3>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default blog;
