import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { GiNinjaHead } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const HeaderNotFound = () =>  {
  return (
    <Container>
      <Div1 data-aos="fade-right">
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white'}}>
            <GiNinjaHead size="3rem"/> <Span>Mahadi Saputra</Span>
          </a>
        </Link>
      </Div1>
      <Div3 data-aos="fade-left">
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

export default HeaderNotFound;
