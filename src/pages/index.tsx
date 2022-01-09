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
          <S.Story>
            <div>
              <img src="/photo-bio.png" alt="photo" />
              <div>
                <h3>Conheça o Jeferson</h3>
                <p>Jeferson Oliveira Fernandes nasceu em 1970, na cidade de Santo Ângelo. Filho do casal Deniz e Dorvalina, aos 12 anos mudou-se para São Luiz Gonzaga. Já na década de 90, foi morar em Santa Rosa, onde concluiu o curso de Direito. É um filho das Missões, que no parlamento gaúcho luta pelo desenvolvimento da região Noroeste. Sua trajetória política iniciou na pastoral da juventude e no movimento estudantil, quando foi presidente do DCE da Unijuí. Aos 18 anos, filiou-se ao PT e em 1996, foi candidato a vereador em Santa Rosa e ficou na suplência. No ano seguinte, assumiu como assessor do então deputado estadual Elvino Bohn Gass. Como advogado, atuou no Direito Público e em defesa dos direitos humanos, na proteção dos direitos das crianças, adolescentes e jovens, principalmente no tema da educação. Acompanhou o processo de instalação dos IFETs na região e também foi um dos principais articuladores da Universidade Federal da Fronteira Sul.</p>
              </div>
            </div>
          </S.Story>
        </S.About>
      </S.Container>
    </Layout>
  )
}

export default Home;