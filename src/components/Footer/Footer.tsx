'use client';

import styles from './footer.module.css';
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    {/* <ul className={styles.social}>
                        <li className={styles.social__item}><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className={styles.social__item}><a href="#!"><img src={instagram} alt="Link" /></a></li>
                        <li className={styles.social__item}><a href="#!"><img src={twitter} alt="Link" /></a></li>
                        <li className={styles.social__item}><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                        <li className={styles.social__item}><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    </ul> */}
                    <div className={styles.copyright}>
                        <p>© 2024 filippov-art.vercel.app</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}