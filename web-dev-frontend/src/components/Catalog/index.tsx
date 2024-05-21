'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss';
import { useCategoriesQuery } from '@/hooks/useCategoriesQuery';
import Link from 'next/link';

export default function Catalog() {
    const [state, setState] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    
    const { data, isLoading, isSuccess } = useCategoriesQuery();
    // console.log(data)

    return (
        <div className="container">
            <section className={styles.catalog}>

                
                <button onClick={() => setState(state - 1)}>-</button>
                <div>{state}</div>
                <button onClick={() => setState(state + 1)}>+</button>


                <h2 className={styles.catalogTitle}>Выберите пиццу</h2>
                <ul className={styles.catalogCategory}>
                    <li
                        className={clsx(styles.catalogCategoryItem, categoryId === 0 && styles.active)}
                        onClick={() => setCategoryId(0)}
                    >Все</li>
                    {/* <li className={styles.catalogCategoryItem}>Острые</li>
                    <li className={styles.catalogCategoryItem}>Мясные</li>
                    <li className={styles.catalogCategoryItem}>Сырные</li>
                    <li className={styles.catalogCategoryItem}>Веганские</li> */}
                    
                    {data?.map(category => (
                        <li
                            key={category.id}
                            className={clsx(styles.catalogCategoryItem, categoryId === category.id && styles.active)}
                            onClick={() => setCategoryId(category.id)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>

                <div className={styles.catalogGrid}>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </section>
        </div>
    );
}