import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <div data-aos="fade-up" data-aos-duration="1000">
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
      </div>
      <SocialIconsContainer>
        <CompanyContainer data-aos="fade-right" data-aos-duration="1000">
        <Slogan>@ 2022 - mahadisaputra.my.id</Slogan>
        </CompanyContainer>
        <SocialContainer data-aos="fade-left" data-aos-duration="1000">
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
    </FooterWrapper>
  );
};

export default Footer;
