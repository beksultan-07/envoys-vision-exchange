import React from 'react'
import { useCallback, useRef } from "react";
import { BlockTitle } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { BannerBtn } from '../Banner/BannerSC'
import { DocItems, DocWrap, DocImg, DocTitle, DocBtn } from './DocumentsSC'
import {useTranslation} from "react-i18next";
import PdfToImage from '../../PdfToImage/PdfToImage';


const Documents:React.FC = () => {
    const File = require('../Docs/Листинговые требования.pdf') 

    const ArrowDown = require('../../../assets/arrowDown.svg')['default']

    const {t} = useTranslation()

    return (
            <Container id={'Documents'}>
                <Flex align='center' direction='column'>
                    <BlockTitle color='#F6F6F6'>
                        {t("Home.Documents.title")}
                    </BlockTitle>

                    <DocWrap>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                        <DocItems>
                            <a href={File} target='_blank'>
                                <PdfToImage file={File}/>
                            </a>
                            <DocTitle>Methodology of Securities Valuation</DocTitle>
                                <DocBtn href={File} target='_blank' download>
                                    <span>{t("Home.Documents.btn")}</span>
                                    <img src={ArrowDown}/>
                                </DocBtn>
                        </DocItems>

                    </DocWrap>
                </Flex>
            </Container>
    )
}

export default Documents