import React, { useCallback, useState } from "react";

import * as S from "@styles/components/SliderBanner";

const SliderBanner = () => {
  const [type, setType] = useState<number>(0)

  const handleOptionSlide = useCallback((type: number) => {
    setType(type)
  }, [])

  return (
    <S.Container>
      <S.Wrapper>
        <img src="/logo-white.svg" alt="logomarca" />
      </S.Wrapper>
      <S.Dots>
        <button onClick={() => handleOptionSlide(1)}>
          <img src="/dot.svg" alt="" />
        </button>
        <button onClick={() => handleOptionSlide(2)}>
          <img src="/dot-color.svg" alt="" />
        </button>
        <button onClick={() => handleOptionSlide(3)}>
          <img src="/dot.svg" alt="" />
        </button>
      </S.Dots>

    </S.Container>
  );
};

export default SliderBanner;
