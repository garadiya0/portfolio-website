import React, { useEffect, useState } from "react";
import Navigation from "@/components/NavigationBar/Navigation";
import BlogPostCardDetail from "@/components/BlogPostCardDetail/BlogPostCardDetail";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import styles from "@/styles/Blog.module.css";
import Footer from "@/components/Footer/Footer";
import getRelativeDate from "@/utils/getRelativeDate";
import getSummary from "@/utils/getSummary";

const blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      await axios
        .get("/api/getBlogs")
        .then((res) => {
          setBlogs(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchBlogs();
  }, []);

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
                  key={article._id}
                  BlogLink={article.article_link}
                  BlogImg={article.blog_img_url}
                  BlogImgAlt={article.blog_img_alt}
                  BlogTitle={article.blog_title}
                  BlogSubHeading={getSummary(article.blog_summary)}
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
};

export default blog;
