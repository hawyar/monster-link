import Layout from '../components/Layout';
import Nav from '../components/Header/Nav';
import Hero from '../components/Hero/Hero';
import Form from '../components/Inputs/Form';
import GridView from '../components/GridView';

export default function Home() {
  return (
    <Layout>
      <Nav />
      <Hero />
      <GridView />
      {/* <Form /> */}
    </Layout>
  );
}
