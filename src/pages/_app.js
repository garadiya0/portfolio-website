import "@/styles/globals.css";
import Navigation from "@/components/NavigationBar/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
