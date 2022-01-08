import React from "react";

import * as S from "@styles/components/MandateInfo";

const MandateInfo = () => {
  return (
    <S.Container>
      <p><b>Acompanhe nosso mandato!</b> Fique por dentro de notícias e novidades</p>
      <form>
        <input placeholder="Nome" />
        <input placeholder="Cidade" />
        <input placeholder="Celular" />
        <input placeholder="Email" />
        <input type="submit" value="Enviar"/>
      </form>
    </S.Container>
  );
};

export default MandateInfo;
