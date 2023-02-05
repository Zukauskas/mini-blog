import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Made by following <a href="https://nextjs.org/learn">Next.js tutorial</a>.
                </p>
                <p> For educational and entertainment purposes only</p>
                <Link href="/blog">Blog</Link>
            </section>
        </Layout>
    );
}
