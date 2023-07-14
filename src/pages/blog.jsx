import React, { useEffect, useState } from "react";
import Navigation from "@/components/NavigationBar/Navigation";
import BlogPostCardDetail from "@/components/BlogPostCardDetail/BlogPostCardDetail";
import Link from "next/link";
import Image from "next/image";
import { Loading } from "@nextui-org/react";
import styles from "@/styles/Blog.module.css";
import Footer from "@/components/Footer/Footer";
import getRelativeDate from "@/utils/getRelativeDate";
import getSummary from "@/utils/getSummary";
import { database } from "@/lib/firebase";
import { getDocs, collection } from "firebase/firestore/lite";
import { Slide, Fade } from "react-reveal";

export async function getStaticProps() {
  const blogsCollection = collection(database, "blogs");
  const blogsSnapshot = await getDocs(blogsCollection);

  const blogs = blogsSnapshot.docs.map((doc) => doc.data());

  blogs.reverse();

  return {
    props: {
      blogs,
    },
  };
}

export default function blog(props) {
  // .TEMP HIDE, MED_05 ARTICLE
  const [blogs, setBlogs] = useState(
    props.blogs.filter((element) => {
      return element.id !== 5;
    })
  );

  return (
    <>
      <Navigation currentPage="Blog" />
      <section className={styles.Main}>
        <h1>BLOGS</h1>

        <div className={styles.Container}>
          {blogs.length === 0 ? (
            <Loading size="xl" type="points" color={"secondary"} />
          ) : (
            blogs.map((article) => {
              return (
                <BlogPostCardDetail
                  key={article.id}
                  BlogLink={article.article_url}
                  BlogImg={article.article_img_url}
                  BlogImgAlt={article.article_img_alt}
                  BlogTitle={article.article_title}
                  BlogSubHeading={getSummary(article.article_summary)}
                  Date={getRelativeDate(article.published_date)}
                  ReadTime={article.read_time}
                />
              );
            })
          )}
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
}
