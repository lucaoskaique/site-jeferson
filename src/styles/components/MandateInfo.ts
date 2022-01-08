import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60.625rem;
  margin: auto;
  border-radius: 0.625rem;

  padding: 1rem 2.25rem 1.2rem;
  background: var(--red-gradient);

  position: relative;
  top: -2.8rem;

  p {
    color: var(--light);
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: .75rem;
  }

  form{
    width: 100%;
    display: flex;
    justify-content:space-between;
    input {
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
    }
    input[type="submit"]{
      color: var(--orange);
      cursor: pointer;
      font-weight: bold;
      font-size: 1.125rem;

      &:active{
        position: relative;
        top: 0.125rem;
        left: 0.125rem;
      }
      &:hover{
        opacity: .9;
      }
    }
  }

  @media (max-width: 960px){
    form {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 15px;
    }
  }

  @media (max-width: 750px){
    form {
      flex-direction: column;
      input{
        padding: 1rem .5rem;
      }
    }
  }
`;
