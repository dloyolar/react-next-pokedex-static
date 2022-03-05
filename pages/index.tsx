import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import { Layout } from '../components/layouts';
import pokeApi from '../api/pokeApi';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('pokemon?limit=151');

  return {
    props: {
      pokemons: data.results,
    },
  };
};

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title="Pokemon List">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

export default HomePage;
