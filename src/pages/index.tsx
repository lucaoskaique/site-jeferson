import React from 'react';

import * as S from '@styles/pages';

import Layout from '@layout/LayoutDefault';
import SliderBanner from '@components/SliderBanner';
import MandateInfo from '@components/MandateInfo';

const Home: React.FC = () => {
  return (
    <Layout>
      <S.Container>
        <SliderBanner />
        <MandateInfo />
        <S.About>
          <h1>Confira nossas redes!</h1>
          <p>Assista os vídeos e leia os tweets do deputado Jeferson</p>
          <S.Networks>
            <div className="youtube">
              <img src="/network1.png" alt="" />
              <img src="/network2.png" alt="" />
            </div>
            <div className="twitter">
              <img src="/network3.png" alt="" />
            </div>
          </S.Networks>
          <a>Confira o canal no Youtube</a>
        </S.About>
      </S.Container>
    </Layout>
  )
}

export default Home;