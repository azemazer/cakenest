import { createContext } from "react";

export default createContext({
    menuData: [],
    setMenuData: () => {},
    selectedMenuId: 0,
    setSelectedMenuId: () => {},
})