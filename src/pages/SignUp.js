import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Layout, Row, Col, Typography, Form, Input, Button, Alert } from "antd";
import api from "../utils/url";
import signinbg from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const { Title } = Typography;

const SignUp = () => {
  const [alert, setAlert] = useState({ visible: false, type: "", message: "" });

  const formik = useFormik({
    initialValues: {
      email: "",
      password1: "",
      password2: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password1: Yup.string().required("Password is required"),
      password2: Yup.string()
        .oneOf([Yup.ref("password1"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { resetForm, setErrors }) => {
      try {
        const response = await api.post(`/auth/registration/`, values);

        sessionStorage.setItem("token", response.data.access);
        setAlert({
          visible: true,
          type: "success",
          message: "Signup successful",
        });

        resetForm(); // Clear form after successful submission
      } catch (error) {
        if (error.response && error.response.status === 400) {
          const errors = error.response.data;

          if (errors.non_field_errors) {
            setAlert({
              visible: true,
              type: "warning",
              message: errors.non_field_errors[0],
            });
          }

          setErrors(errors); // Map server-side validation errors to form fields
        } else {
          setAlert({
            visible: true,
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        }
      }
    },
  });

  return (
    <Layout className="layout-signin">
      <Row justify="center" align="middle" className="signin">
        <Col xs={24} lg={12}>
          <img src={signinbg} alt="Sign Up Background" />
        </Col>
        <Col xs={24} lg={8}>
          <Title level={2}>Welcome to Signup</Title>

          {/* Conditionally Render Alert */}
          {alert.visible && (
            <Alert
              message={alert.message}
              type={alert.type}
              showIcon
              closable
              onClose={() => setAlert({ visible: false })}
            />
          )}

          <Form layout="vertical" onFinish={formik.handleSubmit}>
            <Form.Item
              label="Email"
              validateStatus={formik.errors.email ? "error" : ""}
              help={formik.errors.email}
            >
              <Input
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              validateStatus={formik.errors.password1 ? "error" : ""}
              help={formik.errors.password1}
            >
              <Input.Password
                name="password1"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password1}
              />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              validateStatus={formik.errors.password2 ? "error" : ""}
              help={formik.errors.password2}
            >
              <Input.Password
                name="password2"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.password2}
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>

            <p className="font-semibold text-muted text-center mt-4">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-dark font-bold">
                Sign In
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignUp;
