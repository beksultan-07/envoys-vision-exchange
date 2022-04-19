import React from 'react'
import { TinyText } from '../../../uikit/fonts'
import { Container } from '../../../uikit/uikit'
import { BannerBtn } from '../Banner/BannerSC'
import { RItem, RItemTexts, RItemTitle, RList } from './RedirectSC'

const RedirectComponents:React.FC = () => {
    const ArrowRightIcon = require('../../../assets/home/arrowRightBlack.svg')['default']

  return (
    <Container>
        <RList>

            <RItem href='#' target='_blank'>
                <RItemTexts>
                    <RItemTitle>
                        1. Exchange
                    </RItemTitle>
    
                    <TinyText margin='0 0 50px'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                        dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                    </TinyText>
                </RItemTexts>

                <BannerBtn href='#' target='_blank'>
                    <span>Go Over</span>
                    <img src={ArrowRightIcon}/>
                </BannerBtn>
            </RItem>

            <RItem href='#' target='_blank'>
                <RItemTexts>
                    <RItemTitle>
                        2. Dex
                    </RItemTitle>
    
                    <TinyText margin='0 0 50px'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                        dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                    </TinyText>
                </RItemTexts>

                <BannerBtn href='#' target='_blank'>
                    <span>Go Over</span>
                    <img src={ArrowRightIcon}/>
                </BannerBtn>
            </RItem>

            <RItem href='#' target='_blank'>
               <RItemTexts>
                    <RItemTitle>
                        3. Processing
                    </RItemTitle>
    
                    <TinyText margin='0 0 50px'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                        dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                    </TinyText>
               </RItemTexts>

                <BannerBtn href='#' target='_blank'>
                    <span>Go Over</span>
                    <img src={ArrowRightIcon}/>
                </BannerBtn>
            </RItem>

        </RList>
    </Container>
  )
}

export default RedirectComponents