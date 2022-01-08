import styled from 'styled-components';

export const Container = styled.div``;

export const About = styled.div`
  padding: 2.5rem 6.75rem 6rem;
  width: 100%;
  text-align: center;
  
  h1{ 
    font-size: 1.5rem;
    color: var(--orange);
  }
  p{
    color: #231F20;
    font-size: 0.875rem;
    margin-bottom: 3.375rem;
  }

  a {
    color: var(--orange);
    text-decoration-line: underline;
    font-size: 14px;
    width: 100%;
  }
`;

export const Networks = styled.div`
  display: flex;  
  justify-content: center;
  gap: 2.2rem;
  
  .youtube{
    display: flex;
    flex-direction: column;
    gap: 2.1875rem;
  }

  .twitter{

  }

  @media (max-width: 1280px){
    flex-direction: column;
    max-width: 43.75rem;
    margin: auto;
    .twitter{
      img {
        width: 100%;
      }
    }
  }
`;