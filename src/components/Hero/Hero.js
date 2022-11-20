import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div 
    data-aos="fade-right" 
    data-aos-duration="1000"
  >
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello👋 I'm<br />
        Mahadi Saputra
      </SectionTitle>
      <SectionText>
        A undergraduate system information student at ITB STIKOM Bali and HELP University Malaysia who likes to coding
      </SectionText>
      <Button onClick={() => window.location = '#about'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
  </div>
);

export default Hero;