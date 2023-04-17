import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import InfoBar from '@/component/info-bar/InfoBar';
import Appointment from '@/component/management-page/appointment';
import styles from '@/styles/management.module.css';

export default function Management() {
  const router = useRouter();
  const { management } = router.query;

  const activeCategory =
    typeof management === 'string' ? management : management?.[0] || '';
  const allowedRoutes = [
    'appointment',
    'member',
    'product',
    'image',
    'review',
    'insurance',
    'support',
  ];

  if (!allowedRoutes.includes(activeCategory)) {
    return <ErrorPage statusCode={404} />;
  }

  const pageTitle =
    activeCategory === 'appointment'
      ? '予約管理'
      : activeCategory === 'member'
      ? '会員管理'
      : activeCategory === 'product'
      ? '商品管理'
      : activeCategory === 'image'
      ? '画面管理'
      : activeCategory === 'review'
      ? 'レビュー管理'
      : activeCategory === 'insurance'
      ? '車検整備管理'
      : activeCategory === 'support'
      ? 'サポート'
      : '管理システム';

  switch (activeCategory) {
    case 'appointment':
      return (
        <div className={styles.mainContainer}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <InfoBar activeCategory={activeCategory} pageTitle={pageTitle} />
          <Appointment />
        </div>
      );
    case 'member':
      return (
        <div className={styles.mainContainer}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <InfoBar activeCategory={activeCategory} pageTitle={pageTitle} />
          <h1>Member Page</h1>
        </div>
      );
    case 'product':
      return (
        <div className={styles.mainContainer}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <InfoBar activeCategory={activeCategory} pageTitle={pageTitle} />
          <h1>product Page</h1>
        </div>
      );
    case 'image':
      return (
        <div className={styles.mainContainer}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <InfoBar activeCategory={activeCategory} pageTitle={pageTitle} />
          <h1>image Page</h1>
        </div>
      );
    case 'review':
      return (
        <div className={styles.mainContainer}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <InfoBar activeCategory={activeCategory} pageTitle={pageTitle} />
          <h1>review Page</h1>
        </div>
      );
    case 'insurance':
      return (
        <div className={styles.mainContainer}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <InfoBar activeCategory={activeCategory} pageTitle={pageTitle} />
          <h1>insurance Page</h1>
        </div>
      );
    case 'support':
      return (
        <div className={styles.mainContainer}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <InfoBar activeCategory={activeCategory} pageTitle={pageTitle} />
          <h1>support Page</h1>
        </div>
      );
  }
}
