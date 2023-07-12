import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  // USEEFFECT FOR TOP-LOADING-BAR
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <title>Himanshu Garadiya | Developer</title>
        <meta
          name="description"
          content="Personal Portfolio of Himanshu Garadiya"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingBar
        color="rgb(180, 130, 251)"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => {
          setProgress(0);
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
