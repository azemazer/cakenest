import { useNavigate } from "react-router-dom";

export default function DisconnectButton(){

    const navigate = useNavigate();
    
    const disconnect = () => {
        navigate('/', {});
    }

    return <>
        <button onClick={disconnect}> Déconnexion </button>
    </>
}