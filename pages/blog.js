import Layout from '../components/Layout';
import Nav from '../components/Header/Nav';
import Head from 'next/head';
import Featured from '../components/Featured';

export default function blog() {
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
      <Featured />
    </Layout>
  );
}
