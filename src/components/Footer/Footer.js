import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
    <div data-aos="fade-up">
      <LinkList>
        <LinkColumn>
          <LinkTitle>WhatsApp</LinkTitle>
          <LinkItem href="https://wa.me/+6287862191120?text=Hi, i want to use your service to develop our site">+62 878-6219-1120</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:me@mahadisaputra.my.id">me@mahadisaputra@.my.id</LinkItem>
        </LinkColumn>
      </LinkList>
      </div>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>@ {currentYear} - mahadisaputra.my.id</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/dodepersie">
        <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/mahadisptr">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/dodepersie">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
