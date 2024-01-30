import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { theme } from "../../theme";
import styled, { css } from 'styled-components';

import cupcake from '../assets/cupcake.png';
import LoginForm from "../components/LoginForm";
import Title from "../components/Title";

// Style
const LoginStyle = styled.div`
    h1 {
        font-family: 'Pacifico', 'sans-serif';
        color: ${theme.colors.white};
        margin: 20px ${theme.spacing.lg};
        text-align: center;
    }

    h3 {
        font-family: 'Pacifico', 'sans-serif';
        color: ${theme.colors.white};
        text-align: center;
    }
    
    hr {
        width:50%;
        margin:0 auto;
    }
`

const TitleStyle = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    h2 {
        color: ${theme.colors.primary_cake};
        font-size: ${theme.fonts.size.P6};
        margin: ${theme.spacing.xl} ${theme.spacing.xxs}
    }

    img {
        max-width: 50px;
        max-height: 50px;
    }
`

export default function Login(){

    // Logic
    const [prenom, setPrenom] = useState("");

    const assignPrenom = (e) => {
      setPrenom(e.target.value);
    }
    const navigate = useNavigate();
  
    const submitPrenom = () => {

        if (!prenom || prenom === "") {
            return alert("Il faut rentrer un prénom!!!!");
        }
        navigate("/commande", { state: { prenom: prenom } })
    }
  
    return (
      <LoginStyle>
        <Title />
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h3>Connectez-vous</h3>
        <LoginForm 
            submitPrenom={() => submitPrenom()}
            assignPrenom={(e) => assignPrenom(e)}
            prenom={prenom}
        />
      </LoginStyle>
    )
}  