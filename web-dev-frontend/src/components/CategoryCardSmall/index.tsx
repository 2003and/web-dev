import Image from 'next/image';
import { useState } from 'react';

import styles from './CategoryCard.module.scss';

export default function CategoryCardSmall() {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    width={330}
                    height={200}
                    src="/assets/images/category/батуты.png"
                    alt="category_small"
                />
            </div>
{/*         <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>Название</span>
                <span className={styles.cardDescText}>Описание</span>

                <span className={styles.cardDescPrice}>599 руб.</span>

                <button className={styles.cardDescBuyBtn}>Заказать</button>

            </div> */}
        </div>
    );
}