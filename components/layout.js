import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

const name = 'Tautvydas Blog';
export const siteTitle = 'Minimal Blog made with Next.js';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image priority src="/images/monitor.jpeg" height={400} width={400} alt="monitor" />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image priority src="/images/monitor.jpeg" height={200} width={200} alt="monitor" />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
