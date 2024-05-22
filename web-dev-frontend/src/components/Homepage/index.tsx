'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

import CatalogCard from '../CatalogCard';
import styles from './Homepage.module.scss';
// import { useCategoriesQuery } from '@/hooks/useCategoriesQuery';
import Link from 'next/link';
import Banner from '../Banner';
import CategoryCardSmall from '../CategoryCardSmall';
import CategoryCardBig from '../CategoryCardBig';
import CategoryCardWide from '../CategoryCardWide';
import BrandCard from '../BrandCard';
import NewsCard from '../NewsCard';
import ReactQueryProvider from '@/providers/react-query';
import { useNewsQuery } from '@/hooks/useNewsQuery';
import Catalog from '../Catalog';

export default function Homepage() {
    const [state, setState] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    
    const { data, isLoading, isSuccess } = useNewsQuery();
    // console.log(data)

    return (
        <div>
        <ReactQueryProvider>
            <div className="container">
            <Banner />
            <h2 className={styles.title}>
            Тренажеры для дома
            </h2>
            <div className={styles.categoryGrid}>
                <CategoryCardBig />
                <CategoryCardBig />
                <div className={styles.categoryGridVert}>
                 <CategoryCardSmall />
                 <CategoryCardSmall />
                </div>
                <div className={styles.categoryGridVert}>
                 <CategoryCardSmall />
                 <CategoryCardSmall />
                </div>
                <CategoryCardSmall />
                <CategoryCardSmall />
                <CategoryCardSmall />
                <CategoryCardSmall />
                
            </div>
            <div className={styles.all_categories_btn}>
            Все категории
            </div>
            <h2 className={styles.title}>
            Для фитнес клубов
            </h2>
            <div className={styles.categoryGridFitclub}>
                <div className={styles.categoryGrid}>
                <CategoryCardWide />
                <div></div> {// crutch
                }
                </div>
                <div className={styles.categoryGrid}>
                <CategoryCardSmall />
                <CategoryCardSmall />
                </div>
                <div className={styles.categoryGrid}>
                <CategoryCardSmall />
                <CategoryCardSmall />
                </div>
                <div className={styles.categoryGrid}>
                <CategoryCardSmall />
                <CategoryCardSmall />
                </div>

            </div>
            <div className={styles.all_categories_btn}>
            Все категории
            </div>

            <section className={styles.catalog}>
                <h2 className={styles.title}>Продукты</h2>
                <Catalog />
            </section>
            </div>
            <section className={styles.ideasBG}>
                <div className="container"> 
                    <h2 className={styles.ideasTitle}>Идеи и подборки</h2>
                    <div className={styles.ideasGrid}>
                        <div className={styles.ideasWide}>
                            <Image width={650} height={360} src="/assets/images/ideas/idea1.png" alt="idea 1" />
                        </div>
                        <div/>
                        <div className={styles.ideasNarrow}>
                            <Image width={290} height={360} src="/assets/images/ideas/idea2.png" alt="idea 2" />
                        </div>
                        <div className={styles.ideasNarrow}>
                            <Image width={290} height={360} src="/assets/images/ideas/idea3.png" alt="idea 3" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container"> 
                <section className={styles.brands}>
                    <h2 className={styles.brandsTitle}>Популярные бренды</h2>
                    <div className={styles.brandsGrid}>
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />
                    </div>
                </section>
                <section className={styles.description}>
                    <h2 className={styles.title}>О компании</h2>
                    <div className={styles.horizImgSep}>
                        <span className={styles.decriptionGrid}>
                            <div className={styles.subtitle}>Надёжный партнер с 2005 года для сотен компаний от Калининграда до Владивостока</div>
                            <div>
                                <div>Оптима Импорт — один из самых крупных импортеров фитнес-оборудования, эксклюзивно представляет на российском рынке ведущих мировых производителей: Sole Fitness, Optima Fitness, Halley, Marcy, SKI Simulator и др.</div>
                                <p> </p>
                                <div>Мы предлагаем широкий спектр самой современной и качественной продукции как для домашнего, так и для коммерческого фитнеса.</div>
                            </div>
                            <div className={styles.all_categories_btn}>Подробнее о компании</div>
                        </span>
                        <div className={styles.descriptionImage}>
                            <Image width={1023} height={612} src="/assets/images/Russia.png" alt=""/>
                        </div>
                    </div>
                </section>
                <div className={styles.title}>Новости</div>
                <div className={styles.newsGrid}>
                        {data?.map(news => (<NewsCard {...news} key={news.id}/>))}
                </div>
            </div>
        </ReactQueryProvider>
        </div> 
    );
}