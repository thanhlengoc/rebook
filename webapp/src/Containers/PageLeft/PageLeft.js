import React, {Component} from 'react';
import "../Home/_home.css";
import "../App/_app.css";
import {
  Card,
  CardImg,
} from "reactstrap";

class PageLeft extends Component{
  constructor(props) {
    super(props);
    this.state = {
      province: 0,
    }
  }

  render() {
    return (
        <div className="sticky-top sticky-offset">
          <Card>
            <CardImg top width="100%"
                     src="http://landplus.com.vn/wp-content/uploads/sites/114/2017/06/banner-sidebar.jpg"
                     alt="Card image cap"/>
          </Card>
        </div>
    )
  }
}

export default PageLeft;