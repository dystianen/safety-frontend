import DefaultLayout from "@/components/Layout";
import { Button, Card, Form, Input, Typography } from "antd";

const { Title } = Typography;

const Register = () => {
  const [form] = Form.useForm();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Title level={3}>Register</Title>
      <Card className="w-full">
        <Form form={form} layout={"vertical"}>
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
            rules={[{ required: true, message: "Please input your email!" }]}
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

Register.getLayout = function Layout(page: any) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Register;
