import Layout from '../components/Layout';
import GridView from '../components/GridView';
import Featured from '../components/Featured';
import Head from 'next/head';
import Hero from '../components/Hero';
export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>
          Monster - A curated collection of resourceful links powered by
          Airtable
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
      <Hero />
      <Featured />
      <GridView />
    </Layout>
  );
}

// This will shoot the server at api/users

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/users`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
