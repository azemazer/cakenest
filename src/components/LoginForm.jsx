import { useState } from "react";

export default function LoginForm({prenom, assignPrenom, submitPrenom}){
  
    return (
      <>
        <input type="text" name="prenom" placeholder="Entrez votre prénom" value={prenom} onChange={(e) => assignPrenom(e)}></input>
        <button onClick={() => submitPrenom()}> Accèdez à votre espace </button>
      </>
    )
}