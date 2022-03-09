import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface props {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokedex App'}</title>
        <meta name="author" content="Diego Loyola" />
        <meta name="description" content={`Pokemon Information ${title} `} />
        <meta name="keywords" content={`${title}, pokemon, pokedex `} />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`Page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
