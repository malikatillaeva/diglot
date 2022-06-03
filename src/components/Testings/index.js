import React from 'react'
import TktBg from '../../images/test1.png'
import LngBg from '../../images/test2.png'
import {TestContainer, TestH1, TestWrapper, TestCard, TestCardBg, TestImg, TestInfo, TestH2, TestP, TextBtnWrapper} from './TestComponents'
import {Button} from '../ButtonElement'

const Tests = () => {
  return (
    <TestContainer id="тесты">
        <TestH1>Тесты</TestH1>
        <TestWrapper>
            <TestCard>
                <TestCardBg>
                    <TestImg src={TktBg} />
                </TestCardBg>
                <TestInfo>
                    <TestH2>TKT - Teaching Knowledge Test</TestH2>
                    <TestP>экзамен по методике, который подходит для всех преподавателей английского языка. Это гибкий модульный тест.</TestP>
                    <TextBtnWrapper><Button to='signup' big='true'>Подробнее</Button></TextBtnWrapper>
                </TestInfo>
            </TestCard>
            <TestCard>
                <TestCardBg><TestImg src={LngBg} /></TestCardBg>
                <TestInfo>
                    <TestH2>Linguaskill</TestH2>
                    <TestP>экзамен по методике, который подходит для всех преподавателей английского языка. Это гибкий модульный тест.</TestP>
                    <TextBtnWrapper><Button to ='signup' big='true'>Подробнее</Button></TextBtnWrapper>
                </TestInfo>
            </TestCard>
        </TestWrapper>
    </TestContainer>
  )
}

export default Tests