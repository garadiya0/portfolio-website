import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material";
import styles from "./SocialWidgets.module.css";

const SocialWidgets = () => {
  const TWITTER_URL = "https://twitter.com/garadiya0";
  const GITHUB_URL = "https://github.com/garadiya0/";
  const INSTAGRAM_URL = "https://www.instagram.com/codexhimanshu/";
  const HASHNODE_URL = "";
  return (
    <section className={styles.Socials}>
      <ul>
        <Tooltip
          title="Twitter"
          placement="top"
          TransitionComponent={Zoom}
          arrow
        >
          <Link className={`${styles.Social_Twitter} Items`} href={TWITTER_URL}>
            <li>
              <Image
                src="/twitter.svg"
                alt="twitter icon"
                width={25}
                height={25}
              />
            </li>
          </Link>
        </Tooltip>

        <Tooltip
          title="Github"
          placement="top"
          TransitionComponent={Zoom}
          arrow
        >
          <Link className={`${styles.Social_Github} Items`} href={GITHUB_URL}>
            <li>
              <Image
                width={29}
                height={29}
                src="/github.svg"
                alt="github icon"
              />
            </li>
          </Link>
        </Tooltip>

        <Tooltip
          title="Instagram"
          placement="top"
          TransitionComponent={Zoom}
          arrow
        >
          <Link className={`${styles.Social_Insta} Items`} href={INSTAGRAM_URL}>
            <li>
              <Image
                width={29}
                height={29}
                src="/instagram.svg"
                alt="instagram icon"
              />
            </li>
          </Link>
        </Tooltip>

        <Tooltip
          title="Hashnode"
          placement="top"
          TransitionComponent={Zoom}
          arrow
        >
          <Link
            className={`${styles.Social_Hashnode} Items`}
            href={HASHNODE_URL}
          >
            <li>
              <Image
                width={28}
                height={28}
                src="/hashnode.svg"
                alt="hashnode icon"
              />
            </li>
          </Link>
        </Tooltip>
      </ul>
    </section>
  );
};

export default SocialWidgets;
