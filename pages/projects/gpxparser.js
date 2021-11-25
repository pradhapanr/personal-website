import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';
import Layout from '../../components/layouts/Article';

const Work = () => (
  <Layout title="GPXParser">
    <Container>
      <Title>
        GPXParser <Badge>2021</Badge>
      </Title>
      <P>
        This full stack application provides users a simple interface for
        managing and editing GPX files. The file parser was written in C and
        connected to a backend API in Express. It was then connected to a mySQL
        database for storage of user files between sessions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://github.com/pradhapanr/GPXParser">
            https://github.com/pradhapanr/GPXParser{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C, JavaScript, jQuery, Node.js, Express, mySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Full Stack Development, REST APIs, Web Design</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/parser.png" alt="GPXParser" />
    </Container>
  </Layout>
);

export default Work;
