import styled from "styled-components";

export const RegContainer = styled.div`
    height: 690px;
    padding: 50px 0;
    position: relative;
    width: 100vw;
`

export const RegBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const RegH1 = styled.h1`
    font-weight: 700;
    font-size: 32px;
    color: #000;
    text-align: center;
    padding-bottom: 50px;
    position: relative;
`

export const RegWrapper = styled.form`
    max-width: 800px;
    height: 490px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
`

export const RegInputs = styled.div`
    width: 390px;
    height: 100px;
`

export const RegLabel = styled.label`
    display: block;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000;
`
export const Input = styled.input`
    position: relative;
    background: #FFFFFF;
    border: 3px solid #017F36;
    box-sizing: border-box;
    width: 390px;
    padding-top: 7px;
    height: 73px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    padding: 25px 4px;
    
`

export const Select = styled.select`
    position: relative;
    background: #FFFFFF;
    border: 3px solid #017F36;
    box-sizing: border-box;
    width: 390px;
    padding-top: 7px;
    height: 73px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    padding: 20px 4px;

`
