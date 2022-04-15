import React from 'react'
import { useCallback, useRef } from "react";
import { BlockTitle } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { BannerBtn } from '../Banner/BannerSC'
import { DocItems, DocWrap, DocImg, DocTitle } from './DocumentsSC'


const Documents:React.FC = () => {
    const file = require('../Docs/Листинговые требования.pdf') 

    const ArrowRightIcon = require('../../../assets/home/arrowRightBlack.svg')['default']
    const [image, setImage] = React.useState("");

    React.useEffect(() => {
        
    }, [])
    

    return (
        <Container>
            <Flex align='center' direction='column'>
                <BlockTitle color='#F6F6F6'>Documents</BlockTitle>
                <DocWrap>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                    <DocItems>
                        <img src={file}/>
                        <DocTitle>Methodology of Securities Valuation</DocTitle>
                        <a href='#' target='_blank' style={{width: '100%'}}>
                            <BannerBtn style={{width: '100%'}}>
                                <span>Download</span>
                                <img src={ArrowRightIcon}/>
                            </BannerBtn>
                        </a>
                    </DocItems>

                </DocWrap>
            </Flex>
        </Container>
    )
}

export default Documents