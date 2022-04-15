import styled from "styled-components";

export const OTWrap = styled.ul`
    list-style: none;
    padding: 0 0 50px;
    margin: 40px 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    @media(max-width: 908px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 584px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 374px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const OTItems = styled.li`
    background: #1D1D1D;
    text-align: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const OTIcon = styled.img`
    width: 15px;
    transition: .3s;
`

export const OTIconWrap = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff;
    transition: .3s;
    :last-child{
        margin: 0;
    }

    :hover{
        background: #4478BB;
        svg path {
            fill: #fff;
        }
    }
`


export const OTImg = styled.img`
    border-radius: 35px 35px 0 0;
    width: 100%;
`
