import React , {useState} from 'react'
import '../App.css'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined , BankOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;
const Heading = () => {
  // state = {
  //   current: 'mail',
  // };
  const [current, setCurrent] = useState('mail')

  const handleClick = e =>{
    setCurrent(e.key)
  }

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({ current: e.key });
  // };
    return (
        <div className="container">
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="mail" icon={<BankOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          About
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
        </div>
        
    )
}

export default Heading
