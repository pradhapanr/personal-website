import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../components/layouts/Article';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';

const Work = () => (
  <Layout title="LeagueExcel">
    <Container>
      <Title>
        LeagueExcel <Badge>2020</Badge>
      </Title>
      <P>
        This application was put together for a personal need to record my stats
        in League of Legends. After manually doing it for years in high school,
        I decided to make my own application to do it automatically for me using
        the Riot Games API and Python with openpyxl to modify Excel files.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://github.com/pradhapanr/LeagueExcel">
            https://github.com/pradhapanr/LeagueExcel{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Excel</span>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>
            File Manipulation, HTTP Requests, Object Oriented Programming
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/excel.png" alt="LeagueExcel" />
    </Container>
  </Layout>
);

export default Work;
