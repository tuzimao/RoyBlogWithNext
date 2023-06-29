import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Introduction</p>
        <p>
          (Hi I am Kukido I am a 2 years old cat my hobit is eating and frighting!!!{' '}
          <a href="https://nextjs.org/learn">Check it out</a>.)
        </p>
      </section>
    </Layout>
  );
}