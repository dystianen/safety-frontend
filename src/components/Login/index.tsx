import React from "react";
import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import DefaultLayout from "../Layout";

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Title level={3}>Login</Title>
      <Card className="w-full">
        <Form form={form} layout={"vertical"}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="******" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="bg-[#1677ff]">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

Login.getLayout = function Layout(page: any) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Login;
