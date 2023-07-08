import React from "react";
import { Layout } from "antd";
import Navigation from "./Navigation";

const { Content } = Layout;

export default function DefaultLayout({
  children,
  navigation = false,
}: {
  children: React.ReactNode;
  navigation?: boolean;
}) {
  return (
    <Layout className={"max-w-md mx-auto"} hasSider={true}>
      <Content className="relative">
        <div className={"bg-teal-200 text-black min-h-screen px-2"}>
          {children}
        </div>
        {navigation && <Navigation />}
      </Content>
    </Layout>
  );
}
