import styled from 'styled-components';

export const Container = styled.header`
  background: var(--light);
  max-height: 70px;
`;

export const Wrapper = styled.div`
  max-width: 1170px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  >img {
    position: relative;
    top: -30px;
  }
  div {
    display: flex;
    height: 22px;
    a{
      display: flex;
      font-size: 16px;
      font-weight: 600;
      color: var(--green-light);
      margin-left: 60px;
      img {
        margin:4px 0 0 7px;
      }
    }
  }
  ul {
    img{
      margin-left: 7px;
    }
  }

  @media (max-width: 1170px){
    padding: 30px 15px 0;
  }
`;