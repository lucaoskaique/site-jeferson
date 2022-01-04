import React from "react";
import Image from "next/image";

import { Container } from "@styles/components/Header";

const Header: React.FC = () => {
  return (
    <Container>
      <Image src="/logo.svg" alt="logomarca" width={200} height={103} />

      <div>
        <a href="">
          <p>Conheça o Jeferson</p>
          <Image
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
        <Image src="/facebook.svg" alt="logomarca" width={18} height={18} />
        <Image src="/twitter.svg" alt="logomarca" width={18} height={18} />
        <Image src="/instagram.svg" alt="logomarca" width={18} height={18} />
      </ul>
    </Container>
  );
};

export default Header;
