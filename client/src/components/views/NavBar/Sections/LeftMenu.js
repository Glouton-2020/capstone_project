import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/About">About</a>
    </Menu.Item>
    <SubMenu title={<span>Services For</span>}>
        <Menu.Item key="setting:1"><a href="/Interiors"> Architects and Interior Designers </a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/Art"> Art Galleries, Advisors, and Collectors</a></Menu.Item>
        <Menu.Item key="setting:3"><a href="/Luxury">Auction Houses, Luxury Brands, and 3PL</a></Menu.Item>
    </SubMenu>
    <SubMenu title={<span><a href="/Schedule">Schedule</a></span>}>
      <MenuItemGroup title="Domestic Schedule">
      </MenuItemGroup>
      <MenuItemGroup title="Sea Freight Schedule">
      </MenuItemGroup>
    </SubMenu>
    <SubMenu title={<span>Locations</span>}>
        <Menu.Item key="setting:9">Atlanta</Menu.Item>
        <Menu.Item key="setting:10">Chicago</Menu.Item>
        <Menu.Item key="setting:11">Dallas</Menu.Item>
        <Menu.Item key="setting:12">London</Menu.Item>
        <Menu.Item key="setting:13">Los Angeles</Menu.Item>
        <Menu.Item key="setting:14">Miami</Menu.Item>
        <Menu.Item key="setting:15">New York</Menu.Item>
        <Menu.Item key="setting:16">Paris</Menu.Item>
        <Menu.Item key="setting:17">Phoenix</Menu.Item>
        <Menu.Item key="setting:18">Washington, D.C.</Menu.Item>
    </SubMenu>
    <SubMenu title={<span><a href="/Request">Request a Quote</a></span>}></SubMenu>
    <SubMenu title={<span><a href="/clientpage">Client Page</a></span>}></SubMenu>
    <SubMenu title={<span><a href="https://www.bminglouton.com/">Portfolio</a></span>}></SubMenu>
  </Menu>
  )
}

export default LeftMenu