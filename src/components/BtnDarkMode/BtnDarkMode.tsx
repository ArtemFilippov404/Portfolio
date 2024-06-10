'use client';

import { useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import detectedDarkMode from '@/utils/detectedDarkMode';
import sun from './sun.svg';
import moon from './moon.svg';
import styles from './btnDarkMode.module.css';

export default function BtnDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('DarkMode', detectedDarkMode()); 
    
    useEffect(()=>{
        if (darkMode === 'dark'){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
    },[darkMode]);

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";

                setDarkMode(newColorScheme);
            });
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue: any) =>{
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }

    const btnNormal = styles.darkMode_btn;
    const btnActive = styles.darkMode_btn + ' ' + styles.darkMode_btnActive;
    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun.src} alt="Light mode" className={styles.darkMode_btn__icon} />
            <img src={moon.src} alt="Dark mode" className={styles.darkMode_btn__icon} />
        </button>
    )
}