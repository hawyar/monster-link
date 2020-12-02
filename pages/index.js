import Layout from '../components/Layout';
import GridView from '../components/GridView';
import Featured from '../components/Featured';
import Head from 'next/head';
import ColorSwitcher from '../components/ColorSwitcher';
import Hero from '../components/Hero';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Monster links - A collection of curated resourceful links.
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Head>
        <meta property='og:title' content='Monster link' key='title' />
      </Head>
      <Hero />
      <Featured />
      <GridView />
    </Layout>
  );
}
