'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'

//import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

import styles from "./navbar.module.css";

export default function Navbar() {
    const pathname = usePathname()
    const activeLink  =  styles.nav_list__link + ' ' + styles.nav_list__linkActive;
    const normalLink  = styles.nav_list__link;
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.nav_row}>
                    <Link href="/" className={styles.logo}>
                        <strong>Filippov Artem</strong>
                    </Link>
                    
                    {/* <BtnDarkMode /> */}

                    <ul className={styles.nav_list}>
                        <li className="nav-list__item">
                            <Link href="/" className={`${pathname === '/' ? activeLink : normalLink}`}>
                                Главная
                            </Link>
                        </li>
                        {/* <li className="nav-list__item">
                            <Link href="/projects" className={`${pathname === '/projects' ? activeLink : normalLink}`}>
                                Проекты
                            </Link>
                        </li> */}
                        <li className="nav-list__item">
                            <Link href="/contacts" className={`${pathname === '/contacts' ? activeLink : normalLink}`}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
