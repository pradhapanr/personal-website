import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Link
        href="https://www.gofundme.com/en-ca/small-business-relief-fundraisers"
        colorScheme="whiteAlpha"
        isExternal
      >
        {' '}
        Support small businesses!
      </Link>
    </Box>
  );
};

export default Footer;
