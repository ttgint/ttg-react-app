import React from 'react';
import { Layout, Icon, Button, Badge, Tooltip } from 'antd';
import { NotificationHeader } from './Style';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { formatDate } from 'Modules';
// import io from "socket.io-client";
import { notification } from 'antd';
import { baseUrl } from './env';
// import axios from 'axios';
import {
  TabHeaderUser,
  TabHeaderUserIcon,
  TabHeaderUserName,
  HeaderMenuBtn,
  LogoutBtn,
  TabHeaderUserRole
} from './Style';
const { Header } = Layout;
class AppHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.socket = io.connect(
    //   `${baseUrl}/notification_stream`,
    //   {
    //     query: { token: this.props.user.token }
    //   }
    // );
    this.state = {
      newNotificaitonsLength: 0,
      notifications: []
    };
  }
  openNotification = ({ message, description, link }) => {
    const key = `open${Date.now()}`;
    const btn = (
      <a rel="noopener noreferrer" href={link}>
        <Button
          type="primary"
          size="small"
          onClick={() => notification.close(key)}
        >
          Visit Page
        </Button>
      </a>
    );
    notification.open({
      message: message,
      description: description,
      btn,
      key
    });
  };
  async componentDidMount() {
    // let response = await axios.get(`${baseUrl}/api/notification`);
    // this.setState({
    //   notifications: response.data.notifications,
    //   newNotificaitonsLength: parseInt(response.data.newNotificaitonsLength, 10)
    // });
    // this.socket.on("update", response => {
    //   if (response.notifications[0].is_seen === 0) {
    //     this.openNotification({
    //       message: response.notifications[0].title,
    //       description: response.notifications[0].description,
    //       link: response.notifications[0].route
    //     });
    //   }
    //   this.setState({
    //     notifications: response.notifications,
    //     newNotificaitonsLength: parseInt(response.newNotificaitonsLength, 10)
    //   });
    // });
  }
//   content = items => (
//     <div className="notification_holder">
//       {items.map((item, key) =>
//         item.route ? (
//           <a
//             rel="noopener noreferrer"
//             key={key}
//             className="notification_item"
//             // target="_blank"
//             href={item.route}
//           >
//             <div className="media">
//               <Icon style={{ color: 'green' }} type="check-circle" />
//             </div>
//             <div className="content">
//               <p className="title">{item.title}</p>
//               <p className="description">{item.description}</p>
//               <span className="date">{formatDate(item.created_at)}</span>
//             </div>
//           </a>
//         ) : (
//           <div key={key} className="notification_item">
//             <div className="media">
//               <Icon style={{ color: 'green' }} type="check-circle" />
//             </div>
//             <div className="content">
//               <p className="title">{item.title}</p>
//               <p className="description">{item.description}</p>
//               <span className="date">{formatDate(item.created_at)}</span>
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
  render = () => (
    <Header className="header">
      {this.props.user ? (
        <Link to={'/dashboard/profile'}>
          <TabHeaderUser>
            {this.props.user.profile_media_id ? (
              <img
                className="header_profile_media_photo"
                alt="profile"
                src={`${baseUrl}/api/media/storage/${
                  this.props.user.profile_media_id
                }`}
              />
            ) : (
              <TabHeaderUserIcon type="user" />
            )}

            <TabHeaderUserName>
              {this.props.user.name} {this.props.user.surname}
            </TabHeaderUserName>
            <TabHeaderUserRole>{this.props.user.email}</TabHeaderUserRole>
          </TabHeaderUser>
        </Link>
      ) : null}

      <Tooltip placement="bottom" title="Admin Settings">
        <HeaderMenuBtn right={130}>
          <Link to={'/dashboard/admin'}>
            <Icon type="setting" />
          </Link>
        </HeaderMenuBtn>
      </Tooltip>

      <Tooltip placement="bottom" title="Notificaiton">
        <NotificationHeader>
          <Badge
            onClick={async () => {
            //   this.props.config({
            //     show_notification: true
            //   });
              if (this.state.newNotificaitonsLength > 0) {
                // await axios.post(`${baseUrl}/api/brain/notification/seen`);
              }
            }}
            style={{ marginTop: -1 }}
            count={
              this.state.newNotificaitonsLength < 9
                ? this.state.newNotificaitonsLength
                : '+ 9'
            }
          >
            <Icon type="notification" />
          </Badge>
          {/* {this.props.config_data.show_notification ? (
            <div className="notifications_wraper">
              <div className="notifications_header">
                Notifications
                <Icon
                  onClick={() => {
                    this.props.config({
                      show_notification: false
                    });
                  }}
                  type="close-circle"
                />
              </div> */}
              {/* {this.content(this.state.notifications)} */}
            {/* </div>
          ) : null} */}
        </NotificationHeader>
      </Tooltip>
      <Tooltip placement="bottom" title="Logout">
        <LogoutBtn onClick={this.props.logout}>
          <Icon type="poweroff" />
        </LogoutBtn>
      </Tooltip>
    </Header>
  );
}
export default AppHeader
