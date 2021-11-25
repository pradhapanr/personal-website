import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/Article';
import Section from '../components/Section';
import { WorkGridItem } from '../components/GridItem';

import pokedex from '../public/images/works/pokedex.png';
import leaderboard from '../public/images/works/leaderboard.png';
import parser from '../public/images/works/parser.png';
import excel from '../public/images/works/excel.png';

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="pokeflutter"
            title="Pokeflutter"
            thumbnail={pokedex}
          >
            Pokedex app made in Flutter that contains all 151 original Pokemon
            with all of their recorded biological traits.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="gamebuddy"
            title="GameBuddy"
            thumbnail={leaderboard}
          >
            Discord bot that finds statistics and provide real-time coverage of
            players in the game League of Legends.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="gpxparser" title="GPXParser" thumbnail={parser}>
            A full stack application desiged to provide a simple interface for
            users to process and manipulate GPX files.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="leagueexcel" title="LeagueExcel" thumbnail={excel}>
            An app that takes a users League of Legends profile and returns a
            populated spreadsheet with in depth statistics.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
