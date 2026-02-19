import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className="main-content">
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* LEFT: media */}
            <div className={styles.mediaCol}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaFrame}>
                  <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/about/about-fallback.jpg"
                  >
                    <source src="/videos/about/about-video.mp4" type="video/mp4" />
                    {/* Fallback image if video can't play */}
                  </video>

                  {/* Optional: always render image as fallback behind video */}
                  <Image
                    src="/images/about/about-fallback.jpg"
                    alt="AcroStars – тренировка"
                    fill
                    className={styles.fallbackImage}
                    priority
                  />
                </div>

                <div className={styles.mediaBadge}>
                  <span className={styles.badgeDot} />
                  Варна • Спортна акробатика
                </div>
              </div>
            </div>

            {/* RIGHT: text */}
            <div className={styles.textCol}>
              <h1 className={`montserrat-ExtraBold-title ${styles.aboutTitle} ${styles.titleShiny}`}>
                Клуб „Акро Старс&quot; – Варна
              </h1>

              <div className={styles.textCard}>
                <p className={styles.aboutParagraph}>
                  Спортната акробатика е магия от движение – спорт, който съчетава грацията на танца,
                  силата на гимнастиката и артистичността на хореографията. Учи децата не само на
                  гъвкавост и координация, но и на дисциплина, постоянство, концентрация и мотивация
                  за постижения – качества, които остават за цял живот.
                </p>

                <p className={styles.aboutParagraph}>
                  „Акро Старс&quot; – Варна е първият и единствен клуб по спортна акробатика в града.
                  В него тренират както картотекирани състезатели, така и деца, които просто искат
                  да се забавляват, да се движат и да усетят духа на екипната работа.
                </p>

                <p className={styles.aboutParagraph}>
                  Тренировките са подходящи за деца от 5 до 13 години – независимо дали мечтаят за
                  медали, или просто обичат танци, гимнастика и нови приятелства.
                </p>

                <p className={styles.aboutParagraph}>
                  Нашият клуб е повече от място за спорт – той е семейство. Това се вижда в усмивките
                  на децата, в приятелската атмосфера между родителите и в онези специални моменти,
                  които споделяме заедно – на състезания, празници и тренировки.
                </p>

                <p className={styles.aboutParagraph}>
                  Заповядайте при нас – нека децата ви се докоснат до красотата на акробатиката и
                  намерят своето вдъхновение!
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/contact" className={styles.contactLink}>
                    Свържете се с нас
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
