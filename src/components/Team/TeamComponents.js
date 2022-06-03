import styled from "styled-components";
import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io'

export const TeamContainer = styled.div`
    height: 620px;
    width: 100vw;
    padding: 85px 0 65px 0;
    position: relative;
`

export const TeamBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #017F36;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const TeamH1 = styled.h1`
    font-weight: 700;
    font-size: 32px;
    color: #fff;
    text-align: center;
    padding-bottom: 50px;
    position: relative;
`

export const TeamWrapper = styled.div`
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
`

export const ArrowDropleft = styled(IoIosArrowDropleft)`
    color: #fff;
    font-size: 50px;
    position: absolute;
    left: 0;
    z-index: 1;
`

export const ArrowDropright = styled(IoIosArrowDropright)`
    color: #fff;
    font-size: 50px;
    position: absolute;
    right: 0;
    z-index: 1;
`

export const TeamSlide = styled.div`
    width: 845px;
    height: 380px;
`

export const TeamSlider = styled.div`
    width: 100%;
    height: 380px;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const TeamImg = styled.img`
    width: 350px;
    height: 350px;
`

export const TeamInfo = styled.div`
    width: 400px;
    height: 380px;
`

export const TeamH2 =styled.h2`
    color: #fff;
    line-height: 42px;
    font-size: 28px;
    padding: 30px 0 20px 0;
`

export const TeamP = styled.p`
    color: #fff;
    font-size: 20px;
    line-height: 29px;
    padding-top: 21px;
    width: 420px;
`