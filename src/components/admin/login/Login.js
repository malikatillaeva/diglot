import React from 'react'
import { Container, FormContent, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, FormButton } from './LoginElements'

const Login = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <Icon to='/'>Diglot</Icon>
              <FormH1>Sign in  to your account</FormH1>
              <FormLabel htmlFor='for'>Login</FormLabel>
              <FormInput type='text' required></FormInput>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton type='submit'>Вход</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Login