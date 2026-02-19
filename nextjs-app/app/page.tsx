import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

// Вместо import от "@/public/..." ползваме директни пътища към /public
const HERO_IMAGES = [
  "/images/heroes/as-2.jpg",
  "/images/heroes/medals.jpg",
  "/images/heroes/certificate.jpg",
];

// (ако после ги ползваш) Partner images като пътища
const PARTNER_IMAGES = [
  "/images/partners/acro-companion.png",
  "/images/partners/BFSA.png",
  "/images/partners/biskvitka.jpg",
  "/images/partners/G.png",
  "/images/partners/ksa-ivan-stoichev.jpeg",
  "/images/partners/logo-BW.svg",
  "/images/partners/logo-verginiya.jpg",
  "/images/partners/S.png",
  "/images/partners/biskvitka-2.jpg",
  "/images/partners/star-text.png",
];

// Например в Home.tsx
const announcements = [
  {
    id: 1,
    title: "Записване за нови групи",
    text: "Свободни места за деца 6–9 г. – понеделник и сряда от 18:00 ч.",
    isImportant: false,
    href: "/trainings",
  },
  {
    id: 2,
    title: "За състезателите",
    text: "Напомняме за медицинските прегледи до 15 ноември.",
    isImportant: true,
  },
  {
    id: 3,
    title: "Пробна тренировка",
    text: "Първата тренировка за нови деца е безплатна – запишете се от формата.",
    href: "/contact",
  },
];

const FacebookFeed = dynamic(() => import("../components/FacebookFeed"), { ssr: false });

export default function Home() {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackgroundSlider}>
          <div className={`${styles.bgSlide} ${styles.slide1}`}>
            <Image
              src={HERO_IMAGES[0]}
              alt="Hero Background 1"
              fill
              style={{ objectFit: "cover", opacity: 0.21 }}
              priority
              sizes="100vw"
            />
          </div>

          <div className={`${styles.bgSlide} ${styles.slide2}`}>
            <Image
              src={HERO_IMAGES[1]}
              alt="Hero Background 2"
              fill
              style={{ objectFit: "cover", opacity: 0.21 }}
              priority
              sizes="100vw"
            />
          </div>

          <div className={`${styles.bgSlide} ${styles.slide3}`}>
            <Image
              src={HERO_IMAGES[2]}
              alt="Hero Background 3"
              fill
              style={{ objectFit: "cover", opacity: 0.21 }}
              priority
              sizes="100vw"
            />
          </div>

          <div className={styles.heroContent}>
            <p className={`montserrat-SemiBold-600-34 ${styles.heroElement} ${styles.heroElement1}`}>
              Добре дошли в
            </p>

            <h1 className={`montserrat-ExtraBold-title ${styles.titleShiny} ${styles.heroElement} ${styles.heroElement2}`}>
              "Акро Старс"
            </h1>

            <p className={`subtitle montserrat-SemiBold-600-34 ${styles.heroElement} ${styles.heroElement3}`}>
              Клуб по спортна акробатика с голямо сърце
            </p>

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

              <span className={styles.heroFbPunchline}>Виж тренировки, усмивки и медали в реално време.</span>
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
            <h3 className={`montserrat-SemiBold-600-34 ${styles.featureHeading}`}>Движение и сила</h3>
            <p className={styles.featureText}>
              Забавни тренировки по спортна акробатика, които развиват гъвкавост, координация и сила,
              без децата да усещат, че „спортуват насила“.
            </p>
          </article>

          <article className={styles.featureCard}>
            <h3 className={`montserrat-SemiBold-600-34 ${styles.featureHeading}`}>Екип и приятели</h3>
            <p className={styles.featureText}>
              Малки групи, подкрепяща среда и треньори, които учат децата да си вярват, да си помагат
              и да се радват на успехите заедно.
            </p>
          </article>

          <article className={styles.featureCard}>
            <h3 className={`montserrat-SemiBold-600-34 ${styles.featureHeading}`}>Сцена и медали</h3>
            <p className={styles.featureText}>
              Възможност за участия в състезания, фестивали и демонстрации – децата блестят на килима,
              а родителите се гордеят от трибуните.
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
          <div className={styles.followRight}>{/* снимка с децата или кратък текст */}</div>
        </section>
      </section>

      {/* Important Announcements Section */}
      <div className="announcement-bar-gradient" />
      <p className={styles.announcementsTitle}>Съобщения</p>

      <section aria-label="Съобщения" className={styles.announcementsBar}>
        <div className={styles.fadeLeft} />

        <div className={styles.announcementsTrack}>
          {[...announcements, ...announcements].map((item, index) => (
            <div key={index} className={styles.announcementCard}>
              {item.isImportant && <div className={styles.badge}>ВАЖНО</div>}

              <div className={styles.announcementContent}>
                <p className={styles.announcementTitle}>{item.title}</p>
                <p className={styles.announcementText}>{item.text}</p>

                {item.href && (
                  <Link href={item.href} className={styles.announcementLink}>
                    Научи повече →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.fadeRight} />
      </section>
    </div>
  );
}
