import Layout from '../components/Layout';
import GridView from '../components/GridView';
import Featured from '../components/Featured';
import Head from 'next/head';
import Hero from '../components/Hero';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Monster - A curated collection of resourceful link powered by AIrtable
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />

        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Head></Head>
      <Hero />
      <Featured />
      <GridView />
    </Layout>
  );
}
