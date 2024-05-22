import Image from 'next/image';
import { useState } from 'react';

import styles from './CatalogCard.module.scss';
import { Product } from '@/types/product';

export default function CatalogCard(props: Product) {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    fill
                    src={`/db_images/product/${props.image}`}
                    alt="picture"
                />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>{props.name}</span>
                <span className={styles.cardDescText}>{props.description}</span>
                <div className={styles.cardBottomGrid}>
                    <span className={styles.cardDescPrice}>{props.price} ₽</span>
                    <button className={styles.cardDescBuyBtn}>Купить</button>
                </div>
            </div>
        </div>
    );
}