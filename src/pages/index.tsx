import React from 'react';

import * as S from '@styles/pages';
import Navbar from '@components/Navbar';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Navbar />
    </S.Container>
  )
}

export default Home;