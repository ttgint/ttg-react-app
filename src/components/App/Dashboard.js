import React from 'react';
import { LayoutWrapper } from './Style';
import { Route, Redirect, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import SideMenu from './SideMenu';

import Theme from './Theme';

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => (
      [
        <AppHeader />,
        <LayoutWrapper
          onClick={() => {
            if (this.props.config_data) {
              this.props.config({
                show_notification: false
              });
            }
          }}
        >
          <LayoutWrapper>
            <SideMenu />
            <LayoutWrapper style={{ padding: '0 24px 24px' }}>
              <Switch>
                <Route exact path={'/dashboard/theme'} component={Theme} />
              </Switch>
            </LayoutWrapper>
          </LayoutWrapper>
        </LayoutWrapper>
      ]
    );
}
export default Dashboard;
