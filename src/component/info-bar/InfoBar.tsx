import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './InfoBar.module.css';

interface Props {
  activeCategory?: string;
  pageTitle?: string;
}

export default function InfoBar({ activeCategory, pageTitle }: Props) {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/${category}`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoContainer}>
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
        <div className={styles.idAndLocation}>
          <p className={styles.stuffId}>職員ID: number</p>
          <p className={styles.storeLocation}>location</p>
        </div>
      </div>
      <div className={styles.navContainer}>
        <p
          className={`${styles.category} ${
            activeCategory === 'appointment' ? styles.active : ''
          }`}
          onClick={() => handleCategoryClick('appointment')}
        >
          予約管理
        </p>
        <p
          className={`${styles.category} ${
            activeCategory === 'member' ? styles.active : ''
          }`}
          onClick={() => handleCategoryClick('member')}
        >
          会員管理
        </p>
        <p
          className={`${styles.category} ${
            activeCategory === 'product' ? styles.active : ''
          }`}
          onClick={() => handleCategoryClick('product')}
        >
          商品管理
        </p>
        <p
          className={`${styles.category} ${
            activeCategory === 'image' ? styles.active : ''
          }`}
          onClick={() => handleCategoryClick('image')}
        >
          画面管理
        </p>
        <p
          className={`${styles.category} ${
            activeCategory === 'review' ? styles.active : ''
          }`}
          onClick={() => handleCategoryClick('review')}
        >
          レビュー管理
        </p>
        <p
          className={`${styles.category} ${
            activeCategory === 'insurance' ? styles.active : ''
          }`}
          onClick={() => handleCategoryClick('insurance')}
        >
          車検整備管理
        </p>
        <p
          className={`${styles.category} ${
            activeCategory === 'support' ? styles.active : ''
          }`}
          onClick={() => handleCategoryClick('support')}
        >
          サポート
        </p>
      </div>
    </div>
  );
}
