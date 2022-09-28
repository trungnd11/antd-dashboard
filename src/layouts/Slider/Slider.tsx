import React from 'react'
import { Menu, MenuProps } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { SliderStyle } from './SliderStyle';

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trang chủ", "1", <PieChartOutlined />),

  getItem("Quản lý tài khoản", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Quản lý kho thẻ", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),

  getItem("Tiện ích", "sub4", <ContainerOutlined />, [
    getItem("Option 13", "13"),
    getItem("Option 14", "14"),

    getItem("Submenu", "sub5", null, [
      getItem("Option 15", "15"),
      getItem("Option 16", "16"),
    ]),
  ]),
];

export const Slider: React.FC = () => {
  return (
    <SliderStyle>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </SliderStyle>
  );
}
