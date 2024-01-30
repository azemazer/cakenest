import styled from "styled-components";
import { theme } from "../../theme";
import Title from "./Title";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
    const [username, setUsername] = useState("");
    return <NavbarStyle>
        <div>
            <Title />
        </div>
        { username !== "" ? 
            <div className="user-container">
                <div>
                    <h5>Bonjour user</h5>
                    <p>Se déconnecter</p>
                </div>
                <FaRegCircleUser />
            </div>
            :
            <p>Se connecter</p>
        }
    
    </NavbarStyle>
}

const NavbarStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    position: fixed;
    width: 189vh;
`