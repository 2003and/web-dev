'use client';

import Image from 'next/image';
import Link from 'next/link';

import HeaderMenu from '../HeaderMenu';
import styles from './Header.module.scss';

function Header() {

    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
                <div className={`${styles.logo_total}`}>
                    <Link href="/" className={styles.logo}>
                        <Image width={280} height={29} src="/assets/icons/wellfitness_logo.svg" alt="logo" />
                    </Link>
                    <div className={styles.text}>
                        Москва <Image width={5} height={5} src="/assets/icons/arrow_down.svg" alt="arrow"/>
                    </div>
                    
                </div>
                
                <HeaderMenu />
                <Image width={3} height={30} src="/assets/icons/separator.png" alt="" />

                {/* <Link href="#" className={styles.language}>
                    <span>EN</span>
                </Link> */}
                <div className={styles.user}>
                Войти
                <Image width={20} height={20}src="/assets/icons/user.svg" alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;