import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.scss'

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
          <img src="https://images.wosaimg.com/a3/8a0e3825139641f7bf0e3cd1b469065b515b3f.jpg" className='img-icon' />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {/* <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item> */}
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>用户资料</span>
              </span>
            }
          >
            <Menu.Item key="3">完善资料</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="desktop" />
                <span>商品管理</span>
              </span>
            }
          >
            <Menu.Item key="6">我的商品</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}
export default connect(
  null,
  {}
)(Sidebar)
