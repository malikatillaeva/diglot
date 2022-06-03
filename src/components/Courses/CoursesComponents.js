import styled from "styled-components";
import {BsClockHistory} from 'react-icons/bs'
import {AiOutlineFileDone, AiOutlineSchedule} from 'react-icons/ai'
import {GrCertificate} from 'react-icons/gr'

export const CourseContainer = styled.div`
    height: 588px;
    padding-bottom: 55px;
    position: relative;
    width: 100vw;
`

export const CourseBg = styled.div`
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
export const CourseH1 = styled.h1`
    font-weight: 700;
    font-size: 32px;
    color: #000;
    text-align: center;
    padding: 90px 0 48px 0;
`

export const CourseWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 38px;
`

export const CourseCard = styled.div`
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 358px;
    width: 240px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    };

    &:hover:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        height: 122px;
        border-top: 2px solid #017F36;
        border-right: 2px solid #017F36;
        transition: 0.5s;
    }

    &:hover:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 70px;
        height: 122px;
        border-bottom: 2px solid #017F36;
        border-left: 2px solid #017F36;
        transition: 0.5s;
    }
`

export const CourseImg = styled.img`
    height: 89px;
    width: 234px;
`

export const CourseInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    padding:12px 0 ;
`
export const CourseIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 130px;
`

export const Icon1 = styled(BsClockHistory)`
    width: 32px;
    height: 32px;
`

export const Icon2 = styled(AiOutlineFileDone)`
    width: 32px;
    height: 32px;
`

export const Icon3 = styled(GrCertificate)`
    width: 32px;
    height: 32px;
`

export const Icon4 = styled(AiOutlineSchedule)`
    width: 32px;
    height: 32px;
`

export const CourseP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 145px;
`

export const P = styled.p`
    color: #000;
    font-size: 16px;
    line-height: 18px;
    padding: 11px 0 11px 5px ;
    width: 180px;
`
export const CourseBtnWrapper =styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

