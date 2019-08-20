import { Avatar, Dropdown, Icon, Layout, Menu, Modal } from 'antd'
import * as React from 'react'
import { connect } from 'react-redux'
import './style.scss'
const { Header } = Layout
const confirm = Modal.confirm

// 定义接口
interface IProps {
  collapsed?: any
}
// 初始化状态
const initialState = {
  collapsedStatus: true,
};
type State = Readonly<typeof initialState>;
const menu = (
  <Menu>
    <Menu.Item key="0">退出登录</Menu.Item>
  </Menu>
);
class HeaderWrapper extends React.PureComponent<IProps, State> {
  public readonly state: State = initialState
  constructor(props: IProps) {
    super(props)
  }
  public collapsedHandle = () => {
    this.setState({
      collapsedStatus: !this.state.collapsedStatus
    })   
    this.props.collapsed(this.state.collapsedStatus)
  }
  public render() {
    return (
      <Header className="header-top-wrapper"
        style={{
          background: "#fff",
          padding: 0,
          borderBottom: "1px solid #e6e6e6"
        }}>
        <div className="clearfix">
          <Icon
            className="trigger"
            type={"menu-fold"}
            onClick={this.collapsedHandle}
          />
          <Dropdown className="dropdown" overlay={menu} trigger={["click"]}>
            <span className="ant-dropdown-link" style={{ cursor: "pointer" }}>
              <Avatar
                size="small"
                style={{ marginRight: "10px", backgroundColor: "#40a9ff" }}
                icon="user"
              />
              蚂蚁兄弟
              <Icon style={{ marginLeft: "10px" }} type="down" />
            </span>
          </Dropdown>
        </div>
      </Header>
    )
  }
}
export default connect(null)(HeaderWrapper);