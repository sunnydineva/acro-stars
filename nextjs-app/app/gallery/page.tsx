import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Gallery.module.css';

export default function GalleryPage() {
  return (
    <div className="main-content">
      <h1 className={`montserrat-SemiBold-500 ${styles.titleShiny} ${styles.titlePadding}`}>
        Нашите моменти в снимки:
      </h1>

      <section className={styles.highlightGalleryWrapper}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.highlightGallery}>
          {/* First set of images */}
          {[...Array(10)].map((_, index) => (
            <Image
              key={`highlight-${index + 1}`}
              src={`/images/gallery/${index + 1}.jpg`}
              alt={`Акробатика ${index + 1}`}
              width={240}
              height={360}
            />
          ))}

          {/* Duplicate set for continuous scrolling */}
          {[...Array(10)].map((_, index) => (
            <Image
              key={`highlight-duplicate-${index + 1}`}
              src={`/images/gallery/${index + 1}.jpg`}
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

      <section className={styles.gridGallery}>
        {[...Array(20)].map((_, index) => (
          <Image
            key={`grid-${index + 11}`}
            src={`/images/gallery/${index + 11}.jpg`}
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

      <section className={styles.highlightGalleryWrapper}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.highlightGallery}>
          {/* Christmas gallery images */}
          {[...Array(15)].map((_, index) => (
            <Image
              key={`christmas-${index + 1}`}
              src={`/images/gallery/2024-christmas/${index + 1}.jpg`}
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
