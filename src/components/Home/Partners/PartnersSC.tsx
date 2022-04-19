import styled from 'styled-components'

export const LogosWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px;
    justify-items: center;
    width: 100%;
    padding: 0 0 40px;
    @media(max-width: 1184px){
        grid-template-columns: repeat(3, 1fr);
    }
    /* @media(max-width: 994px){
        gap: 30px;
    } */
    /* @media(max-width: 890px){
        grid-template-columns: repeat(3, 1fr);
    } */
    @media(max-width: 620px){
        gap: 30px;
    }
    @media(max-width: 530px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 374px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const LogoImgWrap = styled.div`
    background: #ebebeb;
    width: 100%;
    min-width: 150px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`

export const LogoImg = styled.img`
    width: 80px;
    /* max-width: 90px; */
    /* min-width: 70px; */
` 