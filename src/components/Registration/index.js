import React from 'react'
import background4 from '../../images/background4.png'
import { RegContainer, RegBg, Img, RegH1, RegWrapper, RegInputs, RegLabel, Input, Select } from './RegistrationComponents'
import useForm from './useForm'
import validate from './validateInfo'

const Reg = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
  return (
    <RegContainer id='reg'>
        <RegBg>
            <Img src={background4} />
        </RegBg>
        <RegH1>Записаться на курс</RegH1>
        <RegWrapper onSubmit={handleSubmit}>
            <RegInputs>
                <RegLabel>Выберите тип</RegLabel>
                <Select id='type' name='type' onChange={handleChange}>
                    <option value='none' selected disabled hidden>Тест / Курс</option>
                    <option value='Тест'>Тесты</option>
                    <option value='Курс'>Курсы</option>
                </Select>
            </RegInputs>
            <RegInputs>
                <RegLabel>Выберите курс</RegLabel>
                <Select id='course' name='course' onChange={handleChange}>
                    <option value='TKT - Teaching Knowledge test'>TKT - Teaching Knowledge test</option>
                    <option value='РКИ'>РКИ</option>
                    <option value='Linguaskill'>Linguaskill</option>
                    <option value='IELTS'>IELTS</option>
                </Select>
            </RegInputs>
            <RegInputs>
                <RegLabel>Полное имя</RegLabel>
                <Input id='fullname' name='fullname' type='text' placeholder='Ф.И.О' value={values.fullname} onChange={handleChange}></Input>
                {errors.fullname && <p>{errors.fullname}</p>}
            </RegInputs>
            <RegInputs>
                <RegLabel>Номер телефона</RegLabel>
                <Input id='number' name='number' type='number' placeholder='+998 (--) --- -- --' value={values.number} onChange={handleChange}></Input>
            </RegInputs>
            <RegInputs>
                <RegLabel>Год рождения</RegLabel>
                <Select id='days' name='days' style={{width: '100px'}} onChange={handleChange}>
                    <option value='days'>Days</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                </Select>
                <Select id='month' name='month' style={{width: '100px', margin: '0 20px'}} onChange={handleChange}>
                    <option value='month'>Months</option>
                    <option value='01'>01</option>
                    <option value='02'>02</option>
                    <option value='03'>03</option>
                    <option value='04'>04</option>
                    <option value='05'>05</option>
                    <option value='06'>06</option>
                    <option value='07'>07</option>
                    <option value='08'>08</option>
                    <option value='09'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                </Select>
                <Select id='years' name='years' style={{width: '150px'}} onChange={handleChange}>
                    <option value='years'>Years</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </Select>
            </RegInputs>
            <RegInputs>
                <RegLabel>Профессия</RegLabel>
                <Input id='profession' name='profession' type='text'value={values.profession} onChange={handleChange}></Input>
            </RegInputs>
            <RegInputs>
                <RegLabel>Вторая половина дня</RegLabel>
                <Select id='time' name='time' onChange={handleChange}>
                    <option value = '15:00 - 16:30 '>15:00 - 16:30 </option>
                    <option value = '13:30 - 15:00 '>13:30 - 15:00 </option>
                </Select>
            </RegInputs>
            <RegInputs>
                <Input type='submit' value='Подать заявку' style={{background: '#017f36', color: '#fff', fontSize: '24px', marginTop: '23px'}}></Input>
            </RegInputs>
        </RegWrapper>
    </RegContainer>
  )
}

export default Reg