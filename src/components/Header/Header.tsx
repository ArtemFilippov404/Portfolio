'use client';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1 className={styles.header__title}>
                    <strong>Привет, меня зовут <em>Артём</em></strong><br />
                    я Frontend-разработчик
                </h1>
                <div className={styles.header__text}>
                    <p>со стремлением развиваться и творить</p>
                </div>
                <a href="./Filippov_CV.pdf" target="_blank" className="btn">Скачать резюме</a>
            </div>
        </header>
    );
}