import Logo from './Logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = 'whiteAlpha.900';
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? '#20202380' : undefined}
        color={active ? 'white' : inactiveColor}
        _target={_target}
        borderRadius="114"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;

  const openResume = () => {
    const newWindow = window.open(
      '/files/resume.pdf',
      '_blank',
      'noopener, noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#20202380"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="#" path={path} onClick={openResume}>
            Resume
          </LinkItem>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          justifyContent="flex-end"
        >
          <LinkItem
            _target="_blank"
            href="https://github.com/pradhapanr"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub fontSize="25px" />
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://linkedin.com/in/pradhapanr"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoLinkedin fontSize="25px" />
          </LinkItem>
        </Stack>

        <Box
          flex={1}
          align="right"
          display={{ base: 'inline-block', md: 'none' }}
        >
          <Box
            ml={2}
            display={{ base: 'inline-block', md: 'none' }}
            align="right"
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/pradhapanr">
                  GitHub
                </MenuItem>
                <MenuItem as={Link} href="https://linkedin.com/in/pradhapanr">
                  LinkedIn
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
