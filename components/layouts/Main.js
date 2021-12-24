import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../Navbar';
import { Box, Container } from '@chakra-ui/react';
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
        <meta
          property="og:image"
          content="https://images.wallpaperscraft.com/image/single/mask_totem_smoke_192795_2560x1080.jpg"
        />
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
