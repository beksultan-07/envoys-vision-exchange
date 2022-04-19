import React from 'react'
import { BlockTitle } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import {useTranslation} from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import 'swiper/css';
import { LogoImg, LogosWrap, LogoImgWrap } from './PartnersSC';

const Partners:React.FC = () => {
  

  const [logos, setLogos] = React.useState([
    require('../../../assets/partners/Airbnb Logo.svg')['default'],
    require('../../../assets/partners/FedEx Logo.svg')['default'],
    require('../../../assets/partners/Google Logo.svg')['default'],
    require('../../../assets/partners/Hubspot Logo.svg')['default'],
    require('../../../assets/partners/Microsoft Logo.svg')['default'],
    require('../../../assets/partners/Walmart Logo.svg')['default'],
    // require('../../../assets/partners/rpg.png')
  ])

  const {t} = useTranslation()


  function checkPartnersCount(){
    if(logos.length > 6){
      return (
        <Swiper
        spaceBetween={30}
        slidesPerView={6}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false
      }}
      speed={500}
      modules={[Autoplay ]}
      breakpoints= {{
        320: {
            slidesPerView: 2,
        },
        502: {
            slidesPerView: 3,
        },
        700: {
          slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        }
      }}
      >
        {logos.map((el, index) => (
          <SwiperSlide key={index}>
            <LogoImgWrap>
              <LogoImg src={el}/>
            </LogoImgWrap>
          </SwiperSlide>
        ))}
        
      </Swiper>
      )
    }else{
      return (
        <Container>
          <LogosWrap>
            {logos.map((el, index) => (
              <LogoImgWrap key={index}>
                <LogoImg src={el}/>
              </LogoImgWrap>
            ))}
          </LogosWrap>
        </Container>
      )
    }
  }

  return (
    <>
      <Container id={'Partners'}>
        <Flex align='center' direction='column' margin='100px 0 0' width='100%'>
          <BlockTitle margin='0 0 50px' color='#F6F6F6'>{t("Home.Partners.title")}</BlockTitle>
          
        </Flex>
      </Container>
      {checkPartnersCount()}
    </>
  )
}

export default Partners