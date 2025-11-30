'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Coaches.module.css';

import GeriImg from "@/public/images/draft/geri.jpg";
import DesiImg from "@/public/images/draft/desi.jpg";
import ThunderLeftFirst from "@/public/images/resourcesWeb2/thunder-left-first-web2.png";
import ThunderLeftSecond from "@/public/images/resourcesWeb2/thunder-left-second-web2.png";
import ThunderRightFirst from "@/public/images/resourcesWeb2/thunder-right-first-web2.png";
import ThunderRightSecond from "@/public/images/resourcesWeb2/thunder-right-second-web2.png";

export default function CoachesPage() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="main-content">
      <section>
        <div className={styles.mainTitle}>
          <h1 className={`montserrat-SemiBold-500 ${styles.titleShiny}`}>Сърцата зад успеха:</h1>
        </div>

        <div className={styles.mainTrainers}>
          <div
            className={styles.trainerBlock}
            onClick={() => toggleAccordion('gergana-info')}
          >
            <div className={styles.trainerImgWrapper}>
              <div className={styles.trainerImgInner}>
                <Image
                  alt="Гергана Калоянова"
                  className={styles.trainerImg}
                  src={GeriImg}
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
            onClick={() => toggleAccordion('desi-info')}
          >
            <div className={styles.trainerImgWrapper}>
              <div className={styles.trainerImgInner}>
                <Image
                  alt="Десислава Иванова"
                  className={styles.trainerImg}
                  src={DesiImg}
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className={`${styles.trainerTitle} montserrat-Caption`}>Деси</div>
            <div className={`${styles.trainerTitle} montserrat-Caption`}>Ритъм. Стил. Дисциплина.</div>
          </div>
        </div>

        {/* Accordion content */}
        <div
          id="gergana-info"
          className={`${styles.accordionContent} ${activeAccordion === 'gergana-info' ? styles.open : ''}`}
        >
          <h2>👩‍🏫 Гергана Неделчева Калоянова – Треньор</h2>
          <p><em>"Когато децата се усмихват след всяка тренировка – знам, че съм си свършила работата."</em></p>
          <ul>
            <li>📍 Родом от Ямбол, състезател в клуб „Тунджа"</li>
            <li>🎓 НСА „Васил Левски", специалност треньор</li>
            <li>🎓 Магистър по начална педагогика – Шумен</li>
            <li>🥇 Многократен медалист от републикански първенства</li>
            <li>🚀 Основател на Клуб „Акро Старс" от 2019 г.</li>
          </ul>
        </div>

        <div
          id="desi-info"
          className={`${styles.accordionContent} ${activeAccordion === 'desi-info' ? styles.open : ''}`}
        >
          <h2>💃 Десислава Иванова – Хореограф</h2>
          <p><em>"Танцът е начин децата да разкажат своята история – без думи, но с цялото си сърце."</em></p>
          <ul>
            <li>📍 Родена в Пазарджик, започва с гимнастика и танци</li>
            <li>🎭 Солистка в ансамбъл „Албена"</li>
            <li>🌟 Балет „Diva" – участия в концерти и ТВ</li>
            <li>🏆 Хореограф с награди от танцови конкурси</li>
            <li>👩‍👧‍👦 Майка на три деца, вдъхновена от танца</li>
          </ul>
        </div>
      </section>

      {/*<div className="main-bar-gradient"></div>*/}

      <div className={styles.thunderAnimationWrapper}>
        <div className={styles.thunderAnimationsContainer}>
          <Image
            src={ThunderLeftFirst}
            className={styles.leftLines}
            alt="Left Lines"
            width={40}
            height={200}
          />
          <Image
            src={ThunderLeftSecond}
            className={`${styles.leftLines} ${styles.leftLinesSecond}`}
            alt="Left Lines Second"
            width={40}
            height={200}
          />
          <Image
            src={ThunderRightFirst}
            className={styles.rightLines}
            alt="Right Lines"
            width={40}
            height={1000}
          />
          <Image
            src={ThunderRightSecond}
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
