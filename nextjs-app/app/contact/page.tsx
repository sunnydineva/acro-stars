'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Contact.module.css';
import BackgroundImage from "@/public/images/resourcesWeb3/graphic-background-web3.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextYear = currentYear + 1;

    const formattedMinDate = today.toISOString().split('T')[0];
    const formattedMaxDate = `${nextYear}-12-31`;

    setMinDate(formattedMinDate);
    setMaxDate(formattedMaxDate);

  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.date) {
      alert('Моля, попълнете всички полета преди да изпратите формата.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xangjzno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          date: ''
        });

      } else {
        alert('Грешка при изпращане на формата. Опитайте отново.');
      }
    } catch (error) {
      alert('Грешка при свързване със сървъра.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main-content">
      {/* Основен двуколонен блок: форма + карта */}
      <section className={styles.contactSection}>
        {/* фонът зад всичко */}
        <Image
          alt="Decorative background"
          className={styles.backgroundUnderlay}
          src={BackgroundImage}
          width={800}
          height={800}
        />

        {/* Лява колона – заглавие + форма */}
        <div className={styles.contactColumn}>
          <h1 className={`montserrat-ExtraBold-title ${styles.acroContact}`}>
            Свържи се с нас
          </h1>

          {!isSubmitted ? (
            <div className={`${styles.contactContainer} montserrat-SemiBold-500`}>
              <form onSubmit={handleSubmit} className={styles.formGrid}>
                <div className={styles.formField}>
                  <label htmlFor="name">Име</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Име"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="email">Имейл</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Имейл"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={`${styles.formField} ${styles.fullRow}`}>
                  <label htmlFor="message">Съобщение</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Съобщение"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="date">Предпочитана дата</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={minDate}
                    max={maxDate}
                    required
                  />
                </div>

                <div
                  className={`${styles.formField} ${styles.buttonField} ${styles.fullRow}`}
                >
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Изпращане...' : 'Изпрати'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div
              className={`${styles.thankYouMessage} ${styles.thankYouMessageVisible}`}
            >
              ✅ Съобщението е изпратено! Очакваме ви в залата!
            </div>
          )}
        </div>

        {/* Дясна колона – заглавие + текст + карта */}
        <div className={styles.mapColumn}>

          <p className={styles.mapText}>
            Залата на „Акро Старс“ се намира в спортен комплекс „Простор“, управляван от общинско предприятие „Спорт – Варна“.
            В комплекса има зали по художествена и спортна гимнастика, борба, бокс, карате и други бойни спортове,
            Медицински Център за Рехабилитация и Спортна Медицина и спортен диспансер.
            Всичко това е разположено точно до стадион „Спартак“ и новите игрища с изкуствена настилка.
            Използвай картата, за да видиш входа на залата и да избереш най-удобния маршрут до нас.
          </p>

          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.6798862973124!2d27.913325900000004!3d43.2190806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4546efe94312d%3A0x28492d260e0f21bb!2sSports%20complex%20%22Prostor%22!5e1!3m2!1sen!2sbg!4v1744966484791!5m2!1sen!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h2 className={`montserrat-ExtraBold-title ${styles.mapHeading}`}>
            Ела да потренираме заедно!
          </h2>
        </div>
      </section>

    </div>
  );
}
