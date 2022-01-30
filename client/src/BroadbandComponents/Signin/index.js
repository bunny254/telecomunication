import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignInComponents';

const SignIn = () => {
  return (
  <>
  <Container>
      <FormWrap>
          <Icon to="/">Broadband</Icon>
          <FormContent>
              <Form action='#'>
                  <FormH1> LogIn into your account</FormH1>
                  <FormLabel htmlFor='for'>Email</FormLabel>
                  <FormInput type='email'></FormInput>
                  <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput type='password' required/>
                  <FormButton type='submit'>Continue</FormButton>
                  <Text>Reset Password</Text>
              </Form>
          </FormContent>
      </FormWrap>
  </Container>
  </>
  );
};

export default SignIn;
