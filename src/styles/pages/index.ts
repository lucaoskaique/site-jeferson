import styled from 'styled-components';

export const Container = styled.div``;

export const About = styled.section`
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

  @media (max-width: 1250px){
    padding: 2.5rem 3rem 6rem;
  }
  @media (max-width: 768px){
    padding: 2.5rem 1.5rem 6rem;
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

export const Story = styled.div`
  max-width: 1180px;
  margin: 4rem auto 1.875rem;

  >div{
    display: flex;
    text-align: left;
    gap: 2.125rem;
    img {
      width: 370px;
      height: 416.43px;
    }
    h3{
      font-size: 1.5rem;
      color: var(--green-light);
      margin-bottom: 2rem;
    }
    p{
      color: #141414;
      font-size: 0.875rem;
      line-height: 22px;
    }
  }

  @media (max-width: 960px){
    > div {
      flex-direction: column;
    }
  }

  @media (max-width: 450px){
    > div {
      img {
        width: 95%;
      }
    }
  }
`;