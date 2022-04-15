import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Home/Banner/Banner'
import Benefits from '../../components/Home/Benefits/Benefits'
import Documents from '../../components/Home/Documents/Documents'
import IFeruemDesc from '../../components/Home/IFeruemDesc/IFeruemDesc'
import OurTeam from '../../components/Home/OurTeam/OurTeam'
import RoadMap from '../../components/Home/RoadMap/RoadMap'
import WalletConnect from '../../components/Home/WalletConnect/WalletConnect'


const Bg = require("../../assets/home/bg.jpg")

const HomeStyle = styled.div`
    background: url(${Bg}) 0 0 / cover;
    padding-top: 100px;
    @media(max-width: 682px){
        padding-top: 78px;
    }
`

const Home:React.FC = () => {
    return (
        <HomeStyle>
            <Banner/>
            <Benefits/>
            <WalletConnect/>
            <IFeruemDesc/>
            <RoadMap/>
            <Documents/>
            <OurTeam/>
        </HomeStyle>
    )
}

export default Home