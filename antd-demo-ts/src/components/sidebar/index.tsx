import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.scss'
import satellite from "../../assets/404.svg";

const { Sider } = Layout
const { SubMenu } = Menu

const initialState = {  
  openKeys: "", // 展开的菜单
  selectedKey: "" // 选择的菜单
};

type State = Readonly<typeof initialState>;
interface IProps {
  onCollapsed: boolean
}

class Sidebar extends React.PureComponent<IProps, State> {
  public readonly state: State = initialState
  public rootSubmenuKeys: string[] = [];
  constructor(props: IProps) {
    super(props)
    this.rootSubmenuKeys = []
  }
  public render() {
    return (
      <Sider collapsed={this.props.onCollapsed} style={{ minHeight: '100vh' }}>
          <div className="logo">
            <img src={satellite} className='img-icon'/>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
    )
  }
}
export default connect(
  null,
  {}  
)(Sidebar)
