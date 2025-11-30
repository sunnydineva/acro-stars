import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className="montserrat-SemiBold-500">Контакти</h3>
            <p className="montserrat-Regular">
              <strong>Адрес:</strong> Варна, спортен комплекс „Простор“<br />
              ул. "Селиолу" №39А<br />
              <strong>Телефон:</strong> +359 87 878 5785<br />
              <strong>Email:</strong> acrostars.varna@gmail.com
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3 className="montserrat-SemiBold-500">Полезни връзки</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/trainings">Тренировки</Link></li>
              <li><Link href="/gallery">Галерия</Link></li>
              <li><Link href="/coaches">Треньори</Link></li>
              <li><Link href="/contact">Контакти</Link></li>
              <li><Link href="/public-documents">Публични документи</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className="montserrat-SemiBold-500">Социални мрежи</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/profile.php?id=100063250867590" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/acrostars.varna/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.055.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.047-1.37-.059-4.04-.059zm0 3.063A5.135 5.135 0 1117.135 12 5.135 5.135 0 0112 6.865zm0 8.468A3.333 3.333 0 1115.333 12 3.333 3.333 0 0112 15.333zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            © {currentYear} КСА "Акро Старс" – Варна. Всички права запазени.
            <span className={styles.separator}>|</span>
            Дизайн: <span className={styles.designerName}>Софт Протект ООД</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
