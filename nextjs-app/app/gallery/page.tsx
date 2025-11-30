import React from "react";
import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

// ===== Импорти на снимките (галерия 1–30) =====
import g1 from "@/public/images/gallery/1.jpg";
import g2 from "@/public/images/gallery/2.jpg";
import g3 from "@/public/images/gallery/3.jpg";
import g4 from "@/public/images/gallery/4.jpg";
import g5 from "@/public/images/gallery/5.jpg";
import g6 from "@/public/images/gallery/6.jpg";
import g7 from "@/public/images/gallery/7.jpg";
import g8 from "@/public/images/gallery/8.jpg";
import g9 from "@/public/images/gallery/9.jpg";
import g10 from "@/public/images/gallery/10.jpg";

import g11 from "@/public/images/gallery/11.jpg";
import g12 from "@/public/images/gallery/12.jpg";
import g13 from "@/public/images/gallery/13.jpg";
import g14 from "@/public/images/gallery/14.jpg";
import g15 from "@/public/images/gallery/15.jpg";
import g16 from "@/public/images/gallery/16.jpg";
import g17 from "@/public/images/gallery/17.jpg";
import g18 from "@/public/images/gallery/18.jpg";
import g19 from "@/public/images/gallery/19.jpg";
import g20 from "@/public/images/gallery/20.jpg";

import g21 from "@/public/images/gallery/21.jpg";
import g22 from "@/public/images/gallery/22.jpg";
import g23 from "@/public/images/gallery/23.jpg";
import g24 from "@/public/images/gallery/24.jpg";
import g25 from "@/public/images/gallery/25.jpg";
import g26 from "@/public/images/gallery/26.jpg";
import g27 from "@/public/images/gallery/27.jpg";
import g28 from "@/public/images/gallery/28.jpg";
import g29 from "@/public/images/gallery/29.jpg";
import g30 from "@/public/images/gallery/30.jpg";

// ===== Импорти на коледните снимки (2024-christmas 1–15) =====
import c1 from "@/public/images/gallery/2024-christmas/1.jpg";
import c2 from "@/public/images/gallery/2024-christmas/2.jpg";
import c3 from "@/public/images/gallery/2024-christmas/3.jpg";
import c4 from "@/public/images/gallery/2024-christmas/4.jpg";
import c5 from "@/public/images/gallery/2024-christmas/5.jpg";
import c6 from "@/public/images/gallery/2024-christmas/6.jpg";
import c7 from "@/public/images/gallery/2024-christmas/7.jpg";
import c8 from "@/public/images/gallery/2024-christmas/8.jpg";
import c9 from "@/public/images/gallery/2024-christmas/9.jpg";
import c10 from "@/public/images/gallery/2024-christmas/10.jpg";
import c11 from "@/public/images/gallery/2024-christmas/11.jpg";
import c12 from "@/public/images/gallery/2024-christmas/12.jpg";
import c13 from "@/public/images/gallery/2024-christmas/13.jpg";
import c14 from "@/public/images/gallery/2024-christmas/14.jpg";
import c15 from "@/public/images/gallery/2024-christmas/15.jpg";

// ===== Масиви с импортираните снимки =====
const highlightImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

const gridImages = [
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g20,
  g21,
  g22,
  g23,
  g24,
  g25,
  g26,
  g27,
  g28,
  g29,
  g30,
];

const christmasImages = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
];

export default function GalleryPage() {
  return (
    <div className="main-content">
      <h1
        className={`montserrat-SemiBold-500 ${styles.titleShiny} ${styles.titlePadding}`}
      >
        Нашите моменти в снимки:
      </h1>

      {/* Хоризонтална „highlight“ галерия с безкраен скрол */}
      <section className={styles.highlightGalleryWrapper}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.highlightGallery}>
          {/* Първи сет */}
          {highlightImages.map((src, index) => (
            <Image
              key={`highlight-${index}`}
              src={src}
              alt={`Акробатика ${index + 1}`}
              width={240}
              height={360}
            />
          ))}

          {/* Дублиран сет за непрекъснато движение */}
          {highlightImages.map((src, index) => (
            <Image
              key={`highlight-duplicate-${index}`}
              src={src}
              alt={`Акробатика ${index + 1}`}
              width={240}
              height={360}
            />
          ))}
        </div>
        <div className={styles.fadeRight}></div>
      </section>

      <h1 className={`montserrat-SemiBold-500 ${styles.titleShiny}`}>
        Полет към медалите:
      </h1>

      {/* Grid галерия */}
      <section className={styles.gridGallery}>
        {gridImages.map((src, index) => (
          <Image
            key={`grid-${index}`}
            src={src}
            alt={`Акробатика ${index + 11}`}
            width={220}
            height={180}
            loading="lazy"
          />
        ))}
      </section>

      <h1 className={`montserrat-SemiBold-500 ${styles.titleShiny}`}>
        Коледа в Акро Старс Варна:
      </h1>

      {/* Коледна highlight галерия */}
      <section className={styles.highlightGalleryWrapper}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.highlightGallery}>
          {christmasImages.map((src, index) => (
            <Image
              key={`christmas-${index}`}
              src={src}
              alt={`Коледа ${index + 1}`}
              width={240}
              height={360}
            />
          ))}
        </div>
        <div className={styles.fadeRight}></div>
      </section>
    </div>
  );
}
