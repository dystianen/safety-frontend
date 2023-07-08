import { Button, Form, Input, Select, Typography } from "antd";
import { BiMap } from "react-icons/bi";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useState } from "react";
import DefaultLayout from "@/components/Layout";

const { Text, Link } = Typography;

const Report = () => {
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div className="p-5">
      <Text>
        Anda sedang berada di titik lat: 18729337, long: -9826367 Jatibening
        baru, pondok gede, bekasi
      </Text>
      <Link className="flex flex-row items-center gap-2">
        <BiMap />
        Gunakan lokasi akurat
      </Link>

      <Form form={form} layout={"vertical"} className="mt-10">
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please input your category!" }]}
        >
          <Select
            size="large"
            defaultValue=""
            options={[
              { value: "kejahatan", label: "Kejahatan" },
              { value: "bencana", label: "Bencana" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: "Please input your type!" }]}
        >
          <Select
            size="large"
            options={[
              { value: "penculikan", label: "Penculikan" },
              { value: "pembegalan", label: "Pembegalan" },
            ]}
          />
        </Form.Item>
        <ImgCrop rotationSlider>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
        <Form.Item
          name="delegated_to"
          label="Delegated To"
          rules={[
            { required: true, message: "Please input your delegated to!" },
          ]}
        >
          <Select
            mode="multiple"
            size="large"
            options={[
              { value: "damkar", label: "Damkar" },
              { value: "police", label: "Police" },
              { value: "tni", label: "TNI" },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

Report.getLayout = function Layout(page: any) {
  return <DefaultLayout navigation={true}>{page}</DefaultLayout>;
};
export default Report;
