import Layout from '../components/Layout';
import Nav from '../components/Header/Nav';
import GridView from '../components/GridView';
import Head from 'next/head';
import Stacks from '../components/Stacks';
export default function TheStack() {
  return (
    <Layout>
      <Head>
        <title>TheStack - A collection of curated resourceful links.</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Head>
        <meta property='og:title' content='Monster link' key='title' />
      </Head>
      <Nav />
      <Stacks />
    </Layout>
  );
}
