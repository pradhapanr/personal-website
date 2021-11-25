import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../components/layouts/Article';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/Project';
import P from '../../components/Paragraph';

const Work = () => (
  <Layout title="GameBuddy">
    <Container>
      <Title>
        GameBuddy <Badge>2021</Badge>
      </Title>
      <P>
        A discord bot that was put together for the BComp Hackathon to make easy
        tasks even easier. With this bot, things like flipping a coin,
        formulating a poll, creating an online chess match, or comparing stats
        and positions in ranking on the popular game League of Legends can be
        done in simple text commands on the discord server the bot is on.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://github.com/pradhapanr/DiscordBot">
            https://github.com/pradhapanr/DiscordBot{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Express, MongoDB, Discord.js</span>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Databases, Server Management, Rest APIs, HTTP Requests</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/league_bot.png" alt="GameBuddy" />
    </Container>
  </Layout>
);

export default Work;
