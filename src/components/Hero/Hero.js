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
        Hi i'm<br />
        Mahadi Saputra
      </SectionTitle>
      <SectionText>
        A undergraduate system information student at ITB STIKOM Bali & HELP University Malaysia who passionate with code
      </SectionText>
      <Button onClick={() => window.location.href = '#projects'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
  </div>
);

export default Hero;