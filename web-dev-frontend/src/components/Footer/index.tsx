'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <div className={`container ${styles.wrapper}`}>
                <Link href="/" className={styles.logo}>
                    <Image fill src="/assets/icons/logo-invert.svg" alt="logo" />
                </Link>
                <div className={styles.phone}>
                    <a href="tel:+79184326587">+7 (918) 432-65-87</a>
                    <span>Ежедневно с&nbsp;9:00 до&nbsp;23:00</span>
                </div>
                <Link href="/" className={styles.confidencial}>
                    Политика конфиденциальности
                </Link>
            </div> */}
            <div className={styles.list}>
                <div className={styles.listTitle}>Каталог</div>
                <div className={styles.listTitle}>Поддержка</div>
                <div className={styles.listTitle}>Услуги</div>
                <div className={styles.listTitle}>О компании</div>
                <div>
                    <div>Для дома</div>
                    <div>Для фитнес клуба</div>
                    <div>Акции</div>
                    <div>Идеи и подборки</div>
                    <div>Новинки</div>
                    <div>Наши бренды</div>
                </div>
                <div>
                    <div>Доставка и оплата</div>
                    <div>Условия возврата</div>
                    <div>Сервисная заявка</div>
                    <div>Обслуживание фитнес клубов</div>
                    <div>FAQ</div>
                    <div>Инструкции</div>
                    <div>Гарантия</div>
                </div>
                <div>
                    <div>3D проект</div>
                    <div>Консалтинг</div>
                    <div>Бизнес планирование</div>
                    <div>Лизинг</div>
                    <div>Trade-IN</div>
                    <div>В рассрочку</div>
                </div>
                <div>
                    <div>О нас</div>
                    <div>Наша миссия</div>
                    <div>Наша команда</div>
                    <div>Наши проекты</div>
                    <div>Новости</div>
                    <div>Блог</div>
                    <div>Где купить</div>
                    <div>Контакты</div>
                </div>
            </div>
        </footer>
    );
}