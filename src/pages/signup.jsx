import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import TextField from 'components/atoms/form/TextField';
import SubHeader from 'components/molecules/header/SubHeader';
import Package from 'components/Packages/package';
import React from 'react';

function Signup() {
  return (
    <div>
      <SubHeader title="subscribe to this plan" />
      <div className="bg-gray-dark">
        <div className="max-screen flex pt-48 pb-299 ">
          <div className="w-65% xl:w-60% lg:w-60% md:w-60%">
            <p className="font-avenir-reg text-2xl text-secondary leading-38 tracking-wider uppercase">
              sign up
            </p>
            <p className="font-bold link text-sm text-primary uppercase underline mt-8 leading-32 tracking">
              Already have an account? Login
            </p>
            <div className="w-100% flex justify-between xl:flex-col lg:flex-col md:flex-col mt-17">
              <Button
                className="w-31% xl:w-100% lg:w-100% md:w-100% h-42"
                color="facebook"
                transform="uppercase"
              >
                Sign up with Facebook
              </Button>
              <Button
                className="w-31% xl:w-100% lg:w-100% md:w-100% xl:mt-17 lg:mt-17 md:mt-17 h-42"
                color="instagram"
                transform="uppercase"
              >
                Sign up with Instagram
              </Button>
              <Button
                className="w-31% xl:w-100% lg:w-100% md:w-100% xl:mt-17 lg:mt-17 md:mt-17 h-42"
                transform="uppercase"
              >
                Sign up with pinterest
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
              <Form initialValues={{ email: '', password: '', confirm: '' }}>
                <>
                  <TextField
                    className="w-455 lg:w-100%"
                    name="email"
                    type="email"
                    placeholder="ENTER EMAIL HERE"
                    height="38"
                    label="email address"
                  />
                  <div className="w-100% flex lg:flex-col md:flex-col justify-between mt-10">
                    <div className="w-48% lg:w-100% md:w-100%">
                      <TextField
                        name="password"
                        type="password"
                        placeholder="ENTER PASSWORD HERE"
                        height="38"
                        label="password"
                      />
                    </div>
                    <div className="w-48% lg:w-100% md:w-100%">
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
                  <CheckBox value="I would like to receive insightful updates and emails. " />
                  <Button className="w-262 h-41 mt-11" transform="uppercase">
                    sign up
                  </Button>
                </>
              </Form>
            </div>
          </div>
          <div className="w-35% xl:w-40% lg:w-40% md:w-40% flex items-center justify-end">
            <Package />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
