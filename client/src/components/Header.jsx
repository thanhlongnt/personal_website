import React from 'react';
import styles from '../styles/App.module.css';

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.name}>Thanh-Long (T.L.) Nguyen-Trong</h1>
                <p className={styles.title}>Software Developer & Creative Problem Solver</p>
            </div>
        </header>
    );
}
