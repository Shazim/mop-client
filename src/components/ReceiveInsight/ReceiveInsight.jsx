import React, { useEffect } from 'react';
import { Form } from 'components/app/forms';
import { generateSchema } from 'validation';
import { TextField } from 'components/atoms/form';
import { usePost } from 'hooks';
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import { createInsight } from 'api/api-services';
import { toast } from 'react-toastify';

function ReceiveInsight({ image = '/images/girl.png' }) {
  const [post, { data: dataPost, status: statusPost }] = usePost(createInsight);

  useEffect(() => {
    if (dataPost) {
      toast.success(dataPost?.message);
    }
  }, [dataPost]);

  const submit = (data, { resetForm }) => {
    post({ variables: { insight: data } });
    resetForm();
  };

  return (
    <div className="flex items-center border-border border-t sm:border-t-0 sm:bg-offwhite ">
      {/* <div className=" max-screen sm:px-23 sm:w-100% pt-101 w-40% xl:w-45% lg:w-50% md:w-50% xl:pb-50 lg:pb-50 md:pb-50"> */}
      <div className=" m-auto sm:px-23 sm:w-100% pt-30 w-40% xl:w-45% lg:w-50% md:w-50%">
        <div className="sm:w-100% sm:flex-col sm:flex sm:items-center sm:justify-center sm:pb-50">
          <div className="tracking-wider text-2xl sm:text-center sm:text-xl uppercase font-avenir-reg pb-34">
            Join our mailing list Subscribe for priority access to our latest
            collections, seasonal sales, and and product developments
          </div>
          <Form
            initialValues={{
              name: '',
              email: '',
            }}
            onSubmit={submit}
            validationSchema={generateSchema({
              name: '',
              email: '',
            })}
          >
            {({ setFieldValue, values }) => (
              <>
                <div className="mb-34 sm:px-9 sm:w-100%">
                  <TextField
                    shadow="shadow"
                    className="w-100% h-48"
                    mb="8"
                    label="First Name"
                    name="name"
                    tracking="none"
                    textTransform="capitalize"
                    color="text-secondary-dark"
                  />
                </div>
                <div className="sm:px-9 sm:w-100% mb-19">
                  <TextField
                    shadow="shadow"
                    className="w-100% h-48"
                    name="email"
                    label="Email Address"
                    tracking="none"
                    mb="8"
                    textTransform="capitalize"
                    color="text-secondary-dark"
                  />
                </div>
                <SubmitButton className="w-251 mr-18 h-42 mt-25 mb-14">
                  Subscribe
                </SubmitButton>
              </>
            )}
          </Form>

          <div className="text-primary capitalize font-nunito-light text-base link ">
            See Terms & Conditions
          </div>
        </div>
      </div>
      <img
        className="sm:hidden flex xl:w-55% lg:w-50% md:w-50% object-fill"
        src={image}
        alt=""
      />
    </div>
  );
}

export default ReceiveInsight;
