import React from 'react';

import * as S from '@styles/pages';
import Layout from '@layout/LayoutDefault';
import SliderBanner from '@components/SliderBanner';

const Home: React.FC = () => {
  return (
    <Layout>
      <S.Container>
        <SliderBanner />
      </S.Container>
    </Layout>
  )
}

export default Home;