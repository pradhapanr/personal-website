import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../Navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../Footer';
import VoxelLoader from '../VoxelLoader';

const LazyVoxel = dynamic(() => import('../VoxelImage'), {
  ssr: false,
  loading: () => <VoxelLoader />
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Prad Homepage" />
        <meta name="author" content="Pradhapan Rajendran" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Prad Homepage" />
        <meta property="og:type" content="website" />
        <title>Prad</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxel />

        {children}
      </Container>
    </Box>
  );
};

export default Main;
