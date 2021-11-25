import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';
import Layout from '../../components/layouts/Article';

const Work = () => (
  <Layout title="Pokeflutter">
    <Container>
      <Title>
        Pokeflutter <Badge>2021</Badge>
      </Title>
      <P>
        An introductory project to Flutter to learn how to organize UI
        components, and make simple API calls in Dart.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://github.com/pradhapanr/pokeflutter">
            https://github.com/pradhapanr/pokeflutter{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter (Dart)</span>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Mobile Development, UI Design</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pokedex.png" alt="Pokeflutter" />
    </Container>
  </Layout>
);

export default Work;
