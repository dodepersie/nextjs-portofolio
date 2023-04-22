import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const HeroNotFound = () => (
  <div 
    data-aos="fade-right"
  >
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        404<br />
        Page Not Found
      </SectionTitle>
      <SectionText>
        You are trying to access page that is not exist on this site (￣ ‘i ￣;)
      </SectionText>
      <Button onClick={() => history.back()}>
        Go Back 🫡
      </Button>
    </LeftSection>
  </Section>
  </div>
);

export default HeroNotFound;