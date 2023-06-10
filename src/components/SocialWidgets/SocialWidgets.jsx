import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material";
import styles from "./SocialWidgets.module.css";

const SocialWidgets = (props) => {
  const TWITTER_URL = "https://twitter.com/garadiya0";
  const GITHUB_URL = "https://github.com/garadiya0/";
  const INSTAGRAM_URL = "https://www.instagram.com/codexhimanshu/";
  const MEDIUM_URL = "https://medium.com/@garadiya0";

  const centerElementCSS = { display: "flex", justifyContent: "center" };

  return (
    <section
      className={styles.Socials}
      style={props.center ? centerElementCSS : {}}
    >
      <ul>
        <Link className={`${styles.Social_Twitter} Items`} href={TWITTER_URL}>
          <Tooltip
            title="Twitter"
            placement="top"
            TransitionComponent={Zoom}
            arrow
            PopperProps={{
              disablePortal: true,
              popperOptions: {
                positionFixed: true,
                modifiers: {
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "window", // where "window" is the boundary
                  },
                },
              },
            }}
          >
            <li>
              <Image
                src="/twitter.svg"
                alt="twitter icon"
                width={25}
                height={25}
              />
            </li>
          </Tooltip>
        </Link>

        <Link className={`${styles.Social_Github} Items`} href={GITHUB_URL}>
          <Tooltip
            title="Github"
            placement="top"
            TransitionComponent={Zoom}
            arrow
            PopperProps={{
              disablePortal: true,
              popperOptions: {
                positionFixed: true,
                modifiers: {
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "window", // where "window" is the boundary
                  },
                },
              },
            }}
          >
            <li>
              <Image
                width={29}
                height={29}
                src="/github.svg"
                alt="github icon"
              />
            </li>
          </Tooltip>
        </Link>

        <Link className={`${styles.Social_Insta} Items`} href={INSTAGRAM_URL}>
          <Tooltip
            title="Instagram"
            placement="top"
            TransitionComponent={Zoom}
            arrow
            PopperProps={{
              disablePortal: true,
              popperOptions: {
                positionFixed: true,
                modifiers: {
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "window", // where "window" is the boundary
                  },
                },
              },
            }}
          >
            <li>
              <Image
                width={29}
                height={29}
                src="/instagram.svg"
                alt="instagram icon"
              />
            </li>
          </Tooltip>
        </Link>

        <Link className={`${styles.Social_Medium} Items`} href={MEDIUM_URL}>
          <Tooltip
            title="Medium"
            placement="top"
            TransitionComponent={Zoom}
            arrow
            PopperProps={{
              disablePortal: true,
              popperOptions: {
                positionFixed: true,
                modifiers: {
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "window", // where "window" is the boundary
                  },
                },
              },
            }}
          >
            <li>
              <Image
                width={28}
                height={28}
                src="/medium.svg"
                alt="medium icon"
              />
            </li>
          </Tooltip>
        </Link>
      </ul>
    </section>
  );
};

export default SocialWidgets;
