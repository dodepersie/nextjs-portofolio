import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <div data-aos="fade-right" data-aos-duration="500">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="https://wa.me/+6287862191120">+6287862191120</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:me@mahadisaputra.id">me@mahadisaputra@.my.id</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>@ 2022 - mahadisaputra.my.id</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/dodepersie">
        <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/dodepersie">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/dodepersie">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </div>
    </FooterWrapper>
  );
};

export default Footer;
