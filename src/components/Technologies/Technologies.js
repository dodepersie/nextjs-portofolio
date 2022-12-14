import React from 'react';
import { DiFirebase, DiReact, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <div data-aos="fade-up">
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have done some projects by myself and i'm a Front-End Web Dev addict and still learning about Back-End Web Dev (‾◡◝)
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            Bootstrap & React.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            mySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Collaborate</ListTitle>
          <ListParagraph>
            Still learning collaborate with <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </div>
  </Section>
);

export default Technologies;
