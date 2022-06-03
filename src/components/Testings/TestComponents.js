import styled from "styled-components";

export const TestContainer = styled.div`
    height: 610px;
    padding: 60px 0 100px 0;
    width: 100vw;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
`

export const TestWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 75px;
`

export const TestH1 = styled.h1`
    font-weight: 700;
    font-size: 32px;
    color: #000;
    text-align: center;
    padding-bottom: 65px;
`

export const TestCard = styled.div`
    max-height: 330px;
    position: relative;
    width: 505px;
`

export const TestCardBg = styled.div`
    position: absolute;
    width: 505px;
    height: 330px;
    overflow: hidden;
`

export const TestImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const TestInfo = styled.div`
    padding: 90px 40px 40px 30px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const TestH2 =styled.h2`
    color: #fff;
    line-height: 28px;
    font-size: 24px;
`

export const TestP = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    padding-top: 21px;
    width: 420px;
`

export const TextBtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`