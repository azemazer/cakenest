import styled from "styled-components"
import { theme } from "../../theme"

export default function ToggleRound({onBoolChange}){

    return (
        <ToggleRoundStyle>
            <label className="switch">
                <input type="checkbox" onChange={(e) => onBoolChange(e)}/>
                <span className="slider round"></span>
            </label>
        </ToggleRoundStyle>
    )
}

const ToggleRoundStyle = styled.div`
    /* The switch - the box around the slider */
    .switch {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: darkblue;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px darkblue;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(85px);
    -ms-transform: translateX(85px);
    transform: translateX(85px);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }
`