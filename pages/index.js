import Layout from '../components/Layout';
import Nav from '../components/Header/Nav';
import Hero from '../components/Hero/Hero';
import Form from '../components/Inputs/Form';
import GridView from '../components/GridView';
import Head from 'next/head';

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
      <Nav />
      <Hero />

      <GridView />
    </Layout>
  );
}
