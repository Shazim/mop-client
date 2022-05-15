import React from 'react';
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { TextField } from 'components/atoms/form';
import { useHistory } from 'react-router-dom';
import { usePost } from 'hooks';
import { signIn, signUp } from 'api';
import { generateSchema } from 'validation';
import { routes } from 'routes';

function SubscribeAuth({ title, onClick }) {
  const history = useHistory();
  const [login, { data: loginResponse }] = usePost(signIn);
  const [signup, { data: signupResponse }] = usePost(signUp);

  const handleLogin = () => {
    login({ variables: {} });
    history.push(routes.ROUTE_SUBSCRIBE_LOGGED);
  };

  const handleSignUp = () => {
    signup({ variables: {} });
    history.push(routes.ROUTE_SUBSCRIBE_LOGIN);
  };

  const initialValues = {
    email: '',
    password: '',
    confirm: '',
  };

  return (
    <div className="w-100%">
      <p className="font-avenir-reg text-2xl text-secondary leading-38 tracking-wider uppercase">
        {title}
      </p>
      <p
        className="font-bold link text-sm text-primary uppercase underline mt-8 leading-32 tracking"
        onClick={() =>
          history.push(
            `${
              title == 'Login'
                ? routes.ROUTE_SUBSCRIBE_SIGNUP
                : routes.ROUTE_SUBSCRIBE_LOGIN
            }`
          )
        }
      >
        {title == 'Login'
          ? 'Don’t have an account? Sign Up'
          : 'Already have an account? Login'}
      </p>
      <div className="w-100% flex justify-between xl:flex-col lg:flex-col md:flex-col sm:flex-col sm:px-20 mt-17">
        <Button
          className="w-31% xl:w-100% lg:w-100% md:w-100% sm:w-100% h-42"
          color="facebook"
          transform="uppercase"
        >
          {title} with Facebook
        </Button>
        <Button
          className="w-31% xl:w-100% lg:w-100% md:w-100% sm:w-100% xl:mt-17 lg:mt-17 md:mt-17 sm:mt-17 h-42"
          color="instagram"
          transform="uppercase"
        >
          {title} with Instagram
        </Button>
        <Button
          className="w-31% xl:w-100% lg:w-100% md:w-100% sm:w-100% xl:mt-17 lg:mt-17 md:mt-17 sm:mt-17 h-42"
          transform="uppercase"
        >
          {title} with pinterest
        </Button>
      </div>
      <div className="w-100% flex items-center justify-between mt-29">
        <div className="w-100% border-b border-border opacity-1"></div>
        <div className="font-bold text-sm mx-10 text-secondary tracking uppercase">
          or
        </div>
        <div className="w-100% border-b border-border opacity-1"></div>
      </div>
      <div className="mt-17 h-100%">
        <Form
          initialValues={initialValues}
          validationSchema={generateSchema(initialValues)}
        >
          <>
            <TextField
              className="w-455 lg:w-100% sm:w-100%"
              name="email"
              type="email"
              placeholder="ENTER EMAIL HERE"
              height="38"
              label="email address"
            />
            <div className="w-100% flex lg:flex-col md:flex-col sm:flex-col justify-between mt-10">
              <div className="w-48% lg:w-100% md:w-100% sm:w-100%">
                <TextField
                  name="password"
                  type="password"
                  placeholder="ENTER PASSWORD HERE"
                  height="38"
                  label="password"
                />
              </div>
              <div className="w-48% lg:w-100% md:w-100% sm:w-100%">
                <TextField
                  name="confirm"
                  type="password"
                  placeholder="ENTER PASSWORD HERE"
                  height="38"
                  label="confirm password"
                />
              </div>
            </div>
            <div className="w-100% border-b border-border opacity-1 mt-32 mb-27"></div>
            <div className="sm:hidden">
              <CheckBox value="I would like to receive insightful updates and emails. " />
            </div>
            <div className="w-100% sm:flex sm:justify-center">
              <Button
                className="w-262 h-41 mt-11 sm:w-95%"
                transform="uppercase"
                onClick={onClick}
              >
                {title}
              </Button>
            </div>
          </>
        </Form>
      </div>
    </div>
  );
}

export default SubscribeAuth;
