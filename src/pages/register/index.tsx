import DefaultLayout from "@/components/Layout";
import { authenticationRepository } from "@/repository/authentication";
import { Button, Card, Form, Input, Typography, message } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

const { Title } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      const body = {
        username: values.username,
        password: values.password,
      };

      await authenticationRepository.api.register(body);
      message.success("Register Successfully");
      await router.push("/login");
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      // message.error(err.response.data.message[0]);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Title level={3}>Register</Title>
      <Card className="w-full">
        <Form form={form} layout={"vertical"} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Ardhi..." />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="081 337 436 557" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="******" />
          </Form.Item>
          <Form.Item
            name={"password_confirm"}
            label={"Confirm Password"}
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please input Password Confirmation!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder={"******"} />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType={"submit"}
              type="primary"
              className="bg-[#1677ff] mt-4"
              onClick={handleSubmit}
              loading={isLoading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

Register.getLayout = function Layout(page: any) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Register;
