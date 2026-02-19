import React from "react";
import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

// Генерираме пътища към снимките в /public
const highlightImages = Array.from({ length: 10 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

const gridImages = Array.from({ length: 20 }, (_, i) => `/images/gallery/${i + 11}.jpg`);

const christmasImages = Array.from(
  { length: 15 },
  (_, i) => `/images/gallery/2024-christmas/${i + 1}.jpg`
);

export default function GalleryPage() {
  return (
    <div className="main-content">
      <h1 className={`montserrat-SemiBold-500 ${styles.titleShiny} ${styles.titlePadding}`}>
        Нашите моменти в снимки:
      </h1>

      {/* Хоризонтална „highlight“ галерия с безкраен скрол */}
      <section className={styles.highlightGalleryWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.highlightGallery}>
          {/* Първи сет */}
          {highlightImages.map((src, index) => (
            <Image
              key={`highlight-${index}`}
              src={src}
              alt={`Акробатика ${index + 1}`}
              width={240}
              height={360}
              sizes="240px"
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
              sizes="240px"
            />
          ))}
        </div>
        <div className={styles.fadeRight} />
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
            sizes="(max-width: 768px) 45vw, 220px"
          />
        ))}
      </section>

      <h1 className={`montserrat-SemiBold-500 ${styles.titleShiny}`}>
        Коледа в Акро Старс Варна:
      </h1>

      {/* Коледна highlight галерия */}
      <section className={styles.highlightGalleryWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.highlightGallery}>
          {christmasImages.map((src, index) => (
            <Image
              key={`christmas-${index}`}
              src={src}
              alt={`Коледа ${index + 1}`}
              width={240}
              height={360}
              sizes="240px"
            />
          ))}
        </div>
        <div className={styles.fadeRight} />
      </section>
    </div>
  );
}
