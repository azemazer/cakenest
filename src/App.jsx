import { useState } from 'react'
import './App.css'

function App() {

  const [prenom, setPrenom] = useState("");

  const assignPrenom = (e) => {
    setPrenom(e.target.value);
  }

  const submitPrenom = () => {
    if (!prenom || prenom === "") {
      return alert("Il faut rentrer un prénom!!!!");
    }
    alert("Bonjour, " + prenom + " !");
    setPrenom("");
  }

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h3>Connectez-vous</h3>
      <form>
        <input type="text" name="prenom" placeholder="Entrez votre prénom" value={prenom} onChange={(e) => assignPrenom(e)}></input>
      </form>
      <button onClick={() => submitPrenom()}> Accèdez à votre espace </button>
    </>
  )
}

export default App
