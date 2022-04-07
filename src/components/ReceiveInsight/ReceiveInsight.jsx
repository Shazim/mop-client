import React, { useEffect } from 'react';
import { Form } from 'components/app/forms';
import { generateSchema, artworkSchema } from 'validation';
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

  const data = (data) => {
    post({ variables: { insight: data } });
  };

  return (
    <div className="flex border-border border-t ">
      <div className=" max-screen pt-101 w-40% ">
        <div>
          <div className="tracking-wider text-2xl uppercase font-avenir-reg pb-34">
            Receive insights and news from the worlds leading voices
          </div>
          <Form
            initialValues={{
              name: '',
              email: '',
            }}
            onSubmit={data}
            validationSchema={generateSchema({
              name: '',
              email: '',
            })}
          >
            <div className="mb-32">
              <TextField
                shadow="shadow"
                height="40"
                mb="10"
                label="First Name"
                name="name"
                tracking="none"
                textTransform="capitalize"
                color="text-secondary-dark"
              />
            </div>
            <div>
              <TextField
                shadow="shadow"
                height="40"
                name="email"
                label="Email Address"
                tracking="none"
                mb="10"
                textTransform="capitalize"
                color="text-secondary-dark"
              />
            </div>
            <SubmitButton className="w-251 mr-18 h-42 mt-44 mb-14">
              Subscribe
            </SubmitButton>
          </Form>
          <div className="text-primary capitalize font-nunito-light text-base link">
            See Terms & Conditions
          </div>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default ReceiveInsight;
