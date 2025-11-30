"use client";

import Script from "next/script";
import React from "react";
import styles from "../styles/Home.module.css";

export default function FacebookFeed() {
  return (
    <>
      <section className={styles.mainFbFeed}>
        <div className={`montserrat-ExtraBold-title ${styles.acroTrails}`}
             style={{ "--fb-bg-image": `url(${ThunderRightSecond.src})` } as React.CSSProperties}>
          По следите <br/>
          на отбора
        </div>

        <div className={styles.fbBox}>
          <div id="fb-root"></div>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=100063250867590"
            data-tabs="timeline"
            data-width="700"
            data-height="480"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/profile.php?id=100063250867590"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/profile.php?id=100063250867590">
                СКА &quot;Акро Старс&quot;
              </a>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Facebook SDK Script – с next/script */}
      <Script
        id="fb-sdk"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        src="https://connect.facebook.net/bg_BG/sdk.js#xfbml=1&version=v19.0"
      />
    </>
  );
}
