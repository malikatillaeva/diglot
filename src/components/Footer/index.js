import React from 'react'
import { FooterContainer, FooterWrap, Infos, InfosIcons, InfosIconLink, SocialMedia, SocialMediaWrap, Logo, SocialIcons, SocialIconLink, FooterLinksContainer } from './FooterElements'
import {FaFacebookSquare, FaInstagramSquare, FaTiktok} from 'react-icons/fa'
import {GrMail, GrLocation, GrPhone} from 'react-icons/gr'
import logo from '../../images/LogoDiglot.png'
import MapContainer  from './Map'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <Logo to='/' src={logo} onClick={toggleHome} type='DiglotLogo/png'/>
                <Infos>
                    <InfosIcons>
                        <InfosIconLink href='mailto:diglot@diglot.gmail.com'><GrMail style={{width: '30px', height: '30px', marginRight: '39px'}}/>diglot@diglot.gmail.com</InfosIconLink>
                    </InfosIcons>
                    <InfosIcons>
                        <InfosIconLink href='tel:+998 (97) 707 77 07'><GrPhone style={{width: '30px', height: '30px', marginRight: '39px'}}/>+998 (97) 707 77 07</InfosIconLink>
                    </InfosIcons>
                    <InfosIcons>
                        <InfosIconLink href="https://goo.gl/maps/1soXGUSvezsTics7A"><GrLocation style={{width: '30px', height: '30px', marginRight: '39px'}}/>16Б Said Baraka ko'chasi, Тошкент 100060</InfosIconLink>
                    </InfosIcons>
                </Infos>
            </FooterLinksContainer>
                <MapContainer />
                <SocialMedia>
                   <SocialMediaWrap>
                       <SocialIcons>
                           <SocialIconLink href='https://www.tiktok.com/@diglot_lpa?_d=secCgwIARCbDRjEFSADKAESPgo8E1%2FjLNb%2Bfl9F3xmj1F1Xe8OuwejR4K5IQN6NZwH05iZKRVgIRwrd5AIUd9NWhG9Q0taQ9KUIRZJL%2BrUPGgA%3D&checksum=1f563c24ab8a19277fe0c6302aae5042819356b44fa07adc58286076e7463e2e&language=ru&sec_uid=MS4wLjABAAAAPDvzTBGMho8ewIwk6DGaWBIdRtWcab6f5J-QUKp26X2twYniK7NGyeq5Fc4kmkXS&sec_user_id=MS4wLjABAAAA7wgl4W_VOqck5qmZhzxHLNxuniN6bLt2Wg-7GDRYp5WW-9L6LLp1HaGvYiMxtFW-&share_app_id=1233&share_author_id=7011023252847936514&share_link_id=B534B914-5D8E-4597-BA3C-3398513B2D49&tt_from=copy&u_code=dfg7l39ih6i69a&user_id=6896765105917740034&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m&_r=1' target='_blank' aria-label='Tiktok'>
                               <FaTiktok />
                           </SocialIconLink>
                           <SocialIconLink href='//www.facebook.com/diglotlpa/' target='_blank' aria-label='Facebook'>
                               <FaFacebookSquare />
                           </SocialIconLink>
                           <SocialIconLink href='//www.instagram.com/diglot_lpa/?utm_medium=copy_link' target='_blank' aria-label='Instagram'>
                               <FaInstagramSquare />
                           </SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
                </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer