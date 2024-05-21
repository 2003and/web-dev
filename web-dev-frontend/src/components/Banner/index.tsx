import Image from 'next/image';
import { useState } from 'react';

import styles from './Banner.module.scss';

export default function Banner() {

    return (
        <div className={styles.banner}>
            <div className={styles.bannerImage}>
                <Image 
                    fill
                    src="/assets/images/banner.png"
                    alt="banner_placeholder"
                />
            </div>
        </div>
    );
}