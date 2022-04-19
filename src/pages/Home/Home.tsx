import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Home/Banner/Banner'
import Benefits from '../../components/Home/Benefits/Benefits'
import Companies from '../../components/Home/Companies/Companies'
import Documents from '../../components/Home/Documents/Documents'
import IFeruemDesc from '../../components/Home/IFeruemDesc/IFeruemDesc'
import OurTeam from '../../components/Home/OurTeam/OurTeam'
import Partners from '../../components/Home/Partners/Partners'
import RedirectComponents from '../../components/Home/Redirects/Redirect'
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
            <Companies/>
            {/* <WalletConnect/> */}
            <IFeruemDesc/>
            <RoadMap/>
            <RedirectComponents/>
            <Documents/>
            <OurTeam/>
            <Partners/>
        </HomeStyle>
    )
}

export default Home