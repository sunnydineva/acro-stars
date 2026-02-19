'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        {/* Лого */}
        <div className={styles.navLogo}>
          <Link href="/">
            <Image
              src="/images/logo-ksa-acro-stars.png"
              alt="Акро Старс Лого"
              width={138}
              height={138}
              className={styles.navLogoImg}
            />
          </Link>
        </div>

        {/* Навигация */}
        <nav className={styles.mainNav}>
          {/* Хамбургер за мобилно меню */}
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
            <li className={`${styles.navItem} ${styles.item1} montserrat-ExtraBold`}>
              <Link href="/">Начало</Link>
            </li>

            <li className={`${styles.navItem} ${styles.item2} montserrat-ExtraBold`}>
              <Link href="/trainings">Тренировки</Link>
            </li>

            <li className={`${styles.navItem} ${styles.item3} montserrat-ExtraBold`}>
              <Link href="/gallery">Галерия</Link>
            </li>

            {/* За нас – вече е главно меню */}
            <li className={`${styles.navItem} ${styles.item4} montserrat-ExtraBold`}>
              <Link href="/about">За нас</Link>
            </li>

            {/* Треньори – главно меню */}
            <li className={`${styles.navItem} ${styles.item5} montserrat-ExtraBold`}>
              <Link href="/coaches">Треньори</Link>
            </li>

            {/* Контакти – главно меню */}
            <li className={`${styles.navItem} ${styles.item6} montserrat-ExtraBold`}>
              <Link href="/contact">Контакти</Link>
            </li>

            {/* Dropdown само за Спонсорство + Публични документи */}
            <li
              className={`${styles.navItem} ${styles.item7} ${styles.dropdown} montserrat-ExtraBold`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                Още
              </Link>

              <div
                className={`${styles.dropdownContentWrapper} ${
                  isDropdownOpen ? styles.open : ''
                }`}
              >
                <div className={styles.dropdownHoverBridge}></div>
                <div className={styles.dropdownContentInner}>
                  <Link href="/sponsorship" className="montserrat-SemiBold-600-34">
                    Спонсорство
                  </Link>
                  <Link href="/public-documents" className="montserrat-SemiBold-600-34">
                    Публични документи
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
