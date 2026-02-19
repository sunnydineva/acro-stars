import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Trainings.module.css';

export default function TrainingsPage() {
  return (
    <div className="main-content">
      <div className={styles.trainingsTitle}>
        <div className={`montserrat-ExtraBold-title ${styles.acroTraining}`}>
          Седмичен График
        </div>
      </div>

      <div className={styles.scheduleContainer}>
        {/*<Image*/}
        {/*  alt="Background"*/}
        {/*  className={`${styles.backgroundUnderlay} ${styles.pulseHover}`}*/}
        {/*  src="/images/resourcesWeb3/graphic-background-web3.png"*/}
        {/*  width={800}*/}
        {/*  height={600}*/}
        {/*/>*/}

        <div className={styles.tableWrapper}>
          <table className={styles.scheduleTable}>
            <thead>
            <tr className="montserrat-SemiBold-500">
              <th>Часове</th>
              <th>Понеделник</th>
              <th>Вторник</th>
              <th>Сряда</th>
              <th>Четвъртък</th>
              <th>Петък</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>10:30 - 12:00</td>
              <td>Състезатели</td>
              <td>Състезатели</td>
              <td>-</td>
              <td>Състезатели</td>
              <td>-</td>
            </tr>
            <tr>
              <td>14:30 - 17:00</td>
              <td>Състезатели</td>
              <td>Състезатели</td>
              <td>-</td>
              <td>Състезатели</td>
              <td>-</td>
            </tr>
            <tr>
              <td>17:00 - 18:00</td>
              <td>Начинаещи <br/> (5-7г.)</td>
              <td>-</td>
              <td>Начинаещи <br/> (5-7г.)</td>
              <td>-</td>
              <td>Начинаещи <br/> (5-7г.)</td>
            </tr>
            <tr>
              <td>17:00 - 20:00</td>
              <td>Състезатели</td>
              <td>-</td>
              <td>Състезатели</td>
              <td>-</td>
              <td>Състезатели</td>
            </tr>
            <tr>
              <td>18:00 - 19:30</td>
              <td>Начинаещи <br/> (8-13г.)</td>
              <td>Подготвителна група</td>
              <td>Начинаещи <br/> (8-13г.)</td>
              <td>Подготвителна група</td>
              <td>Начинаещи <br/> (8-13г.)</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* Mobile-friendly schedule (shown only on small screens) */}
      <div className={styles.mobileSchedule}>
        <div className={styles.dayCard}>
          <h3 className={styles.dayTitle}>Понеделник</h3>
          <ul className={styles.dayList}>
            <li><span>10:30 – 12:00</span><b>Състезатели</b></li>
            <li><span>14:30 – 17:00</span><b>Състезатели</b></li>
            <li><span>17:00 – 18:00</span><b>Начинаещи (5–7г.)</b></li>
            <li><span>17:00 – 20:00</span><b>Състезатели</b></li>
            <li><span>18:00 – 19:30</span><b>Начинаещи (8–13г.)</b></li>
          </ul>
        </div>

        <div className={styles.dayCard}>
          <h3 className={styles.dayTitle}>Вторник</h3>
          <ul className={styles.dayList}>
            <li><span>10:30 – 12:00</span><b>Състезатели</b></li>
            <li><span>14:30 – 17:00</span><b>Състезатели</b></li>
            <li><span>18:00 – 19:30</span><b>Подготвителна група</b></li>
          </ul>
        </div>

        <div className={styles.dayCard}>
          <h3 className={styles.dayTitle}>Сряда</h3>
          <ul className={styles.dayList}>
            <li><span>17:00 – 18:00</span><b>Начинаещи (5–7г.)</b></li>
            <li><span>17:00 – 20:00</span><b>Състезатели</b></li>
            <li><span>18:00 – 19:30</span><b>Начинаещи (8–13г.)</b></li>
          </ul>
        </div>

        <div className={styles.dayCard}>
          <h3 className={styles.dayTitle}>Четвъртък</h3>
          <ul className={styles.dayList}>
            <li><span>10:30 – 12:00</span><b>Състезатели</b></li>
            <li><span>14:30 – 17:00</span><b>Състезатели</b></li>
            <li><span>18:00 – 19:30</span><b>Подготвителна група</b></li>
          </ul>
        </div>

        <div className={styles.dayCard}>
          <h3 className={styles.dayTitle}>Петък</h3>
          <ul className={styles.dayList}>
            <li><span>17:00 – 18:00</span><b>Начинаещи (5–7г.)</b></li>
            <li><span>17:00 – 20:00</span><b>Състезатели</b></li>
            <li><span>18:00 – 19:30</span><b>Начинаещи (8–13г.)</b></li>
          </ul>
        </div>
      </div>

      <div className={styles.signupButtonWrapperCentered}>
        <Link href="/contact?trial=true" className={styles.signupButton}>
          Запиши се за пробна тренировка <span>→</span>
        </Link>
      </div>

      <section className={`${styles.allCategories} montserrat-SemiBold-500`}>
        <div className={styles.category}>
          <Image
            src="/images/resourcesWeb3/beginners.png"
            alt="Начинаещи"
            width={300}
            height={250}
            className={styles.categoryImage}
          />
          <div className={styles.categoryContent}>
            <h3>Начинаещи</h3>
            <p>
              За деца на възраст между 5 и 13 години, които правят първите си стъпки
              в спорта. В тази група развиваме основните двигателни умения – сила,
              гъвкавост и координация – чрез игри и лесни акробатични упражнения.
              Целта ни е децата да обикнат движението и залата, докато се чувстват
              уверени и в безопасност.
            </p>
          </div>
        </div>

        <div className={styles.category}>
          <Image
            src="/images/resourcesWeb3/advanced.png"
            alt="Напреднали"
            width={300}
            height={250}
            className={styles.categoryImage}
          />
          <div className={styles.categoryContent}>
            <h3>Напреднали</h3>
            <p>
              За деца от 7 до 14 години, които вече познават основните елементи и са
              готови за следващото ниво. Работим върху по-сложни комбинации, стабилност
              във стойки, скокове и приземявания, както и върху сила и гъвкавост.
              В тази група изграждаме дисциплина и постоянство и подготвяме децата
              за бъдещо участие в състезателни формации.
            </p>
          </div>
        </div>

        <div className={styles.category}>
          <Image
            src="/images/resourcesWeb3/competitor.jpg"
            alt="Състезатели"
            width={300}
            height={250}
            className={styles.categoryImage}
          />
          <div className={styles.categoryContent}>
            <h3>Състезатели</h3>
            <p>
              За спортисти, готови да защитават клуба на състезания. Тренировките са с по-висока
              интензивност, с индивидуални и групови комбинации и работа по
              състезателни композиции. Участваме в държавни и международни турнири
              и развиваме спортен дух, отговорност към отбора и стремеж към върхови
              постижения.
            </p>
          </div>
        </div>

        <div className={styles.category}>
          <Image
            src="/images/resourcesWeb3/school.png"
            alt="Спортно Училище"
            width={300}
            height={250}
            className={styles.categoryImage}
          />
          <div className={styles.categoryContent}>
            <h3>Спортно Училище</h3>
            <p>
              За възпитаниците на Спортно училище „Георги Бенковски" – Варна,
              със специалност СПОРТНА АКРОБАТИКА. Тук акробатиката е ежедневие и
              професионален избор. Работим по дългосрочни цели,
              подготовка за национални отбори и развиване на лидерски и треньорски
              умения. Това са бъдещите лица на спорта – шампиони, треньори
              и посланици на спорта.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
