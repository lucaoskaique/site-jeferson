import styled from 'styled-components';

export const Container = styled.header`
  background: var(--light);
  max-height: 4.375rem;
`;

export const Wrapper = styled.div`
  max-width: 73.125rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 1.875rem;
  >img {
    position: relative;
    top: -1.875rem;
  }
  div {
    display: flex;
    height: 1.375rem;
    a{
      display: flex;
      font-size: 1rem;
      font-weight: 600;
      color: var(--green-light);
      margin-left: 3.75rem;
      img {
        margin:0.25rem 0 0 0.43rem;
      }
    }
  }
  ul {
    img{
      margin-left: 0.4375rem;
    }
  }

  @media (max-width: 1170px){
    padding: 30px 15px 0;
  }
`;