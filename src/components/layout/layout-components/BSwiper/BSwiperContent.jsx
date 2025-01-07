import MenuContext from "../../../../context/MenuContext";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import apiAxios from "../../../../../libs/axios";

export default function BSwiperContent({title}) {

    const {
        menuData,
        setMenuData,
        selectedMenuId,
    } = useContext(MenuContext);

    const emptyArticle = {
        id: uuidv4(),
        imageSource: "/images/cupcake-item.png",
        title: "",
        price: 0,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    }

    const [articleInfos, setArticleInfos] = useState({
        id: uuidv4(),
        imageSource: "/images/cupcake-item.png",
        title: "",
        price: 0,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    })

    const setArticleTitle = (e) => {
        const title = e.target.value;
        setArticleInfos({
            ...articleInfos,
            title: title
        });
    }

    const setArticlePrice = (e) => {
        const price = e.target.value;
        setArticleInfos({
            ...articleInfos,
            price: parseInt(price)
        });
    }

    const setArticleQuantity = (e) => {
        const quantity = e.target.value;
        setArticleInfos({
            ...articleInfos,
            quantity: parseInt(quantity)
        });
    }

    const setArticleIsAvailable = (e) => {
        const isAvailable = e.target.value === "true";
        setArticleInfos({
            ...articleInfos,
            isAvailable: isAvailable
        });
    }

    const setArticleIsAdvertised = (e) => {
        const isAdvertised = e.target.value === "true";
        setArticleInfos({
            ...articleInfos,
            isAdvertised: isAdvertised
        });
    }

    const onArticleSelected = () => {
        const newArticle = menuData.find(x => x.id === selectedMenuId)
        setArticleInfos(newArticle ?? emptyArticle)
    }

    const saveArticle = async() => {
        if (articleInfos.title == "") {
            return alert("Aucun titre renseigné !")
        }
        if (articleInfos.price == "") {
            return alert("Aucun prix renseigné !")
        }
        if (articleInfos.quantity < 0) {
            return alert("Il doit y avoir une quantité supérieure à 0 !")
        }

        let newSetOfArticles = menuData;
        
        const articleAlreadyExist = menuData.find(x => x.id === articleInfos.id) ?? false;
        let response = null
        if (articleAlreadyExist) {
            response = await apiAxios.put('/api/cupcake/' + articleAlreadyExist.id, 
                articleInfos
            )
            newSetOfArticles.splice(newSetOfArticles.indexOf(articleAlreadyExist), 1);
        } else {
            response = await apiAxios.post('/api/cupcake', 
                articleInfos
            )
        }

        newSetOfArticles = [articleInfos, ...newSetOfArticles];

        setMenuData(newSetOfArticles);

        const emptyArticle = {
            id: uuidv4(),
            imageSource: "/images/cupcake-item.png",
            title: "",
            price: 0,
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        }

        setArticleInfos(emptyArticle);
    }

    useEffect(
        () => onArticleSelected(),
        [selectedMenuId]
    )

    return(
        <>
            <h4>{title}</h4>
            <label htmlFor="title">Titre</label>
            <input type="textarea" name="title" value={articleInfos.title} onChange={(e) => setArticleTitle(e)}></input>
            <label htmlFor="price">Prix</label>
            <input type="number" name="price" value={articleInfos.price} onChange={(e) => setArticlePrice(e)}></input>
            <label htmlFor="quantity">Quantité</label>
            <input type="number" name="quantity" value={articleInfos.quantity} onChange={(e) => setArticleQuantity(e)}></input>
            <label htmlFor="available">Disponible</label>
            <input type="checkbox" name="available" value={articleInfos.isAvailable} onChange={(e) => setArticleIsAvailable(e)}></input>
            <label htmlFor="advertised">Plébiscité</label>
            <input type="checkbox" name="advertised" value={articleInfos.isAdvertised} onChange={(e) => setArticleIsAdvertised(e)}></input>
            <button onClick={() => saveArticle()}>Sauvegarder</button>
        </>
    )
}