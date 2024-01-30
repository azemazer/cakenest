import DisconnectButton from "../components/DisconnectButton";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

export default function OrderPage() {

    const { state } = useLocation();
    const { prenom } = state;

    // Functions

    return <OrderPageStyle>
        <Navbar />
        <h1>Bonjour, {prenom ?? "illustre inconnu"} !</h1>
        <DisconnectButton />
    </OrderPageStyle>

}

const OrderPageStyle = styled.div`
    width: 1400px;
    height: 95vh;
`