import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { GiNinjaHead } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  {
  return (
    <Container>
      <Div1 data-aos="fade-right" data-aos-duration="1000">
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white'}}>
            <GiNinjaHead size="3rem"/> <Span>Mahadi Saputra</Span>
          </a>
        </Link>
      </Div1>
      <Div2 data-aos="zoom-out-down" data-aos-duration="1000">
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Tech</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3 data-aos="fade-left" data-aos-duration="1000">
        <SocialIcons href="https://github.com/dodepersie">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/dodepersie">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/dodepersie">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}

export default Header;
