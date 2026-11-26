import { notFound } from 'next/navigation';
import WebsiteHeader from '@/components/WebsiteHeader';
import '@/components/WebsiteHome.css';
import styles from './PortfolioPage.module.css';

const portfolioTitles = {
 'bahuleyan-residence': 'Bahuleyan Residence',
 'ummer-residence': 'Ummer Residence',
};

export const dynamicParams = false;

export function generateStaticParams() {
 return Object.keys(portfolioTitles).map(project => ({ project }));
}

export async function generateMetadata({ params }) {
 const { project } = await params;
 return {
  title: `${portfolioTitles[project]} Portfolio | V4 Building Solutions`,
  alternates: { canonical: `/portfolios/${project}` },
 };
}

export default async function PortfolioPage({ params }) {
 const { project } = await params;
 if (!Object.hasOwn(portfolioTitles, project)) notFound();

 return <div className={`v4-preview ${styles.page}`}>
  <WebsiteHeader />
  <main className={styles.content}>
   <iframe
    className={styles.frame}
    src={`/portfolios/${project}.html`}
    title={`${portfolioTitles[project]} interior design portfolio`}
   />
  </main>
 </div>;
}
