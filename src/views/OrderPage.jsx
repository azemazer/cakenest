import DisconnectButton from "../components/DisconnectButton";
import { useLocation } from "react-router-dom";

export default function OrderPage() {

    const { state } = useLocation();
    const { prenom } = state;

    // Functions

    return <>
        <h1>Bonjour, {prenom ?? "illustre inconnu"} !</h1>
        <DisconnectButton />
    </>
}