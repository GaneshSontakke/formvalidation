import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import styles from "./index.module.css";
import 'animate.css';

const CustomForm = () => {
  
  YupPassword(yup);

  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email Can't Be Blank.")
      .email("Please Enter Valid Email"),
    mobileNumber: yup
      .string()
      .length(10)
      .minNumbers(10)
      .required("Mobile Number Can't Be Blank."),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required("Password Can't Be Blank")
      .minLowercase(1, "Min 1 Lowercase Letter Is Required")
      .minUppercase(1, "Min 1 Uppercase Letter Is Required")
      .minNumbers(1, "Min 1 Digit Is Required")
      .minSymbols(1, "Min 1 Special Character Is Required"),

    confirmPassword: yup
      .string()
      .required("Confirm Password Can't Be Blank")
      .oneOf([yup.ref("password")], "Password Must Match"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={(data) => {
        // console.log(data.confirmPassword === data.password);
        console.log(data);
        alert("Registration Succfully  ")
     
      }}>
      <Form id={styles.form}>
        <h2 className="op">Registration From!</h2>
        <Field type="email" name="email" placeholder="Enter Your Email" />
        <p className={styles.errorLine}>
          <ErrorMessage name="email" />
        </p>

        <Field
          type="password"
          name="password"
          placeholder="Enter Your Password"
        />
        <p className={styles.errorLine}>
          <ErrorMessage name="password" />
        </p>

        <Field
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
        />
        <p className={styles.errorLine}>
          <ErrorMessage name="confirmPassword" />
        </p>

        <Field
          type="number"
          name="mobileNumber"
          placeholder="Enter Contact Number"
        />
        <p className={styles.errorLine}>
          <ErrorMessage name="mobileNumber" />
        </p>

        <Field type="submit" value="Submit" />
      </Form>
    </Formik>
  );
};

export default CustomForm;
