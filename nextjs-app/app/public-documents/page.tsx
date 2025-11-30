import React from 'react';
import Link from 'next/link';
import { publicDocuments, documentTypeLabels, getDocumentsByType } from '../../data/publicDocuments';
import styles from '../../styles/PublicDocuments.module.css';

export default function PublicDocumentsPage() {
  const documentsByType = getDocumentsByType();

  // Format date from YYYY-MM-DD to DD.MM.YYYY (Bulgarian format)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  };

  return (
    <div className="main-content">
      <div className={styles.documentsContainer}>
        <h1 className={`montserrat-ExtraBold-title ${styles.pageTitle} ${styles.titleShiny}`}>Публични документи</h1>

        <p className={`montserrat-Regular ${styles.pageDescription}`}>
          На тази страница можете да намерите официални документи на КСА "Акро Старс" - Варна,
          включително решения на Управителния съвет, протоколи от заседания и други важни документи.
        </p>

        {Object.entries(documentsByType).map(([type, docs]) => (
          docs.length > 0 && (
            <section key={type} className={styles.documentSection}>
              <h2 className={`montserrat-SemiBold-500 ${styles.sectionTitle}`}>
                {documentTypeLabels[type as keyof typeof documentTypeLabels]}
              </h2>

              <div className={styles.documentsList}>
                {docs.map(doc => (
                  <div key={doc.id} className={styles.documentCard}>
                    <div className={styles.documentHeader}>
                      <h3 className={`montserrat-SemiBold-500 ${styles.documentTitle}`}>{doc.title}</h3>
                      <span className={styles.documentDate}>{formatDate(doc.date)}</span>
                    </div>

                    {doc.description && (
                      <p className={styles.documentDescription}>{doc.description}</p>
                    )}

                    <div className={styles.documentFooter}>
                      <Link
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                      >
                        Изтегли <span className={styles.downloadIcon}>↓</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        ))}

        <div className={styles.contactInfo}>
          <p className="montserrat-Regular">
            За достъп до други документи или при въпроси, моля свържете се с нас на имейл:
            <a href="mailto:acrostars.varna@gmail.com" className={styles.emailLink}>acrostars.varna@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
