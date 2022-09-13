// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENTS ========================
import { AdminLayout } from 'Layout';
import { Form } from 'components/app/forms';
import { TextField } from 'components/atoms/form';
import Button from 'components/atoms/buttons/Button';
import withCustomerRoute from 'hoc/withCustomerRoute';

const customerAccountDetail = () => {
  return (
    <AdminLayout title="My Profile" subtitle="Account Details">
      <Form
        initialValues={{
          startdate: '',
          endDate: '',
        }}
      >
        {() => (
          <>
            <div className="flex justify-between sm:grid grid-cols-1">
              <div className="grid grid-cols-3 gap-x-32 gap-y-20 mb-22 w-100% sm:grid-cols-1">
                <TextField
                  name="firstName"
                  placeholder="rebecca"
                  mb="6"
                  className="h-38"
                  label="First Name"
                />
                <TextField
                  name="surname"
                  placeholder="warbis"
                  mb="6"
                  className="h-38"
                  label="Sur Name"
                />
                <TextField
                  name="companyName"
                  placeholder="photo name"
                  mb="6"
                  className="h-38"
                  label="company Name"
                />

                <TextField
                  name="phoneNumber"
                  placeholder="07929665622"
                  mb="6"
                  className="h-38"
                  label="phone number"
                  type="number"
                />

                <TextField
                  name="email"
                  placeholder="myemail@gmail.com"
                  mb="6"
                  className="h-38"
                  label="email address"
                />
              </div>
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 self-end sm:ml-auto sm:mr-auto"
              >
                Save
              </Button>
            </div>
            <div className="hr-b mt-33"></div>
            <div className="admin-h2 mt-20 mb-13">change password</div>
            <div className="hr-b pb-32 flex justify-between sm:grid grid-cols-1">
              <div className="grid grid-cols-3 gap-y-20 gap-x-32 w-100% sm:grid-cols-1">
                <TextField
                  name="oldPassword"
                  placeholder="******"
                  mb="6"
                  className="h-38"
                  label="old Password"
                />
                <TextField
                  name="newPassword"
                  placeholder="*****"
                  mb="6"
                  className="h-38"
                  label="New Password"
                />
                <TextField
                  name="confirmPassword"
                  placeholder="*******"
                  mb="6"
                  className="h-38"
                  label="Confirm New Password"
                />
              </div>
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 mt-90 sm:ml-auto sm:mr-auto sm:mt-30"
              >
                Save
              </Button>
            </div>
          </>
        )}
      </Form>
    </AdminLayout>
  );
};

export default withCustomerRoute(customerAccountDetail);
