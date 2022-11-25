import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '2x', text: 'Winning Computer Competition'},
  { number: '5+', text: 'Open Source Projects'},
  { number: '10+', text: 'Years Coding Experiences', },
  { number: '2000+', text: 'Followers on Instagram', }
];

const Acomplishments = () => (
  <div data-aos="fade-up">
    <Section>
      <SectionTitle>Accomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
    </div>
);

export default Acomplishments;
