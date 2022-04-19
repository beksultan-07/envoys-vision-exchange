import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Flex } from '../../../uikit/uikit'
import 'swiper/css';
import { CItem } from './CompaniesSC';
import { HeaderLogo, HeaderLogoText, HeaderLogoWrap } from '../../Header/HeaderSC';
import { PreTitle, TinyText } from '../../../uikit/fonts';
import { BannerBtn } from '../Banner/BannerSC';

const Companies:React.FC = () => {
    const logo = require("../../../assets/logo.svg")['default'];
    const Arrow = require("../../../assets/home/arrowRightBlack.svg")['default']

    const [info, setInfo] = React.useState([
        {
            img: logo,
            title: 'ENVOYS VISION',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis dolor sit amet, consectetur adipiscing.'
        },
        {
            img: logo,
            title: 'ENVOYS VISION',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis dolor sit amet, consectetur adipiscing.'
        },
        {
            img: logo,
            title: 'ENVOYS VISION',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis dolor sit amet, consectetur adipiscing.'
        },
        {
            img: logo,
            title: 'ENVOYS VISION',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis dolor sit amet, consectetur adipiscing.'
        },
        {
            img: logo,
            title: 'ENVOYS VISION',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis dolor sit amet, consectetur adipiscing.'
        },
    ])

  return (
    <Container>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop
          breakpoints= {{
            320: {
                slidesPerView: 1
            },
            460: {
                slidesPerView: 2
            },
            670: {
                slidesPerView: 3
            },
            940: {
                slidesPerView: 4
            }
          }}
        >
            {info.map((el, index) => (
                <SwiperSlide key={index}>
                    <CItem>
                            <HeaderLogoWrap to='/'>
                                <HeaderLogo src={el.img}/>
                                <HeaderLogoText style={{fontSize: '22px'}}>{el.title}</HeaderLogoText>
                            </HeaderLogoWrap> 

                            <PreTitle margin='20px 0' color='#F6F6F6'>{el.title}</PreTitle>

                            <TinyText margin='0 0 40px'>{el.text}</TinyText>

                            <BannerBtn href='#' target='_blank' style={{width: '100%'}}>
                                <span>Go Over</span>
                                <img src={Arrow} alt="" />
                            </BannerBtn>
                    </CItem>
                </SwiperSlide>
            ))}
        </Swiper>
    </Container>
    )
}

export default Companies