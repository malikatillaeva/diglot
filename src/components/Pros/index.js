import React from 'react'
import { ProsContainer, ProsBg, ImgBg, ProsH1, ProsWrapper, ProsInfo, ProsIcon, ProsCard, ProsH3, ProsP } from './ProComponents'
import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/healthicons_i-schedule-school-date-time.svg'
import Icon3 from '../../images/mdi_transit-connection-variant.svg'
import Icon4 from '../../images/ph_chalkboard-teacher.svg'
import Icon5 from '../../images/wpf_diploma-1.svg'
import Img from '../../images/background2.png'

const Pros = () => {
  return (
    <ProsContainer id="преимущества">
      <ProsBg>
        <ImgBg src={Img} />
      </ProsBg>
      <ProsH1>Наши преимущества</ProsH1>
      <ProsWrapper>
        <ProsInfo>
          <ProsIcon src={Icon1} />
          <ProsCard><ProsH3>Педагоги</ProsH3>
          <ProsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</ProsP></ProsCard>
        </ProsInfo>
        <ProsInfo>
          <ProsIcon src={Icon2} />
          <ProsCard><ProsH3>Внеурочные занятия(leanguage learning lab)</ProsH3>
          <ProsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus</ProsP></ProsCard>
        </ProsInfo>
        <ProsInfo>
          <ProsIcon src={Icon3} />
          <ProsCard><ProsH3>Методика</ProsH3>
          <ProsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</ProsP></ProsCard>
        </ProsInfo>
        <ProsInfo>
          <ProsIcon src={Icon4} />
          <ProsCard><ProsH3>Обучение гос служащих</ProsH3>
          <ProsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</ProsP></ProsCard>
        </ProsInfo>
        <ProsInfo>
          <ProsIcon src={Icon5} />
          <ProsCard><ProsH3>Эксклюзивная программа</ProsH3>
          <ProsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla</ProsP></ProsCard>
        </ProsInfo>
      </ProsWrapper>
    </ProsContainer>
  )
}

export default Pros