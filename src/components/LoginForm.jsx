import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { BsChevronCompactRight } from "react-icons/bs";

export default function LoginForm({prenom, assignPrenom, submitPrenom}){

    // Logic


  
    return (
      <LoginFormStyle>
        <input type="text" name="prenom" placeholder="Entrez votre prénom" value={prenom} onChange={(e) => assignPrenom(e)}></input>
        <button onClick={() => submitPrenom()}> Mon espace <BsChevronCompactRight /> </button>
      </LoginFormStyle>
    )
}

// Style
const LoginFormStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  input {
    border-radius: ${theme.borderRadius.round};
    border-width: 0px;
    min-width: 30rem;
    min-height: 4rem;
    margin-top: ${theme.spacing.lg};
    font-family: "Open Sans", "sans-serif"
  }
  button {
    border-radius: ${theme.borderRadius.round};
    border-width: 0px;
    min-width: 30rem;
    min-height: 4rem;
    margin-top: ${theme.spacing.lg};
    background-color: ${theme.colors.primary_cake};
    font-family: "Open Sans", "sans-serif";
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white}
  }
`