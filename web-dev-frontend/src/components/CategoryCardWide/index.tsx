import Image from 'next/image';
import { useState } from 'react';

import styles from './CategoryCard.module.scss';

export default function CategoryCardWide() {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    width={670}
                    height={260}
                    src="/assets/images/category_fitclub/профессиональные тренажеры.png"
                    alt="category_wide"
                />
            </div>

            {/* <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>Название</span>
                <span className={styles.cardDescText}>Описание</span>

                <span className={styles.cardDescPrice}>599 руб.</span>

                <button className={styles.cardDescBuyBtn}>Заказать</button>

            </div> */}
        </div>
    );
}