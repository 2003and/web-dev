'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
    return (
        <nav className={styles.nav}>

            <div className={styles.navList}>                
                <div className={styles.text}>
                    <Link href="/about">Для дилеров</Link>
                </div>
                <Link href="/about">
                <div className={styles.btn}>
                    Стать партнёром
                </div>
                </Link>
                <Image width={3} height={30} src="/assets/icons/separator.png" alt="" />
                <div className={styles.order_call}>
                    +7 (800) 000-00-00 МСК <Image width={6} height={6} src="/assets/icons/arrow_down.svg" alt="" />
                    <Link href="/about">Заказать звонок</Link>
                </div>
            </div>
        </nav>
    );
}