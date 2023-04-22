import React from 'react';
import { DiReact, DiCode, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <div data-aos="fade-up">
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've done some projects by myself & I'm a Front-End addict and currently learning about Back-End (‾◡◝)
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Web Dev</ListTitle>
          <ListParagraph>
            Experience with<br />
            CSS, HTML, PHP, Web Deployment & WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            React JS, Next JS, Bootstrap, Tailwind & mySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Collaborate</ListTitle>
          <ListParagraph>
            Can collaborate with <br />
            Git, especially GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </div>
  </Section>
);

export default Technologies;
