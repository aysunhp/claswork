import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { dividerClasses } from "@mui/material";
const AddCategory = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ name: "", description: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        } else if (values.name.length < 3 || values.name.length > 10) {
          errors.name = "Invalid name";
        } else if (
          !/^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/i.test(
            values.description
          )
        ) {
          errors.description = "Invalid description";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        let obj;
        obj = {
          name: values.name,
          description: values.description,
        };
        axios.post("http://localhost:3000/categories", obj);

        navigate("/categories");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            style={{
              width: "400px",
              height: "40px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          <br />
          <input
            type="test"
            name="description"
            style={{
              width: "400px",
              height: "40px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {errors.description && touched.description && errors.description}
          <br />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "80px",
              height: "30px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default AddCategory;
