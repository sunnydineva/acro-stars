'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Coaches.module.css';

const coaches = [
  {
    id: 'gergana-info',
    name: 'Гергана Калоянова',
    shortName: 'Гери',
    tagline: 'Треньор. Ментор. Вдъхновител.',
    title: 'Гергана Калоянова - Главен треньор',
    imageSrc: '/images/heroes/geri.jpg',
    paragraphs: [
      'Гергана Калоянова е основният двигател зад успехите на нашите акробати – отдаден треньор, опитен педагог и вдъхновител за поколения млади спортисти.',
      'С дългогодишен състезателен опит в спортната акробатика, Гергана отлично познава спорта – както от залата, така и от съдийската маса.',
      'Завършила е Национална спортна академия „Васил Левски", специалност треньор по спортна акробатика, както и Шуменски университет "Епископ Константин Преславски", специалност иновации в началното образование, което ѝ дава стабилна подготовка в работата както със състезатели, така и с подрастващи.',
      'Като сертифициран съдия и участник в множество национални и международни треньорски и съдийски семинари, Гергана непрекъснато обогатява знанията и методиката си, следвайки най-новите тенденции в спорта.',
      'В момента тя е и учител по спортна подготовка в СУ „Георги Бенковски" – Варна, където продължава да вдъхновява млади хора към активен начин на живот и спортна дисциплина.',
      'Съчетанието между професионализъм, педагогически подход и лична отдаденост прави Гергана не просто треньор, а истински ментор.',
      'Тя изгражда доверие, насърчава постоянството и подготвя младите акробати не само за състезателния квадрат, но и за предизвикателствата извън него.',
    ],
    highlightTitle: 'Какво я отличава:',
    highlightText:
      'Търпението, вниманието към детайла и способността да мотивира всяко дете да даде най-доброто от себе си. За Гергана Калоянова най-важни са не само постиженията, но и радостта от движението, доверието в екипа и личностното израстване на всяко дете.',
  },
  {
    id: 'desi-info',
    name: 'Десислава Иванова',
    shortName: 'Деси',
    tagline: 'Ритъм. Стил. Дисциплина.',
    title: 'Десислава Иванова - Помощник-треньор и хореограф',
    imageSrc: '/images/heroes/desi.jpg',
    paragraphs: [
      'Десислава Иванова е не просто част от екипа на клуба – тя е сърцето на сценичната изразителност и една от най-важните фигури в цялостното развитие на нашите състезатели.',
      'С дългогодишен опит като професионален балетен артист в най-престижния балет в България, Десислава притежава изключителен усет към движение, ритъм и сценично присъствие.',
      'През годините е излизала на една сцена с емблематични български изпълнители като Лили Иванова, Васил Найденов, Д2 и много други – участия, които утвърждават нейния артистичен талант и сценичен опит.',
      'Като помощник-треньор, тя работи рамо до рамо с основния треньор, участва в ежедневните тренировки, подпомага техническата подготовка на децата и е винаги до тях – с внимание, търпение и вдъхновение.',
      'Като хореограф, Десислава изгражда цялостната артистична визия на съчетанията – от избора на музика и движения до всеки малък жест, който превръща спорта в изкуство.',
      'Притежава дипломи и сертификати по акробатика и хореография, с които съчетава професионалната си квалификация с реалния опит на сцената и в залата.',
      'За децата тя е едновременно авторитет и вдъхновител – пример за стил, изразителност и постоянство. С нейна помощ нашите състезатели не само усвояват движенията, но и ги превръщат в израз на характер, емоция и красота.',
    ],
  },
  {
    id: 'monika-info',
    name: 'Моника Станкова',
    shortName: 'Мони',
    tagline: 'Енергия. Амбиция. Бъдеще.',
    title: 'Моника Станкова - Обучаващ се помощник-треньор',
    imageSrc: '/images/heroes/moni.jpg',
    paragraphs: [
      'Моника Станкова е млад и амбициозен обучаващ се треньор, който прави своите уверени първи стъпки в света на треньорството със силна мотивация и отдаденост към спорта.',
      'Като ученичка в Спортно училище „Георги Бенковски" и състезател с множество държавни отличия по спортна акробатика, тя отлично разбира пътя на всеки млад спортист – от първите тренировки до състезателния подиум.',
      'Нейният опит в модерния балет допринася за развитието на усет към движение, ритъм и изразителност, които тя с желание предава на децата в залата.',
      'Моника се включва активно в тренировъчния процес, подпомага работата на треньорския екип и изгражда силна връзка с децата чрез своята позитивна енергия и близък до тях подход.',
      'С желание да се развива и усъвършенства, тя постоянно учи, наблюдава и прилага нови знания, като поставя стабилна основа за своето бъдещо развитие като треньор.',
      'За децата тя е пример за постоянство, дисциплина и любов към спорта – човек, който ги разбира, мотивира и вдъхновява да вярват в собствените си възможности.',
    ],
  },
];

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
          {coaches.map((coach) => (
            <React.Fragment key={coach.id}>
              <div
                className={styles.trainerBlock}
                onMouseEnter={() => handleMouseEnter(coach.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.trainerImgWrapper}>
                  <div className={styles.trainerImgInner}>
                    <Image
                      alt={coach.name}
                      className={styles.trainerImg}
                      src={coach.imageSrc}
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
                <div className={`${styles.trainerTitle} montserrat-Caption`}>{coach.shortName}</div>
                <div className={`${styles.trainerTitle} montserrat-Caption`}>{coach.tagline}</div>
              </div>

              <div className={styles.mobileCoachInfo}>
                <h2>{coach.title}</h2>
                {coach.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {coach.highlightTitle && <h3>{coach.highlightTitle}</h3>}
                {coach.highlightText && <p>{coach.highlightText}</p>}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Coach information sections - always visible but highlighted when hovered */}
        <div className={styles.desktopCoachInfo}>
          {coaches.map((coach) => (
            <div
              key={coach.id}
              id={coach.id}
              className={`${styles.accordionContent} ${styles.open} ${hoveredCoach === coach.id ? styles.highlighted : ''}`}
              style={{ order: hoveredCoach === coach.id ? 1 : 2 }}
            >
              <h2>{coach.title}</h2>
              {coach.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {coach.highlightTitle && <h3>{coach.highlightTitle}</h3>}
              {coach.highlightText && <p>{coach.highlightText}</p>}
            </div>
          ))}
        </div>
      </section>
      </div>
  );
}
