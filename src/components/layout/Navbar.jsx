import styled, {css} from "styled-components";
import Logo from '../reusable-ui/Logo';
import { FaUserAlt } from "react-icons/fa";
import { theme } from "../../theme";
import { refreshPage } from '../../mixins/global'
import { useState } from "react";
import { toast } from "react-toastify";

export default function Navbar({username, onDisconnect}) {

    const [isAdmin, setIsAdmin] = useState(false);

    const onAdminCheck = (e) => {
        if (!isAdmin){
            toast("MODE ADMIN ACTIVÉ.")
        }
        setIsAdmin(e.target.checked);
    }

    return(
        <NavbarStyle>
            <div className="nav-leftmost" onClick={() => refreshPage()}>
                <Logo />
            </div>

            <div>
                <label htmlFor="admin-mode">{isAdmin ? <span>Désactiver</span> : <span>Activer</span>} le mode Admin</label>
                <input name="admin-mode" type="checkbox" onChange={(e) => onAdminCheck(e)}></input>
            </div>
                
            <div className="nav-leftmost">
                {username ? 
                <div className="leftmost-element">
                    <p className="hello-user">Bonjour, {username} !</p>
                    <p className="navbar_disconnect" onClick={() => onDisconnect()}>Se déconnecter</p>
                </div>
                :
                <div className="leftmost-element">
                    <p>Se connecter</p>
                </div>
            }
                <FaUserAlt className="leftmost-element" />
            </div>
        </NavbarStyle>
    )
}

const NavbarStyle = styled.div`
    height: 10vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.background_white} ;
    box-shadow: 0px 34px 12px 0px rgba(0,0,0,0.2),0px 10px 15px -3px rgba(0,0,0,0.1);
    .nav-leftmost {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin: ${theme.spacing.sm};
    }
    p {
        font-family: 'Open Sans', 'sans-serif';
    }
    .hello-user {
        font-size: ${theme.fonts.size.P1};
        font-weight: ${theme.fonts.weights.semiBold};
        color: ${theme.colors.blue}
    }
    .leftmost-element {
        margin: 0px 1rem;
    }
`