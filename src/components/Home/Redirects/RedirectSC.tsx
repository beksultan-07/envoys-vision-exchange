import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";

// R - Redirect
export const RList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    /* flex-direction: column; */
    margin: 0 0 100px;
` 

export const RItem = styled.a`
    margin: 0 20px 0 0;
    flex: 1;
    background: #171717;
    border-radius: 20px;
    transition: .3s;
    padding: 20px 10px 10px;
    a{
        width: 100%;
    }

    :hover{
        background: #FFA760;

        a{
            background: #4478BB;
            span{
                color: #F5F5F5;
            }
        }
        h1{
            color: #F5F5F5;
        }
        
    }

    :last-child{
        margin: 0;
    }
`


export const RItemTexts = styled.div`
    width: 276px;
    margin: 0 auto;

`

export const RItemTitle = styled.h1`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 76px;
    color: #FFA760;
    margin: 0 0 20px;
`

