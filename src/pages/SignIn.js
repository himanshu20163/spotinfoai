import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Layout, Row, Col, Typography, Form, Input, Button,Alert } from "antd";
import api from "../utils/url";
import signinbg from "../assets/images/logo.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";
const { Title } = Typography;

const SignIn = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ visible: false, type: "", message: "" });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values ,{ setErrors }) => {
      try {
        const response = await api.post(`/auth/login/`, values);
        console.log(response);
        sessionStorage.setItem("token", response.data.access);
        sessionStorage.setItem("username", response.data.user.username);
        setAlert({
            visible: true,
            type: "success",
            message: response.data.access,
          });
          
          navigate("/dashboard");
       
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
          <img src={signinbg} alt="Sign In Background" />
        </Col>
        <Col xs={24} lg={8}>
          <Title level={2}>Welcome Back</Title>
          <Form layout="vertical" onFinish={formik.handleSubmit}>
            <Form.Item label="Email" validateStatus={formik.errors.email ? "error" : ""}>
              <Input
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Item>
            <Form.Item label="Password" validateStatus={formik.errors.password ? "error" : ""}>
              <Input.Password
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>

            <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    
                    Remember me
                  </Form.Item>

                  <p className="font-semibold text-muted text-center">
                    Don't have an account?{" "}
                    <Link to="/sign-up" className="text-dark font-bold">
                      Sign Up
                    </Link>
                  </p>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignIn;
