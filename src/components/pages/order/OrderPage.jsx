import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import styled, {css} from "styled-components";
import { theme } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { fakeMenu, fakeSmallMenu } from "../../../data/fakeMenu";
import Article from "../../reusable-ui/Article";

export default function OrderPage(props) {
    const {username} = useParams();

    const navigate = useNavigate();

    return (
        <OrderPageStyle>
            <div className="container">
                <Navbar username={username} onDisconnect={() => navigate('/')}/>
                <div className="shop">
                    {fakeMenu.map((article) => 
                        <Article article={article} key={article.id}/>
                    )}
                </div>
            </div>
        </OrderPageStyle>
    );
}

const OrderPageStyle = styled.div`
    /* width: 100vh; */
    background-color: ${theme.colors.blue};
    height: 100vh;
    padding: 10px;

    .container{
        /* height: 95%;
        width: 95%; */
        background-color: ${theme.colors.background_white};
    }

    .shop {
        height: 85vh;
        background-color: ${theme.colors.background_white};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
        display: grid;
        padding: 50px 50px 150px;
        grid-row-gap: 60px;
        grid-column-gap: 60px;
        grid-template-columns: repeat(4, 1fr);
        overflow-y: auto;
    }
`