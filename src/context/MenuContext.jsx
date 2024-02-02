import { createContext } from "react";

export default createContext({
    menuData: [],
    setDocumentColor: () => {},
    selectedMenuId: 0,
    setSelectedMenuId: () => {},
})