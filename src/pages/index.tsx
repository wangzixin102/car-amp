import Head from '@/app/head';
import InfoBar from '@/component/info-bar/InfoBar';
import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head />
      <InfoBar />
      <div className={styles.mainContent}>content</div>
    </div>
  );
}
