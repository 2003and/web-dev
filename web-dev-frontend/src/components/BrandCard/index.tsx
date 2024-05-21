import Image from 'next/image';
import { useState } from 'react';

import styles from './BrandCard.module.scss';

export default function BrandCard() {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image fill src="/assets/images/brand.png" alt="brand" />
            </div>
        </div>
    );
}