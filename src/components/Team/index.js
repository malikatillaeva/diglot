import React, {useState, useRef} from 'react'
import {TeamContainer, TeamBg, ImgBg, TeamH1, TeamWrapper, ArrowDropleft, ArrowDropright, TeamSlide, TeamSlider, TeamInfo, TeamImg, TeamH2, TeamP} from './TeamComponents'
import ImgBg3 from '../../images/background3.png'

const Team = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setCurrent( current === length - 1 ? 0 : current + 1)

  }

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setCurrent( current === 0 ? length - 1 : current - 1)

  }

  if(!Array.isArray(slides)  || slides.length <=0){
    return null
  }

  return (
    <TeamContainer id="команда">
        <TeamBg>
            <ImgBg src={ImgBg3} />
        </TeamBg>
        <TeamH1>Наша команда</TeamH1>
        <TeamWrapper>
          <ArrowDropleft onClick={prevSlide}/>
          {slides.map((slide, index) => {
            return (
              <TeamSlide key={index}>
                {index === current && (
                <TeamSlider>
                  <TeamImg src={slide.image}/>
                  <TeamInfo>
                    <TeamH2>{slide.name}</TeamH2>
                    <TeamP>
                      <li>{slide.properties1}</li> 
                      <li>{slide.properties2}</li>
                      <li>{slide.properties3}</li>
                      <li>{slide.properties4}</li>
                      <li>{slide.properties5}</li>
                      <li>{slide.properties6}</li>
                      <li>{slide.properties7}</li>
                    </TeamP>
                  </TeamInfo>
                </TeamSlider>
                )}
              </TeamSlide>
            )
          })}
          <ArrowDropright onClick={nextSlide}/>
        </TeamWrapper>       
    </TeamContainer>
  )
}

export default Team