import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import dynamic from "next/dynamic";

// Hero images
import Hero1 from "@/public/images/heroes/as-2.jpg";
import Hero2 from "@/public/images/heroes/medals.jpg";
import Hero3 from "@/public/images/heroes/certificate.jpg";

// Partner images
import Partner1 from "@/public/images/partners/acro-companion.png";
import Partner2 from "@/public/images/partners/BFSA.png";
import Partner3 from "@/public/images/partners/biskvitka.jpg";
import Partner4 from "@/public/images/partners/G.png";
import Partner5 from "@/public/images/partners/ksa-ivan-stoichev.jpeg";
import Partner6 from "@/public/images/partners/logo-BW.svg";
import Partner7 from "@/public/images/partners/logo-verginiya.jpg";
import Partner8 from "@/public/images/partners/S.png";
import Partner9 from "@/public/images/partners/biskvitka-2.jpg";
import Partner10 from "@/public/images/partners/star-text.png";

const FacebookFeed = dynamic(
  () => import("../components/FacebookFeed"),
  { ssr: false }      // <-- НЯМА SSR за този компонент
);

export default function Home() {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackgroundSlider}>
          <div className={`${styles.bgSlide} ${styles.slide1}`}>
            <Image
              src={Hero1}
              alt="Hero Background 1"
              fill
              style={{ objectFit: 'cover', opacity: 0.21 }}
              priority
            />
          </div>
          <div className={`${styles.bgSlide} ${styles.slide2}`}>
            <Image
              src={Hero2}
              alt="Hero Background 2"
              fill
              style={{ objectFit: 'cover', opacity: 0.21 }}
              priority
            />
          </div>
          <div className={`${styles.bgSlide} ${styles.slide3}`}>
            <Image
              src={Hero3}
              alt="Hero Background 3"
              fill
              style={{ objectFit: 'cover', opacity: 0.21 }}
              priority
            />
          </div>

          <div className={styles.heroContent}>
            <p className={`montserrat-SemiBold-600-34 ${styles.heroElement} ${styles.heroElement1}`}>Добре дошли в</p>
            <h1 className={`montserrat-ExtraBold-title ${styles.titleShiny} ${styles.heroElement} ${styles.heroElement2}`}>"Акро Старс"</h1>
            <p className={`subtitle montserrat-SemiBold-600-34 ${styles.heroElement} ${styles.heroElement3}`}>Клуб по спортна акробатика с голямо сърце</p>
            <p className={`subtitle montserrat-ExtraBold-title welcome ${styles.heroElement} ${styles.heroElement4}`}>
              Заповядайте в нашето семейство – нека децата ви се докоснат до
              <br />
              красотата на акробатиката и намерят своето вдъхновение!
            </p>
            <br />
            <Link href="/about" className={`${styles.fancyBtn} ${styles.heroElement} ${styles.heroElement5}`}>
              Научи повече <span>→</span>
            </Link>
          </div>

          {/* MINI Facebook card в хиро-то */}
          <div className={`${styles.heroFbCard} ${styles.heroElement} ${styles.heroElement6}`}>
            <div className={styles.heroFbHeaderRow}>
              <div className={styles.heroFbLogoCircle}>
                <span className={styles.heroFbLogoLetter}>f</span>
              </div>
              {/*<span className={styles.heroFbLabel}>Facebook</span>*/}
              <span className={styles.heroFbPunchline}>
                Виж тренировки, усмивки и медали в реално време.
              </span>
            </div>

            <Link href="#facebook" className={styles.heroFbLink}>
              Facebook <span>→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* What we offer / 3 cards */}
      <section className={styles.featuresSection}>
        <h2 className={`montserrat-ExtraBold-title ${styles.featuresTitle}`}>
          Какво ще открият децата в „Акро Старс“?
        </h2>

        <div className={styles.featuresGrid}>
          <article className={styles.featureCard}>
            <h3 className={`montserrat-SemiBold-600-34 ${styles.featureHeading}`}>
              Движение и сила
            </h3>
            <p className={styles.featureText}>
              Забавни тренировки по спортна акробатика, които развиват гъвкавост,
              координация и сила, без децата да усещат, че „спортуват насила“.
            </p>
          </article>

          <article className={styles.featureCard}>
            <h3 className={`montserrat-SemiBold-600-34 ${styles.featureHeading}`}>
              Екип и приятели
            </h3>
            <p className={styles.featureText}>
              Малки групи, подкрепяща среда и треньори, които учат децата да си вярват,
              да си помагат и да се радват на успехите заедно.
            </p>
          </article>

          <article className={styles.featureCard}>
            <h3 className={`montserrat-SemiBold-600-34 ${styles.featureHeading}`}>
              Сцена и медали
            </h3>
            <p className={styles.featureText}>
              Възможност за участия в състезания, фестивали и демонстрации – децата
              блестят на килима, а родителите се гордеят от трибуните.
            </p>
          </article>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section id="facebook" className={styles.facebookSection}>
        <section className={styles.followSection}>
          <div className={styles.followLeft}>
            <FacebookFeed />
          </div>
          <div className={styles.followRight}>
            {/* снимка с децата или кратък текст */}
          </div>
        </section>
      </section>

      {/*<div className={styles.mainFbFeed}>*/}
      {/*  <div className={styles.fbBox}>*/}
      {/*    <div id="fb-root"></div>*/}
      {/*    <div*/}
      {/*      className="fb-page"*/}
      {/*      data-href="https://www.facebook.com/profile.php?id=100063250867590"*/}
      {/*      data-tabs="timeline"*/}
      {/*      data-width="600"*/}
      {/*      data-height="480"*/}
      {/*      data-small-header="true"*/}
      {/*      data-adapt-container-width="true"*/}
      {/*      data-hide-cover="false"*/}
      {/*      data-show-facepile="false"*/}
      {/*    >*/}
      {/*      <blockquote cite="https://www.facebook.com/profile.php?id=100063250867590" className="fb-xfbml-parse-ignore">*/}
      {/*        <a href="https://www.facebook.com/profile.php?id=100063250867590">СКА "Акро Старс"</a>*/}
      {/*      </blockquote>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={`montserrat-ExtraBold-title ${styles.acroTrails}`}>*/}
      {/*    По следите <br />*/}
      {/*    на отбора*/}
      {/*  </div>*/}
      {/*  <div className={styles.fbFeedImageWrapper}>*/}
      {/*    <Image*/}
      {/*      src="/images/fb-feed-background.png"*/}
      {/*      alt="Следи отбора във Facebook"*/}
      {/*      width={400}*/}
      {/*      height={400}*/}
      {/*      className={`${styles.fbFeedImage} ${styles.pulseHover}`}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Partners Section */}
      <div className="partners-bar-gradient"></div>
      <div className="main-content">
        <div className={styles.partnersBar}>
          <div className={styles.fadeLeft}></div>
          <div className={styles.partnersTrack}>
            {[...Array(2)].map((_, repeatIndex) => (
              <React.Fragment key={repeatIndex}>
                <Image src={Partner1} alt="partner 1" width={100} height={50} />
                <Image src={Partner2} alt="partner 2" width={100} height={50} />
                <Image src={Partner3} alt="partner 3" width={100} height={50} />
                <Image src={Partner4} alt="partner 4" width={100} height={50} />
                <Image src={Partner5} alt="partner 5" width={100} height={50} />
                <Image src={Partner6} alt="partner 6" width={100} height={50} />
                <Image src={Partner7} alt="partner 7" width={100} height={50} />
                <Image src={Partner8} alt="partner 8" width={100} height={50} />
                <Image src={Partner9} alt="partner 9" width={100} height={50} />
                <Image src={Partner10} alt="partner 10" width={100} height={50} />
              </React.Fragment>
            ))}
          </div>
          <div className={styles.fadeRight}></div>
        </div>
      </div>

      {/* Facebook SDK Script */}
      {/*<script*/}
      {/*  async*/}
      {/*  defer*/}
      {/*  crossOrigin="anonymous"*/}
      {/*  src="https://connect.facebook.net/bg_BG/sdk.js#xfbml=1&version=v19.0"*/}
      {/*  nonce="abcd1234"*/}
      {/*/>*/}
    </div>
  );
}
