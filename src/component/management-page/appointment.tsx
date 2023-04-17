import React, { useState } from 'react';
import styles from './appointment.module.css';

export default function Appointment() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <p className={styles.searchBarTitle}>検索条件</p>
        <div className={styles.searchBar}>
          <div className={styles.searchRequirement}>
            <label className={styles.searchLabel}>相談ID</label>
            <input />
          </div>
          <div className={styles.searchRequirement}>
            <label className={styles.searchLabel}>相談予約日</label>
            <input />
          </div>
          <div className={styles.searchRequirement}>
            <label className={styles.searchLabel}>お客様の名前</label>
            <input />
          </div>
          <div className={styles.searchRequirement}>
            <label className={styles.searchLabel}>返事状況</label>
            <input />
          </div>
        </div>
        <button className={styles.searchBtn}>検索する</button>
      </div>
      <div className={styles.resultContainer}>
        <p className={styles.resultBarTitle}>検索結果</p>
        <div className={styles.resultBar}>
          <div className={styles.resultItemRow}>
            <input type="checkbox" />
            <p className={styles.resultItemTitle}>相談ID</p>
            <p className={styles.resultItemTitle}>お客様の名前</p>
            <p className={styles.resultItemTitle}>相談予約日</p>
            <p className={styles.resultItemTitle}>相談目的</p>
            <p className={styles.resultItemTitle}>予約店舗</p>
            <p className={styles.resultItemTitle}>店舗予約日</p>
            <p className={styles.resultItemTitle}>返事状況</p>
          </div>
          {/* {searchResults.map((item) => ( */}
          <div className={styles.resultItemRow}>
            <input type="checkbox" />
            <p className={styles.resultItem}>相談ID</p>
            <p className={styles.resultItem}>お客様の名前</p>
            <p className={styles.resultItem}>相談予約日</p>
            <p className={styles.resultItem}>相談目的</p>
            <p className={styles.resultItem}>予約店舗</p>
            <p className={styles.resultItem}>店舗予約日</p>
            <p className={styles.resultItem}>返事状況</p>
          </div>
          {/* ))} */}
        </div>
        <button className={styles.dataOutputBtn}>詳細データを表示する</button>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.dataBarTitle}>詳細データ</p>
        <div className={styles.dataBar}>
          <div className={styles.dataContent}>
            <div className={styles.detailedData}>
              <p className={styles.detailedDataItem}>相談ID: </p>
              <p className={styles.detailedDataItem}>お客様の名前: </p>
              <p className={styles.detailedDataItem}>電話番号: </p>
              <p className={styles.detailedDataItem}>メールアドレス: </p>
              <p className={styles.detailedDataItem}>相談予約日: </p>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>相談目的</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>予約店舗</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>店舗予約日</label>
                <input />
              </div>
            </div>
            <div className={styles.detailedData}>
              <p className={styles.buyOrSellDetails}>買う</p>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>メーカー名</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>車種名</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>買い取る</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>総予算</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>月々の予算</label>
                <input />
              </div>
            </div>
            <div className={styles.detailedData}>
              <div className={styles.detailedDataWrapper}>
                <p className={styles.buyOrSellDetails}>売る</p>
                <label className={styles.detailedDataTitle}>メーカー名</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>車種名</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>年式</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>走行距離</label>
                <input />
              </div>
              <div className={styles.detailedDataWrapper}>
                <label className={styles.detailedDataTitle}>地域</label>
                <input />
              </div>
            </div>
          </div>
          <button className={styles.confirmBtn}>確認</button>
        </div>
      </div>
    </div>
  );
}
