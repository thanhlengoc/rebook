import React, {Component} from 'react';
import "../Home/_home.css";
import "../App/_app.css";
import {
  Card,
  CardImg, ListGroup, ListGroupItem,
} from "reactstrap";

class PageLeft extends Component{
  constructor(props) {
    super(props);
    this.state = {
      province: 0,
    }
  }

  render() {
    const styleListGroup= {
      marginBottom: '20px'
    };

    const styleItem = {
      backgroundColor: '#e9ebee',
      color: '#111c26',
      // border: 'none',
      // outline: 'none',
      fontSize: '15px',
      fontWeight: '500'
    };

    return (
        <div className="sticky-top sticky-offset">
          <ListGroup flush style={styleListGroup}>
            <ListGroupItem style={styleItem} tag="a" href="#">
              <img
                  src={'/icon/default.jpg'}
                  className="rounded-circle icon-profile"
                  alt="Username"/> Username
            </ListGroupItem>
            <ListGroupItem style={styleItem} tag="a" href="#">
              <img src="/icon/icons8-news.png"/> Bảng tin
              <img src="/icon/menu-5.svg" style={{float:'right'}}/>
            </ListGroupItem>
            <ListGroupItem style={styleItem} tag="a" href="#">
              <img src="/icon/icons8-message_group.png"/> Messenger
              <img src="/icon/menu-5.svg" style={{float:'right'}}/>
            </ListGroupItem>
            <ListGroupItem style={styleItem} tag="a" href="#">
              <img src="/icon/icons8-retro_tv.png"/> Watch
              <img src="/icon/menu-5.svg" style={{float:'right'}}/>
            </ListGroupItem>
            <ListGroupItem style={styleItem} tag="a" href="#">
              <img src="/icon/icons8-group.png"/> Nhóm
              <img src="/icon/menu-5.svg" style={{float:'right'}}/>
            </ListGroupItem>
            <ListGroupItem style={styleItem} tag="a" href="#">
              <img src="/icon/icons8-add_user_male.png"/> Tạo
              <img src="/icon/menu-5.svg" style={{float:'right'}}/>
            </ListGroupItem>
          </ListGroup>
          <Card>
            <CardImg top width="100%"
                     src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
                     alt="Card image cap"/>
          </Card>
        </div>
    )
  }
}

export default PageLeft;