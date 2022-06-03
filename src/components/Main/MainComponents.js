import styled, {css} from "styled-components";
import {BsPlayCircle} from 'react-icons/bs'
import {BsClockHistory} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'
import { IoMdArrowRoundForward, IoMdArrowRoundBack} from 'react-icons/io'

export const MainContainer = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(1, 127, 54, 0.7), rgba(1, 127, 54, 0.7));
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 30px 40px 30px;
    height: 728px;
    position: relative;
    width: 100vw;
`

export const MainBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const MainContent = styled.div`
    width: 1100px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
    }
`

export const MainSlide = styled.div`
    width: 100%;
    height: 100%;
`
export const MainSlider = styled.div`
    max-width: 1100px;
    height: 512px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MainInfo = styled.div`
    width: 500px;
    height: 475px;
    display: flex;
    flex-direction: column;
`

export const MainH1 = styled.h1`
    font-weight: 700;
    line-height: 50px;
    font-size: 42px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 36px;
        line-height: 42px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        line-height: 28px;
    }
`

export const MainP = styled.p`
        margin-top: 35px;
        color: #fff;
        font-size: 20px;
        line-height: 24px;
        max-width: 476px;

        @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 20px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
        line-height: 16px;
    }
`

export const MainIcons = styled.div`
    width: 190px;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BiIcon = styled(BsClockHistory)`
    color: #fff;
    height: 37px;
    width: 37px;
`

export const BsIcon = styled(BsPlayCircle)`
    color: #fff;
    height: 37px;
    width: 37px;
`

export const HiIcon = styled(HiOutlineClipboardList)`
    color: #fff;
    height: 37px;
    width: 37px;
`
export const P = styled.p`
    width: 130px;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
`

export const MainBtnWrapper =styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

export const MainImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`

export const Img = styled.img`
    width: 570px;
    height: 430px;

    @media screen and (max-width: 768px) {
        padding-bottom: 10px;
        width: 350px;
        height: 320px;
    }

    @media screen and (max-width: 480px) {
        width: 270px;
        height: 230px;
    }
`

export const SliderButtons = styled.div`
    z-index: 1;
`

export const ArrowButtons = css`
    position: absolute;
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    margin: 0 10px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        color: #017F36;
    }
`

export const PrevArrow = styled(IoMdArrowRoundBack)`
    ${ArrowButtons}
    left: 0;
`

export const NextArrow = styled(IoMdArrowRoundForward)`
    ${ArrowButtons}
    right: 0;
`