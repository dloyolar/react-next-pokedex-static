import { FC } from 'react';

import Head from 'next/head';

interface props {
  title?: string;
}

export const Layout: FC<props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokedex App'}</title>
        <meta name="author" content="Diego Loyola" />
        <meta name="description" content={`Pokemon Information ${title} `} />
        <meta name="keywords" content={`${title}, pokemon, pokedex `} />
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
