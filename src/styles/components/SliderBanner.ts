import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/BG.png');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;

  width: 100%;
  height: calc(95vh - 4.375rem);
  padding-bottom: 5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 73.125rem;
  margin: auto;

  display: flex;

  > img {
    width: 42rem;
  }
`;

export const Dots = styled.div`
  position: absolute;
  left: 47.4%;
  right: 50%;

  transform: translateX(-50%, -50%);
  display: flex;

  button{
    background: transparent;
    cursor: pointer;
    &+button{
      margin-left: 1.125rem;
    }
  }
`;