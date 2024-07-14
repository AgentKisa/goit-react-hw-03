import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Name must be more than 3 chars!")
      .max(50, "Name must be less than 50 chars"),
    number: Yup.number().required("Required!"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    console.log(data);
    addContact({
      id: nanoid(),
      name: data.name,
      number: data.number,
    });
    actions.resetForm();
  };

  return (
    <div className={s.formContainer}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <label>
            <span>Number:</span>
            <Field name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
