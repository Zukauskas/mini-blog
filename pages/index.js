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
          This is a sample website created following <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
        <p> Let's see what we can make of this.</p>
      </section>
      <Link href="/posts/first-post">First Post</Link>
    </Layout>
  );
}
