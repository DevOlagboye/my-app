import React from 'react'
import {ContainerFluid, HeaderStyle} from "./HeaderStyle"
import {Menu} from "antd"

const AppHeader = () => {
    return (
        <ContainerFluid>
            <HeaderStyle>
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Nav 1</Menu.Item>
            <Menu.Item key="2">Nav 2</Menu.Item>
            <Menu.Item key="3">Nav 3</Menu.Item>
          </Menu>
            </HeaderStyle>
        </ContainerFluid>
    )
}

export default AppHeader
