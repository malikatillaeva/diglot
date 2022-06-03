import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(180deg, #000000 -48.71%, rgba(1, 127, 54, 0.16) 127.71%);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`

const ModalWrapper = styled.div`
    width: 700px;
    background: #ffffff;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 8px 50px;

    h2 {
        font-size: 24px;
        line-height: 28px;
    }

    p {
        font-size: 16px;
        line-height: 19px;
    }

    button {
        width: 200px;
        height: 40px;
        padding: 9px 0 8px;
        background: #017f36;
        color: #ffffff;
        font-size: 16px;
        line-height: 24px;
        cursor: pointer;
        border: none;
    }
`

const ModalImg = styled.img`
    width: 500px;
    height: 264px;
    object-fit: cover;
    -o-object-fit: cover;
`

const CloseModalButton = styled(MdClose)`
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    cursor: pointer;
    position: absolute;
    color: #ffffff;
`


export const Modal = ({ showModal, setShowModal}) => {
    return (
        <>
        {showModal ?  <Background>
            <ModalWrapper showModal={showModal}>
                <ModalImg src={require('../images/TKT.png')}/>
                <h1>TKT - Teacher Training Program</h1>
                <p>Двухнедельная программа для учителей по подготовке к трём модулям международного экзамена TKT в сотрудничестве с американскими компаниями Access и Pinnacle Academy.</p>
                <p>Для подробной информации, звоните нам! </p>
                <a href='tel:+998(90)-788-80-06'>+998(90)-788-80-06</a>
                <button onClick={() => setShowModal(prev => !prev)}>Закрыть</button>                
            </ModalWrapper>
            <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} ></CloseModalButton>
        </Background> : null}
        </>
    )
}