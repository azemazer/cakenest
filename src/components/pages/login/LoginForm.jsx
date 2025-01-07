import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle, BsFillKeyFill } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";
import apiAxios from "../../../../libs/axios";

export default function LoginForm() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailValue("");
        let response = {}
        try {
            await apiAxios.get('/sanctum/csrf-cookie')
            response = await apiAxios.post('/login', {
                "email": emailValue,
                "password": passwordValue
            })
            console.log(response)
        } catch {
            return alert("Mot de passe invalide/Mail inconnu")
        }
        return navigate(`/order/${response.data.name}`);
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <TextInput value={emailValue} onChange={handleEmailChange} placeholder={"Entrez votre email"} required Icon={<BsPersonCircle className="icon" />} />
            <TextInput value={passwordValue} type="password" onChange={handlePasswordChange} placeholder={"Entrez votre mot de passe"} required Icon={<BsFillKeyFill className="icon" />} />

            <PrimaryButton Icon={<IoChevronForward className="icon"/>} label={"Mon espace"}/>
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Pacifico", sans-serif;

    hr {
        border: 1.5px solid ${theme.colors.loginLine};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    h1 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P4};
    }

    .icon {
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.size.P0};
        margin-left: 10px;
    }
`;
