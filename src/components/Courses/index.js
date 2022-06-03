import React from 'react'
import {CourseContainer, CourseBg, ImageBg, CourseH1, CourseWrapper, CourseCard, CourseImg, CourseInfo, CourseIcons, Icon1, Icon2, Icon3, Icon4, CourseP, P, CourseBtnWrapper} from './CoursesComponents'
import Tkt from '../../images/Tkt1.png'
import PKI from '../../images/PKI.png'
import Linguaskill from '../../images/linguaskill.png'
import IELTS from '../../images/IELTS.png'
import Bg from '../../images/background1.png'
import { Button } from '../ButtonElement'

const Course = () => {
  return (
    <CourseContainer id="курсы">
        <CourseBg><ImageBg src={Bg}/></CourseBg>
        <CourseH1>Наши курсы</CourseH1>
        <CourseWrapper>
            <CourseCard>
                <CourseImg src={Tkt} />
                <CourseInfo>
                    <CourseIcons><Icon1  /><Icon2 /><Icon3  /></CourseIcons>
                    <CourseP><P>Курс длится 3 месяца</P>
                    <P>Каждый модуль сдаётся TKT тест</P>
                    <P>Выдаётся сертификат</P></CourseP> 
                </CourseInfo>
                <Button to='signup'>Подробнее</Button>
            </CourseCard>
            <CourseCard>
                <CourseImg src={PKI}/>
                <CourseInfo>
                    <CourseIcons><Icon1  /><Icon2 /><Icon4  /></CourseIcons>
                    <CourseP><P>Курс длится 1 месяц</P>
                    <P>Специальная программа для Вас</P>
                    <P>Гибкий график</P></CourseP> 
                </CourseInfo>
                <Button to='signup'>Подробнее</Button>
            </CourseCard>
            <CourseCard>
                <CourseImg src={Linguaskill}/>
                <CourseInfo>
                    <CourseIcons><Icon1  /><Icon2 /><Icon3  /></CourseIcons>
                    <CourseP><P>Курс длится 3 месяца</P>
                    <P>Охватывает все 4 секции</P>
                    <P>Бесплатная консультация</P></CourseP> 
                </CourseInfo>
                <Button to='signup'>Подробнее</Button>
            </CourseCard>
            <CourseCard>
                <CourseImg src={IELTS}/>
                <CourseInfo>
                    <CourseIcons><Icon1  /><Icon2 /><Icon3  /></CourseIcons>
                    <CourseP><P>Курс длится 3 месяца</P>
                    <P>Охватывает все 4 секции</P>
                    <P>Бесплатная консультация</P></CourseP> 
                </CourseInfo>
                <CourseBtnWrapper><Button to='signup'>Подробнее</Button></CourseBtnWrapper>
            </CourseCard>
        </CourseWrapper>
    </CourseContainer>
  )
}

export default Course