import * as yup from 'yup';
import React from 'react';
import moment from 'moment';

export const RenderError = (error = false) => {
  if (error) return <div className="text-red-600 mt-1 text-12">{error}</div>;
};

const emailRegx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

export const emailValidation = yup.object({
  email: yup
    .string()
    .required('Please enter email address')
    .matches(emailRegx, 'Please enter valid email.'),
});

export const passwordValidation = yup.object({
  password: yup
    .string()
    .required('Please enter password')
    .matches(
      passwordRegx,
      'password must be eight characters including one uppercase letter, one special character and alphanumeric characters',
    ),
});
