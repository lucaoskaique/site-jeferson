import React from "react";
import Link from 'next/link'

import * as S from "@styles/components/Rodape";

const Rodape = () => {
  return (
    <S.Container>
      <div>
        <Link href="">Início</Link>
        <Link href="">Notícias</Link>
        <Link href="">Mídia</Link>
        <Link href="">Transparência</Link>
        <Link href="">Propostas</Link>
        <Link href="">Pronunciamentos</Link>
        <Link href="">Participe</Link>
        <Link href="">Contato</Link>
        <Link href="">Gabinete: (51) 3210.2470</Link>
      </div>
      <div>
        <b>Links Importantes</b>
        <Link href="">ptsul.org.br</Link>
        <Link href="">gov.br</Link>
        <Link href="">pt.org.br</Link>
        <Link href="">democraciasocialista.org.br</Link>
        <Link href="">marchamulheres.wordpress.com</Link>
      </div>
      <div>
        <img src="/logo-white.svg" alt="logomarca" />
        <div>
          <img src="/facebook-light.svg" alt="facebook" />
          <img src="/twitter-light.svg" alt="twitter" />
          <img src="/instagram-light.svg" alt="instagram" />
        </div>
      </div>
    </S.Container>
  );
};

export default Rodape;
