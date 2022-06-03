import React, {useState, useRef} from 'react'
import image from '../../images/MainBg.png'
import {Button} from '../ButtonElement'
import { Modal } from '../Modal'
import {MainContainer, MainBg, ImageBg, MainContent, MainSlide, MainSlider, MainInfo, MainH1, MainP, MainIcons, BsIcon, BiIcon, HiIcon, P, MainBtnWrapper, MainImg, Img, NextArrow, PrevArrow, SliderButtons} from './MainComponents'

const MainSection = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const length = slides.length
  const timeout = useRef(null)

/*  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }

    timeout.current = setTimeout(nextSlide, 1000)

    return function() {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])*/

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

    //console.log(current);
  }

  if(!Array.isArray(slides)  || slides.length <=0){
    return null
  }

  const openModal = () => {
    setShowModal(prev => !prev)
  }
  
  return (
    <MainContainer id="главная">
        <MainBg>
            <ImageBg src={image} />
        </MainBg>
        <SliderButtons><PrevArrow onClick={prevSlide}/></SliderButtons>
        <MainContent>
          {slides.map((slide, index) => {
            return(
              <MainSlide key={index}>
                {index === current && (
                  <MainSlider>
                  <MainInfo>
                    <MainH1>{slide.title}</MainH1>
                    <MainP>{slide.description}</MainP>
                    <MainIcons><BsIcon /><P>{slide.start}</P></MainIcons>
                    <MainIcons><BiIcon /><P> {slide.duration}</P></MainIcons>
                    <MainIcons><HiIcon /><P> {slide.requirement}</P></MainIcons>
                    <MainBtnWrapper><Button onClick={openModal} primary='true' dark='true' big='true'>Подробнее</Button>
                    <Modal showModal={showModal} setShowModal={setShowModal}> </Modal></MainBtnWrapper>
                  </MainInfo>
                  <MainImg><Img src={slide.image}/></MainImg>
                </MainSlider>
                )} 
              </MainSlide>
            )
        })} 
      </MainContent>
      <SliderButtons><NextArrow onClick={nextSlide}/></SliderButtons>
  </MainContainer>  
  );
};

export default MainSection;
