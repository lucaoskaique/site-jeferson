import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue-gradient);
  padding: 5.375rem 8.5rem 3.75rem;
  
  display: flex;
  justify-content: space-between;
  
  >div{
    display: flex;
    flex-direction: column;
    
    a, b {
      line-height: 2rem;
      color: var(--light);
    }

    > img {
        width: 23.125rem;
        margin-bottom: 4.0625rem;
    }

    >div {
      display: flex;
      justify-content: flex-end;

      >img{
        margin-left: 0.625rem;
      }
    }
  }

  @media (max-width: 1100px){
    flex-direction: column-reverse;
    > div {
      >img {
        margin: auto auto 2rem;
      }
      a, b {
        line-height: 2.5rem;
      }
      >div {
        justify-content: center;
        >img {
          margin-bottom: .5rem;
        }
      }
    }
  }

  @media (max-width: 600px){
    padding: 5.375rem 2rem 3.75rem;
  }

  @media (max-width: 390px){
    >div {
      >img {
        width: 95%;
      }
    }
  }
`;
