import Layout from '../components/Layout';
import Nav from '../components/Header/Nav';
import GridView from '../components/GridView';
import Featured from '../components/Featured';
import Head from 'next/head';
import ColorSwitcher from '../components/ColorSwitcher';
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
      <Featured />

      <GridView />
    </Layout>
  );
}
