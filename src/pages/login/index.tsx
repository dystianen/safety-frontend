import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input, Typography, message } from "antd";
import DefaultLayout from "@/components/Layout";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "@/components/StoreProvider";

const { Title, Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const store = useStore();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      const body = {
        email: values.username,
        password: values.password,
      };

      await store.authentication.login(body);
      form.resetFields();
      message.success("Login Successfully");
      await router.push("/");
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Title level={3}>Login</Title>
      <Card className="w-full">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-[#1677ff]">
              Log in
            </Button>{" "}
            <br />
            <Text>
              Or <Link href={"/register"}>Register now!</Link>
            </Text>
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
