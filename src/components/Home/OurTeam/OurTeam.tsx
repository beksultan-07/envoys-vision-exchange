import React from 'react'
import styled from 'styled-components'
import { BiggerText, BlockTitle, DateText } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { OTIconWrap, OTItems, OTWrap, OTImg, OTIcon } from './OurTeamSC'


const OurTeam:React.FC = () => {
    const Icon1 = require('../../../assets/social media/icon1.svg')['default']
    const Icon2 = require('../../../assets/social media/icon2.svg')['default']
    const Icon3 = require('../../../assets/social media/icon3.svg')['default']

    const Person = require('../../../assets/person.jpg')
    
    
  return (
    <Container>
            <Flex align='center' direction='column' margin='100px 0 0'>
                <BlockTitle margin='0 0 50px' color='#F6F6F6'>Documents</BlockTitle>
                <OTWrap>

                    <OTItems>
                        <OTImg src={Person}/>
                        <BiggerText color='#F6F6F6' margin='50px 0 10px'>Surname Name</BiggerText>
                        <DateText color='#F6F6F6' margin='0 0 20px'>profession</DateText>
                        <Flex margin='0 0 50px'>
                            <a href='#' style={{margin: ' 0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon1}/>
                                </OTIconWrap>
                            </a>
                            <a href='#' style={{margin: '0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon2}/>
                                </OTIconWrap>
                            </a>
                            <a href='#'>
                                <OTIconWrap>
                                    <OTIcon src={Icon3}/>
                                </OTIconWrap>
                            </a>
                        </Flex>
                    </OTItems>

                    <OTItems>
                        <OTImg src={Person}/>
                        <BiggerText color='#F6F6F6' margin='50px 0 10px'>Surname Name</BiggerText>
                        <DateText color='#F6F6F6' margin='0 0 20px'>profession</DateText>
                        <Flex margin='0 0 50px'>
                            <a href='#' style={{margin: ' 0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon1}/>
                                </OTIconWrap>
                            </a>
                            <a href='#' style={{margin: '0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon2}/>
                                </OTIconWrap>
                            </a>
                            <a href='#'>
                                <OTIconWrap>
                                    <OTIcon src={Icon3}/>
                                </OTIconWrap>
                            </a>
                        </Flex>
                    </OTItems>

                    <OTItems>
                        <OTImg src={Person}/>
                        <BiggerText color='#F6F6F6' margin='50px 0 10px'>Surname Name</BiggerText>
                        <DateText color='#F6F6F6' margin='0 0 20px'>profession</DateText>
                        <Flex margin='0 0 50px'>
                            <a href='#' style={{margin: ' 0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon1}/>
                                </OTIconWrap>
                            </a>
                            <a href='#' style={{margin: '0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon2}/>
                                </OTIconWrap>
                            </a>
                            <a href='#'>
                                <OTIconWrap>
                                    <OTIcon src={Icon3}/>
                                </OTIconWrap>
                            </a>
                        </Flex>
                    </OTItems>

                    <OTItems>
                        <OTImg src={Person}/>
                        <BiggerText color='#F6F6F6' margin='50px 0 10px'>Surname Name</BiggerText>
                        <DateText color='#F6F6F6' margin='0 0 20px'>profession</DateText>
                        <Flex margin='0 0 50px'>
                            <a href='#' style={{margin: ' 0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon1}/>
                                </OTIconWrap>
                            </a>
                            <a href='#' style={{margin: '0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon2}/>
                                </OTIconWrap>
                            </a>
                            <a href='#'>
                                <OTIconWrap>
                                    <OTIcon src={Icon3}/>
                                </OTIconWrap>
                            </a>
                        </Flex>
                    </OTItems>

                    <OTItems>
                        <OTImg src={Person}/>
                        <BiggerText color='#F6F6F6' margin='50px 0 10px'>Surname Name</BiggerText>
                        <DateText color='#F6F6F6' margin='0 0 20px'>profession</DateText>
                        <Flex margin='0 0 50px'> 
                            <a href='#' style={{margin: ' 0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon1}/>
                                </OTIconWrap>
                            </a>
                            <a href='#' style={{margin: '0 5px 0 0'}}>
                                <OTIconWrap>
                                    <OTIcon src={Icon2}/>
                                </OTIconWrap>
                            </a>
                            <a href='#'>
                                <OTIconWrap>
                                    <OTIcon src={Icon3}/>
                                </OTIconWrap>
                            </a>
                        </Flex>
                    </OTItems>
                    
                </OTWrap>
            </Flex>
    </Container>
  )
}

export default OurTeam