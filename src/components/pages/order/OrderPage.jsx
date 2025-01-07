import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import styled, {css} from "styled-components";
import { theme } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { fakeMenu, fakeSmallMenu } from "../../../data/fakeMenu";
import Article from "../../reusable-ui/Article";
import { useState, useEffect, useContext } from "react";
import BSwiper from "../../layout/BSwiper";
import MenuContext from "../../../context/MenuContext";
import apiAxios from "../../../../libs/axios";

export default function OrderPage() {

    
    const {username} = useParams();

    const navigate = useNavigate();

    const adminTabs = [
        {id: 1, label: "Ajouter un article"},
        {id: 2, label: "Modifier un article"},
    ]

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetchMenuData();
    }, [])

    const fetchMenuData = async() => {
        const response = await apiAxios({
            method: 'get',
            url: '/api/cupcake'
        })
        setMenuData(response.data)
    }

    const [selectedMenuId, setSelectedMenuId] = useState(0);
    const menuContextValue = {
        menuData,
        setMenuData,
        selectedMenuId,
        setSelectedMenuId
    }

    const [selectedTab, setSelectedTab] = useState({id: 1, label: "Ajouter un article"});

    const [isAdmin, setIsAdmin] = useState(false);

    const doNothing = () => {
    }

    const deleteArticle = async(article) => {
        const response = await apiAxios({
            method: 'delete',
            url: '/api/cupcake/' + article.id
        })
        if(response && response.status == 200){
            let newMenuData = menuData;
            newMenuData.splice(newMenuData.indexOf(article), 1);
            setMenuData([...newMenuData]);
        }
    }

    const onDisconnect = async() => {
        try {
            const response = await apiAxios.post('/logout', {})
        } catch {
            return alert("Couldn't disconnect.")
        }
        navigate('/')
    }

    return (
        <OrderPageStyle>
            <MenuContext.Provider value={menuContextValue}>
                <div className="container">
                    <Navbar username={username} onDisconnect={onDisconnect} onAdminStateChange={(isAdmin) => setIsAdmin(isAdmin)}/>
                    <div className="shop">
                        {menuData.map((article) => 
                            <div onClick={() => setSelectedMenuId(article.id)} key={article.id}>
                                <Article article={article} key={article.id} isAdmin={isAdmin} deleteArticle={(article) => deleteArticle(article)}/>
                            </div>
                        )}
                    </div>
                    {isAdmin ? <BSwiper tabs={adminTabs} selectedTab={selectedTab} setSelectedTab={(tab) => setSelectedTab(tab)}/> : null}
                </div>
            </MenuContext.Provider>
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