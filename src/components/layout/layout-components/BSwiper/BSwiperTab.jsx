import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";

export default function BSwiperTab({ label, selected }){

    const [selectedCurrent, isSelectedCurrent] = useState(selected ?? false);

    return <BSwiperTabStyle className={selectedCurrent ? "selected" : "unselected"}>
        <h3>{ label }</h3>
    </BSwiperTabStyle>

}

const BSwiperTabStyle = styled.button`
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
    border-width: 0px;
    box-shadow: 0px 34px 12px 0px rgba(0,0,0,0.2),0px 10px 15px -3px rgba(0,0,0,0.1);

    .selected {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }

    .unselected {
        background-color: ${theme.colors.background_white};
        color: ${theme.colors.greyDark};
    }


`