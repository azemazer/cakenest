import styled from "styled-components";
import { theme } from "../../theme";
import { formatPrice } from "../../mixins/maths";

export default function Article ({article}) {

    return(
        <ArticleStyle>
            <img src={article.imageSource} alt={"Image de " + article.title} />
            <p className="article-title">{article.title}</p>
            <div className="article-desc">
                <p className="article-prix">Prix: {formatPrice(article.price)}</p>
                {article.isAvailable ? 
                <button className="article-button-add">Ajouter</button>
                :
                <button disabled className="article-button-unavailable">Indisponible</button>
                }
            </div>
            {/* <p>Quantité: {article.quantity}</p> */}
        </ArticleStyle>
    )
}

const ArticleStyle = styled.div`
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    min-height: 21rem;
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    img {
        max-width: 12rem;
    }
    .article-desc{
        display: flex;
        flex-flow: row;
        gap: 10px;
        justify-content: space-between;
        align-items: center
    }
    .article-title {
        font-family: 'Pacifico', 'sans-serif';
        font-size: ${theme.fonts.size.P3};
    }
    .article-prix {
        font-family: 'Open Sans', 'sans-serif';
        color: ${theme.colors.primary};
    }
    button {
        border: 0px;
        padding: ${theme.spacing.sm} ${theme.spacing.lg};
        border-radius: ${theme.borderRadius.round}
    }
    .article-button-add {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }

`
// id: 1,
// imageSource: "/images/cupcake-item.png",
// title: "ChocoBliss",
// price: 9.297,
// quantity: 0,
// isAvailable: true,
// isAdvertised: false,