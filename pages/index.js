import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/Paragraph';
import { BioSection, BioYear } from '../components/Bio';
import Layout from '../components/layouts/Article';
import Section from '../components/Section';
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoPython,
  IoLogoJavascript
} from 'react-icons/io5';
import {
  SiJava,
  SiCsharp,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiNestjs,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiFlutter
} from 'react-icons/si';
import Footer from '../components/Footer';

const Home = () => {
  const openNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg="whiteAlpha.200"
        >
          Hello, I&apos;m a full-stack developer based in Ontario!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Pradhapan Rajendran
            </Heading>
            <p>Software Engineer, currently with ApplyBoard</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/prad_pic.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Hi there, my name's Pradhapan but I usually go by <b>Prad</b>. I'm a
            third year student at the University of Guelph currently in Honours
            Computer Science and pursuing a minor in Mathematics.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Tech Stack
          </Heading>
          {/* <Paragraph>
          <b> I am proficient with... </b>
          <List>
            <ListItem pl={10}> • Python </ListItem>
            <ListItem pl={10}> • C# </ListItem>
            <ListItem> hello </ListItem>
            <ListItem> hello </ListItem>
          </List>
        </Paragraph> */}
          <Heading fontSize={18}>The languages I am proficient in:</Heading>
          <SimpleGrid columns={2} spacing={10} pt={5}>
            <Button
              leftIcon={<Icon as={IoLogoPython} />}
              onClick={() => openNewTab('https://www.python.org/')}
            >
              <b>Python</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiCsharp} />}
              onClick={() =>
                openNewTab('https://docs.microsoft.com/en-us/dotnet/csharp/')
              }
            >
              <b>C#</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiJava} />}
              onClick={() => openNewTab('https://www.oracle.com/ca-en/java/')}
            >
              <b>Java</b>
            </Button>
            <Button
              leftIcon={<Icon as={IoLogoJavascript} />}
              onClick={() =>
                openNewTab(
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                )
              }
            >
              <b>Javascript</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiCplusplus} />}
              onClick={() => openNewTab('https://isocpp.org/')}
            >
              <b>C/C++</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiMysql} />}
              onClick={() => openNewTab('https://www.mysql.com/')}
            >
              <b>SQL</b>
            </Button>
          </SimpleGrid>
          <Heading fontSize={18} pt={5}>
            The web/mobile development frameworks I work with:
          </Heading>
          <SimpleGrid columns={2} spacing={10} pt={5}>
            <Button
              leftIcon={<Icon as={SiReact} />}
              onClick={() => openNewTab('https://reactjs.org/')}
            >
              <b>React</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiTypescript} />}
              onClick={() => openNewTab('https://www.typescriptlang.org/')}
            >
              <b>TypeScript</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiExpress} />}
              onClick={() => openNewTab('https://expressjs.com/')}
            >
              <b>Express</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiNestjs} />}
              onClick={() => openNewTab('https://nestjs.com/')}
            >
              <b>NestJS</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiNodedotjs} />}
              onClick={() => openNewTab('https://nodejs.org/en/')}
            >
              <b>Node.js</b>
            </Button>
            <Button
              leftIcon={<Icon as={SiFlutter} />}
              onClick={() => openNewTab('https://flutter.dev/')}
            >
              <b>Flutter</b>
            </Button>
          </SimpleGrid>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Timeline
          </Heading>
          <BioSection>
            <BioYear>2016</BioYear>
            Started my interest in computer science with game development in
            Unity and Unreal Engine
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Enrolled in Honours Computer Science at the University of Guelph
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started officially working as a freelancer, creating Discord bot
            applications for amateur e-sports circuits
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Currently working at ApplyBoard as a Software Engineering intern
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Incoming Software Development Intern at Amazon
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/pradhapanr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @pradhapanr
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/pradhapanr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Home;
