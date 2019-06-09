import React from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
class SideMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rootSubmenuKeys: [],
      openKeys: []
    };
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  render = () => (
    <Sider
      width={250}
      collapsible      
    >
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ borderRight: 0 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="setting" />
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to={'/dashboard/theme'}>
              <Icon type="team" />
              <span>Theme</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        
      </Menu>
    </Sider>
  );
}

export default SideMenu
