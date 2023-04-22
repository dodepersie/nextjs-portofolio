import React from 'react';

import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '2x', text: 'Winning Computer Competition'},
  { number: '5+', text: 'Open Source Projects'},
  { number: '10+', text: 'Years Front-End Experiences', },
  { number: '3000+', text: 'Instagram Followers', }
];

const Acomplishments = () => (
  <div data-aos="fade-up">
    <Section>
      <SectionDivider />
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
