import React from "react";
import Link from 'next/link';

import * as S from "@styles/components/Navbar";

const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
      <img src="/logo.svg" alt="logomarca" />

      <div>
        <a href="">
          <p>Conheça o Jeferson</p>
          <img
            src="/arrow-down.svg"
            alt="logomarca"
            width={9}
            height={12}
          />
        </a>
        <a href="">Notícias</a>
        <a href="">Mídias</a>
        <a href="">Contato</a>
      </div>

      <ul>
        <Link href="">
          <img src="/facebook.svg" alt="logomarca" />
        </Link>
        <Link href="">
          <img src="/twitter.svg" alt="logomarca" />
        </Link>
        <Link href="">
          <img src="/instagram.svg" alt="logomarca" />
        </Link>
      </ul>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
