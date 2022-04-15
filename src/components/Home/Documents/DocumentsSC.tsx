import styled from "styled-components";

export const DocWrap = styled.ul`
    list-style: none;
    padding: 0;
    margin: 40px 0 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    width: 100%;
    @media(max-width: 950px){
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    @media(max-width: 476px){
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        gap: 20px;
    }
`

export const DocItems = styled.li`
    padding: 10px;
    width: 100%;
    background: #1D1D1D;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DocImg = styled.img`
    width: 100%;
    border-radius: 10px;
`

export const DocTitle = styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #F5F5F5;
    margin: 25px 0 60px;
`