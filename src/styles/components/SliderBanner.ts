import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/BG.png');
  background-size: cover;
  background-position: left;

  width: 100%;
  height: calc(95vh - 70px);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1170px;
  margin: auto;

  display: flex;

  img {
    width: 672px;
  }
`;
