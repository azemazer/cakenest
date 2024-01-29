import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate('/');
  }

  return (
    <div id="error-page">
      <h1>Oh Mon Dieu!!!</h1>
      <p>Ca marche pas... et tout ça c'est parce que:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => homeRedirect()}>Retourner à l'accueil</button>
    </div>
  );
}