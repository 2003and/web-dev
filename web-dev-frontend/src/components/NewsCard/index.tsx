import Image from 'next/image';
import { useState } from 'react';

import styles from './NewsCard.module.scss';
import { News } from '@/types/news';

export default function NewsCard(props: News) {
    console.log(props)
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    fill
                    src={`/db_images/news/${props.image}`}
                    alt="news"
                />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>{props.title}</span>
                <span className={styles.cardDescText}>{props.description}</span>
                <span className={styles.cardDescDate}>2024.05.17</span>

                <div className={styles.cardBottomGrid}>
                    <span className={styles.cardDescPrice}>599 руб.</span>
                    <button className={styles.cardDescBuyBtn}>Купить</button>
                </div>
            </div>
        </div>
    );
}