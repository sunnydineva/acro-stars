import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className="main-content">
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h1 className={`montserrat-ExtraBold-title ${styles.aboutTitle} ${styles.titleShiny}`}>
            Двигателят на клуб „Акро Старс" – Варна
          </h1>

          <p className={styles.aboutParagraph}>
            Спортната акробатика е магия от движение – спорт, който съчетава грацията на танца, силата на гимнастиката и артистичността на хореографията. Учи децата не само на гъвкавост и координация, но и на дисциплина, постоянство, концентрация и мотивация за постижения – качества, които остават за цял живот.
          </p>

          <p className={styles.aboutParagraph}>
            „Акро Старс" – Варна е първият и единствен клуб по спортна акробатика в града. В него тренират както картотекирани състезатели, така и деца, които просто искат да се забавляват, да се движат и да усетят духа на екипната работа.
          </p>

          <p className={styles.aboutParagraph}>
            Тренировките са подходящи за деца от 5 до 13 години – независимо дали мечтаят за медали, или просто обичат танци, гимнастика и нови приятелства.
          </p>

          <p className={styles.aboutParagraph}>
            Нашият клуб е повече от място за спорт – той е семейство. Това се вижда в усмивките на децата, в приятелската атмосфера между родителите и в онези специални моменти, които споделяме заедно – на състезания, празници и тренировки.
          </p>

          <p className={styles.aboutParagraph}>
            Заповядайте при нас – нека децата ви се докоснат до красотата на акробатиката и намерят своето вдъхновение!
          </p>
        </div>
      </section>

      <div className={styles.thunderAnimationWrapper}>
        <div className={styles.thunderAnimationsContainer}>
          <Image
            src="/images/resourcesWeb2/thunder-left-first-web2.png"
            className={styles.leftLines}
            alt="Left Lines"
            width={40}
            height={200}
          />
          <Image
            src="/images/resourcesWeb2/thunder-left-second-web2.png"
            className={`${styles.leftLines} ${styles.leftLinesSecond}`}
            alt="Left Lines Second"
            width={40}
            height={200}
          />
          <Image
            src="/images/resourcesWeb2/thunder-right-first-web2.png"
            className={styles.rightLines}
            alt="Right Lines"
            width={40}
            height={1000}
          />
          <Image
            src="/images/resourcesWeb2/thunder-right-second-web2.png"
            className={`${styles.rightLines} ${styles.rightLinesSecond}`}
            alt="Right Lines Second"
            width={40}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
