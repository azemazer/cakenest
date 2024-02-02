import { useState } from "react";
import BSwiperTab from "./layout-components/BSwiper/BSwiperTab";
import BSwiperContent from "./layout-components/BSwiper/BSwiperContent";
import styled from "styled-components";

export default function BSwiper({tabs, selectedTab, setSelectedTab}) {

    const onTabClick = (tab) => {
        setSelectedTab(tab);
        console.log(tab);
    }

    const wipeSelectedTab = () => {
        setSelectedTab(null);
        console.log(selectedTab);
    }

    return (<BSwiperStyle>
        <div className="tabs">
            <div onClick={() => wipeSelectedTab()}>
                <BSwiperTab label="^"/>
            </div>
            {tabs.map((tab) => 
                (
                <div onClick={() => onTabClick(tab)} key={tab.id}>
                    <BSwiperTab label={tab.label} selected={selectedTab !== null && tab.id === selectedTab.id}/>
                </div>
                )
            )}
        </div>
        { selectedTab ?
        <BSwiperContent title={selectedTab.label}/>
        :null
        }
    </BSwiperStyle>)
}

const BSwiperStyle = styled.div`
    .tabs {
        display: flex;
        flex-flow: row;
    }
`