import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login(){
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
      <>
        <h1>Bienvenue chez nous !</h1>
        <h3>Connectez-vous</h3>
        <LoginForm 
            submitPrenom={() => submitPrenom()}
            assignPrenom={(e) => assignPrenom(e)}
            prenom={prenom}
        />
      </>
    )
}  