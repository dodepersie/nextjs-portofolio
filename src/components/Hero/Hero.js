import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div 
    data-aos="fade-right"
  >
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      <Typewriter
      words={
      ['Hai!', 
        'Hello!', 
        '안녕!', 
        'こんにちは!', 
        '你好!', 
        'Bonjour!', 
        '¡Hola!', 
        'Привет!', 
        'Zdravo!', 
        'Kumusta!', 
        'नमस्ते!', 
        'Szia!', 
        'Ciao!', 
        'ជំរាបសួរ!', 
        'ສະບາຍດີ!', 
        'ဟယ်လို!', 
        'สวัสดี!', 
        'Chào!', 
        '!سلام']
      }
      loop={999}
      cursor
      cursorStyle='_'
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
      </SectionTitle>
      <SectionText>
        I'm Mahadi Saputra. A information system student at ITB STIKOM Bali & HELP University Malaysia who like to code (≧∀≦)ゞ
      </SectionText>
      <Button onClick={() => window.location.href = '#projects'}>
        Learn more 🤔
      </Button>
    </LeftSection>
  </Section>
  </div>
);

export default Hero;