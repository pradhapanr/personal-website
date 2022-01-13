import React from 'react';
import { Container, Heading, Text, Box, Image } from '@chakra-ui/react';
import Section from '../../components/Section';

const ApplyBoard = () => {
  return (
    <Container padding="0">
      <Heading as="h2" variant="page-title" paddingBottom="4">
        My time at ApplyBoard
      </Heading>
      <Box key="intro" paddingBottom="4">
        <Text>
          In the fall semester of my third year, I had the great opportunity to
          work as a Software Engineer Intern at ApplyBoard! Over the course of 4
          months, I was able to learn an amazing amount about full stack
          development. This page will encapsulate what I have picked up and
          accomplished during my time there.
        </Text>
      </Box>
      <Box key="companyIntro" paddingBottom="4">
        <Heading as="h3" variant="section-title">
          What is ApplyBoard?
        </Heading>
        <Text>
          ApplyBoard is an education startup founded in Waterloo. They are a
          recruitment platform that helps international students apply to
          universities across the world. They are one of the fastest growing
          companies in Canada, and achieved unicorn status in 2020.
        </Text>
        <Image
          padding="5"
          src="https://www.communitech.ca/assets/image-cache/N1Y4A4090-2-1066x640.37c250393bc77392feb2d06b2d89f07f.jpg"
          alt="Applyboard Office"
          borderRadius="30"
        />
        <Text>
          Pictured above in the middle are the 3 co-founders and brothers, Meti,
          Massi, and Martin Basiri. As international students, they realized
          that the process of applying to schools was long, strenuous, and
          expensive. They founded ApplyBoard in 2015, hoping to provide students
          with a better experience than they had before.
        </Text>
        <Text paddingTop="5">
          ApplyBoard uses AI to help students find programs which are naturally
          best suited to them, and also have a high likelyhood of accepting
          them. There are also other factors, such as VISA probability and work
          permits that are accounted for, which can help students and recruiters
          make informed decisions about their futures.
        </Text>
      </Box>
      <Box key="goals" paddingBottom="4">
        <Heading as="h3" variant="section-title">
          Goals
        </Heading>
        <Text>
          My first goal was focused on improving my{' '}
          <b>depth and breadth of understanding</b>. Previously, I could be slow
          to picking up new technologies and refining my skills in them. I
          challenged myself by trying to pick up as many different technologies
          as I could. During my time, I worked in React, NestJS, Ruby on Rails,
          as well as a variety of developer tools (i.e Postman) that challenged
          me to learn more.
        </Text>
        <Text paddingTop="4">
          My second goal was to enhance my technological literacy. I found that
          when speaking about personal projects or technology in general, that I
          wasn't able to provide relative information in a concise manner. I
          wanted to tackle this by speaking with members of my team who are
          experienced with providing high level overviews, such as my product
          manager or development manager. By the end of my term, I was able to
          provide a demo for a feature I released to our engineering department
          of over 100 people.
        </Text>
        <Text paddingTop="4">
          Finally, my last goal was to develop my problem solving skills more.
          Working in a large production codebase meant that I was destined to
          face bugs, issues, and some tech debt that I would need to fix. All of
          these would act as opportunities for me to improve my problem solving
          skills, by being able to find a solution and implement it in a
          reasonable amount of time. I found that as my problem solving improved
          with work experience, I was able to solve more technical questions
          from websites such as LeetCode. I was able to solve 70 of these
          questions over 3 months!
        </Text>
      </Box>
      <Box key="jobDescription" paddingBottom="4">
        <Heading as="h3" variant="section-title">
          Job Description
        </Heading>
        <Text>
          During my time at ApplyBoard, I worked as a full stack engineer. I
          used React in our frontend and updated old modules with new practice
          such as hooks and functional components. I also implemented precision
          event tracking to capture user flow and action with a custom hook. At
          ApplyBoard, testing was necessary and code coverage was enforced in
          our pipeline. I wrote several unit and integration tests with Jest and
          RTL to ensure I met our development standards.
        </Text>
        <Text paddingTop="4">
          I worked in two separate backends, one was written with Ruby on Rails
          and the other was in NestJS. I created an API for interacting with a
          data parser that I built to handle uploads of user information. While
          both of these technlogies were new to me, Rails was definitely more
          challenging. I already had experience with backend development in
          JavaScript with Express, but I had no prior knowledge of Ruby.
          Thankfully, I was provided many opportunities to develop that with
          pair programming along side other engineers, as well as modules on
          LinkedIn Learning.
        </Text>
        <Image
          padding="5"
          src="https://i.imgur.com/6hMlg2G.png"
          alt="Drawn Version of Co-ops"
          borderRadius="30"
        />
        <Text>
          I was also able to participate in a bunch of fun activities while I
          was at ApplyBoard. I was given the opportunity to participate in a
          marketing campaign as a university student where I got this sweet
          drawing of me and some of the other co-op students! We also had a lot
          of fun events and socials, thanks to our great co-op manager Noora.
          Because of the timing, I also got to attend our end of year party,
          where I saw my team in person and had a great time!
        </Text>
      </Box>
      <Box key="conclusion" paddingBottom="4">
        <Heading as="h3" variant="section-title">
          Conclusion
        </Heading>
        <Text>
          Working at a unicorn is not easy, especially as a first experience. I
          definitely struggled when I first started, but my team was able to
          support me and help me grow in to a much stronger and more confident
          engineer by the end of my work term. The experience I have gained in
          these last 4 months is invaluable and helped me grow my passion for
          software engineering even more. I could not have asked for a better
          company to start my journey as a professional developer.
        </Text>
      </Box>
      <Box key="acknowledgments" paddingBottom="4">
        <Heading as="h3" variant="section-title">
          Acknowledgments
        </Heading>
        <Text>
          There's a few people who helped make my experience at ApplyBoard
          especially memorable. Thanks to Matt Bullock, Dan Taylor, Dakota St.
          Laurent, and Michael Souza for all of the insight and feedback you
          have provided me. I would not be half the developer I am now without
          your constant feedback and support, and I am extremely grateful to
          have the chance to work alongside you and the rest of RPJ!
        </Text>
      </Box>
    </Container>
  );
};

export default ApplyBoard;
