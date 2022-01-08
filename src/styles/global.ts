import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --green-light: #29A29E;
    --orange: #EC6330;
    --red: #D90726;
    --blue: #0092D3;
    --yellow: #FFBF3A;
    --light: #fff;

    --red-gradient: linear-gradient(90.94deg, #FFBF3A -40%, #D90726 185.31%);
    --green-gradient: linear-gradient(90deg, #72C042 -99.98%, #72C042 -42.41%);
    --blue-gradient: linear-gradient(90deg, #72C042 -99.98%, #0092D3 193.73%);
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button{
    font: 400 1rem 'Poppins', sans-serif;
  }

  button{
    cursor: pointer;
  }
  
  button, input {
    border: none;
    outline: 0;
  }
  button, a, input[type="submit"] {
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`;
