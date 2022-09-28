import { Layout } from "antd";
import React, { useState } from "react";
import { LayoutStyle } from "./LayoutContainerStyle";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { Slider } from "../Slider/Slider";
const { Header, Footer, Sider, Content } = Layout;


const LayoutContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <LayoutStyle>
      <Layout>
        <Header>VETC</Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: `trigger ${collapsed && "text-center"}`,
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Slider />
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </LayoutStyle>
  );
};
export default LayoutContainer;
