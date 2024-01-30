import cupcake from '../assets/cupcake.png';
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Title() {
    return (
        <TitleStyle>
            <h2>CAKE</h2>
            <img src={cupcake}></img>
            <h2>NEST</h2>
        </TitleStyle>
    )
}

const TitleStyle = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    h2 {
        color: ${theme.colors.primary_cake};
        font-size: ${theme.fonts.size.P6};
        margin: 0;
    }

    img {
        max-width: 50px;
        max-height: 50px;
    }
`