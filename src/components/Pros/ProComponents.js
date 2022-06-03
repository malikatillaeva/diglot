import styled from "styled-components";

export const ProsContainer = styled.div`
    height: 690px;
    padding: 50px 0;
    position: relative;
    width: 100vw;
`

export const ProsBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const ProsH1 = styled.h1`
    font-weight: 700;
    font-size: 32px;
    color: #000;
    text-align: center;
    padding-bottom: 50px;
`

export const ProsWrapper = styled.div`
    position: relative;
    max-width: 1100px;
    max-height: 490px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
`

export const ProsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 505px;
`

export const ProsIcon = styled.img`
    display: block;
    width: 90px;
    height: 90px;
`

export const ProsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 393px;
`

export const ProsH3 = styled.h3`
    font-size: 20px;
    line-height: 29px;
    font-weight: 700;
    color: #000000;
    padding-bottom: 10px;
`

export const ProsP = styled.p`
    font-size: 16px;
    line-height: 23px;
    color: #000;
`