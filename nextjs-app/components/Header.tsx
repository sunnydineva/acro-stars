'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const closeAll = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      // ако затваряме менюто, затвори и dropdown-а
      if (!next) setIsDropdownOpen(false);
      return next;
    });
  };

  const toggleDropdown = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  // 1) Клик извън менюто / dropdown-а -> затваря
  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // ако менюто не е отворено, няма какво да правим
      if (!isMenuOpen && !isDropdownOpen) return;

      // клик в навигацията -> не затваря
      if (navRef.current && navRef.current.contains(target)) return;

      // клик в dropdown-а -> не затваря (важи ако dropdown-а е отделен)
      if (dropdownRef.current && dropdownRef.current.contains(target)) return;

      closeAll();
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [isMenuOpen, isDropdownOpen]);

  // 2) ESC -> затваря
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // 3) Lock scroll, когато менюто е отворено (по избор, но е много приятно)
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Overlay (появява се само когато менюто е отворено) */}
      {isMenuOpen && (
        <div
          className={styles.navOverlay}
          onClick={closeAll}
          aria-hidden="true"
        />
      )}

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          {/* Лого */}
          <div className={styles.navLogo}>
            <Link href="/" onClick={closeAll}>
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
          <nav ref={navRef} className={styles.mainNav}>
            {/* Хамбургер */}
            <button
              type="button"
              className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Затвори меню' : 'Отвори меню'}
              aria-expanded={isMenuOpen}
              aria-controls="navMenu"
            >
              <span />
              <span />
              <span />
            </button>

            <ul
              id="navMenu"
              className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}
            >
              <li className={`${styles.navItem} ${styles.item1} montserrat-ExtraBold`}>
                <Link href="/" onClick={closeAll}>Начало</Link>
              </li>

              <li className={`${styles.navItem} ${styles.item2} montserrat-ExtraBold`}>
                <Link href="/trainings" onClick={closeAll}>Тренировки</Link>
              </li>

              <li className={`${styles.navItem} ${styles.item3} montserrat-ExtraBold`}>
                <Link href="/gallery" onClick={closeAll}>Галерия</Link>
              </li>

              <li className={`${styles.navItem} ${styles.item4} montserrat-ExtraBold`}>
                <Link href="/about" onClick={closeAll}>За нас</Link>
              </li>

              <li className={`${styles.navItem} ${styles.item5} montserrat-ExtraBold`}>
                <Link href="/coaches" onClick={closeAll}>Треньори</Link>
              </li>

              <li className={`${styles.navItem} ${styles.item6} montserrat-ExtraBold`}>
                <Link href="/contact" onClick={closeAll}>Контакти</Link>
              </li>

              {/* Dropdown */}
              <li
                ref={dropdownRef}
                className={`${styles.navItem} ${styles.item7} ${styles.dropdown} montserrat-ExtraBold`}
              >
                <button
                  type="button"
                  className={styles.dropdownTrigger}
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Още
                </button>

                <div
                  className={`${styles.dropdownContentWrapper} ${
                    isDropdownOpen ? styles.dropdownOpen : ''
                  }`}
                >
                  <div className={styles.dropdownContentInner}>
                    <Link href="/sponsorship" onClick={closeAll} className="montserrat-SemiBold-600-34">
                      Спонсорство
                    </Link>
                    <Link href="/public-documents" onClick={closeAll} className="montserrat-SemiBold-600-34">
                      Публични документи
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
