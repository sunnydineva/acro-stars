'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Coaches.module.css';

// import GeriImg from "@/public/images/draft/geri.jpg";
// import DesiImg from "@/public/images/draft/desi.jpg";
import ThunderLeftFirst from "@/public/images/resourcesWeb2/thunder-left-first-web2.png";
import ThunderLeftSecond from "@/public/images/resourcesWeb2/thunder-left-second-web2.png";
import ThunderRightFirst from "@/public/images/resourcesWeb2/thunder-right-first-web2.png";
import ThunderRightSecond from "@/public/images/resourcesWeb2/thunder-right-second-web2.png";

export default function CoachesPage() {
  // State to track which coach info is being hovered
  const [hoveredCoach, setHoveredCoach] = useState<string | null>(null);

  // Set Gergana's info to be highlighted by default when the page loads
  useEffect(() => {
    // Set default coach info to Gergana
    setHoveredCoach('gergana-info');
  }, []);

  // Function to handle mouse enter on trainer block
  const handleMouseEnter = (coachId: string) => {
    setHoveredCoach(coachId);
  };

  // Function to handle mouse leave on trainer block
  const handleMouseLeave = () => {
    // When mouse leaves, revert to highlighting Gergana's info
    setHoveredCoach('gergana-info');
  };

  return (
    <div className="main-content">
      <section>
        {/* Always show team intro */}
        <div className={styles.teamIntro}>
          <h2 className={`montserrat-SemiBold-500 ${styles.titleShiny}`}>Екип, който вдъхновява</h2>
          <p>
            Зад всяко уверено дете и всяко спечелено отличие стои екип от хора, които вярват, подкрепят и изграждат.
          </p>
          <p>
            Нашите треньорки съчетават спортна експертиза, педагогически подход и артистична чувствителност. Те работят рамо до рамо, за да развиват силата, гъвкавостта, дисциплината и сценичното присъствие на всяко дете.
          </p>
          <p>
            За нас акробатиката е повече от спорт – тя е възпитание, характер и увереност.
          </p>
        </div>

        <div className={styles.mainTitle}>
          <h1 className={`montserrat-SemiBold-500 ${styles.titleShiny}`}>Сърцата зад успеха:</h1>
        </div>

        <div className={styles.mainTrainers}>
          <div
            className={styles.trainerBlock}
            onMouseEnter={() => handleMouseEnter('gergana-info')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.trainerImgWrapper}>
              <div className={styles.trainerImgInner}>
                <Image
                  alt="Гергана Калоянова"
                  className={styles.trainerImg}
                  src="/public/images/draft/geri.jpg"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className={`${styles.trainerTitle} montserrat-Caption`}>Гери</div>
            <div className={`${styles.trainerTitle} montserrat-Caption`}>Треньор. Ментор. Вдъхновител.</div>
          </div>

          <div
            className={styles.trainerBlock}
            onMouseEnter={() => handleMouseEnter('desi-info')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.trainerImgWrapper}>
              <div className={styles.trainerImgInner}>
                <Image
                  alt="Десислава Иванова"
                  className={styles.trainerImg}
                  src="/public/images/draft/desi.jpg"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className={`${styles.trainerTitle} montserrat-Caption`}>Деси</div>
            <div className={`${styles.trainerTitle} montserrat-Caption`}>Ритъм. Стил. Дисциплина.</div>
          </div>
        </div>

        {/* Coach information sections - always visible but highlighted when hovered */}
        <div className={styles.coachInfoContainer}>
          <div
            id="gergana-info"
            className={`${styles.accordionContent} ${styles.open} ${hoveredCoach === 'gergana-info' ? styles.highlighted : ''}`}
            style={{ order: hoveredCoach === 'gergana-info' ? 1 : 2 }}
          >
            <h2>Гергана Калоянова - Главен треньор</h2>

            <p>
              Гергана Калоянова е основният двигател зад успехите на нашите акробати – отдаден треньор, опитен педагог и вдъхновител за поколения млади спортисти.
            </p>

            <p>
              С дългогодишен състезателен опит в спортната акробатика, Гергана отлично познава спорта – както от залата, така и от съдийската маса.
            </p>

            <p>
              Завършила е Национална спортна академия „Васил Левски", специалност треньор по спортна акробатика, както и Шуменски университет "Епископ Константин Преславски", специалност иновации в началното образование, което ѝ дава стабилна подготовка в работата както със състезатели, така и с подрастващи.
            </p>

            <p>
              Като сертифициран съдия и участник в множество национални и международни треньорски и съдийски семинари, Гергана непрекъснато обогатява знанията и методиката си, следвайки най-новите тенденции в спорта.
            </p>

            <p>
              В момента тя е и учител по спортна подготовка в СУ „Георги Бенковски" – Варна, където продължава да вдъхновява млади хора към активен начин на живот и спортна дисциплина.
            </p>

            <p>
              Съчетанието между професионализъм, педагогически подход и лична отдаденост прави Гергана не просто треньор, а истински ментор.
            </p>

            <p>
              Тя изгражда доверие, насърчава постоянството и подготвя младите акробати не само за състезателния квадрат, но и за предизвикателствата извън него.
            </p>

            <h3>Какво я отличава:</h3>

            <p>
              Търпението, вниманието към детайла и способността да мотивира всяко дете да даде най-доброто от себе си. За Гергана Калоянова най-важни са не само постиженията, но и радостта от движението, доверието в екипа и личностното израстване на всяко дете.
            </p>
          </div>

          <div
            id="desi-info"
            className={`${styles.accordionContent} ${styles.open} ${hoveredCoach === 'desi-info' ? styles.highlighted : ''}`}
            style={{ order: hoveredCoach === 'desi-info' ? 1 : 2 }}
          >
            <h2>Десислава Иванова - Помощник-треньор и хореограф</h2>

            <p>
              Десислава Иванова е не просто част от екипа на клуба – тя е сърцето на сценичната изразителност и една от най-важните фигури в цялостното развитие на нашите състезатели.
            </p>

            <p>
              С дългогодишен опит като професионален балетен артист в най-престижния балет в България, Десислава притежава изключителен усет към движение, ритъм и сценично присъствие.
            </p>

            <p>
              През годините е излизала на една сцена с емблематични български изпълнители като Лили Иванова, Васил Найденов, Д2 и много други – участия, които утвърждават нейния артистичен талант и сценичен опит.
            </p>

            <p>
              Като помощник-треньор, тя работи рамо до рамо с основния треньор, участва в ежедневните тренировки, подпомага техническата подготовка на децата и е винаги до тях – с внимание, търпение и вдъхновение.
            </p>

            <p>
              Като хореограф, Десислава изгражда цялостната артистична визия на съчетанията – от избора на музика и движения до всеки малък жест, който превръща спорта в изкуство.
            </p>

            <p>
              Притежава дипломи и сертификати по акробатика и хореография, с които съчетава професионалната си квалификация с реалния опит на сцената и в залата.
            </p>

            <p>
              За децата тя е едновременно авторитет и вдъхновител – пример за стил, изразителност и постоянство. С нейна помощ нашите състезатели не само усвояват движенията, но и ги превръщат в израз на характер, емоция и красота.
            </p>
          </div>
        </div>
      </section>
      </div>
  );
}
