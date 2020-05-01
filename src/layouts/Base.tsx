import React from 'react';
// import { YMInitializer } from 'react-yandex-metrika';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box } from '@material-ui/core';
import Header from '../components/partials/Header';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

const MainLayout = ({ children, pageTitle }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle || router.query.title}</title>
      </Head>
      <Box component="div">
        <Header />
        <Box component="main">
          {children}
        </Box>
      </Box>
      {/* <YMInitializer
        accounts={[62488189]}
        options={{ clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }}
      /> */}
    </>
  );
};

export default MainLayout;
