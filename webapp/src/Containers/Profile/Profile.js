import React, {Component} from 'react';
import './_profile.css';
import Card from "reactstrap/es/Card";
import {
  Button,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Input, CardHeader
} from "reactstrap";
import ButtonGroup from "reactstrap/es/ButtonGroup";
import '../Home/_home.css';
import {SocialIcon} from "react-social-icons";

class Profile extends Component {
  constructor(props) {
    super(props);

  }

  createListCardItemUser = () => {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      console.log("current User profile: " + JSON.stringify(currentUser));

      const listNews = currentUser.roles.users;
      console.log("list News Item: " + JSON.stringify(listNews));

      if (listNews) {
        return listNews.map((item, index) => (
            <Card className="card" key={index}>
              <Card className="card">
                <CardTitle>
                  <div className="row"
                       style={{
                         display: 'flex',
                         alignItems: 'center',
                         marginTop: '15px'
                       }}>
                    <div className="col-md-9">
                      <a className="btn-circle btn-lg">
                        <img
                            src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                            className="rounded-circle img-profile"
                            alt="Username"/>
                      </a>{' '}
                      <a href="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190"
                         className="username"
                      >
                        <strong>Lê Ngọc Thành</strong>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <div className="dropdown float-right">
                        <button className="btn border-none-outline"
                                type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                          <i className="fas fa-ellipsis-h"></i>
                        </button>
                        <div className="dropdown-menu"
                             aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item">
                            <i className="far fa-eye-slash"></i> Ẩn bài viết
                          </a>
                          <a className="dropdown-item">
                            <i className="far fa-save"></i> Lưu bài viết
                          </a>
                          <a className="dropdown-item">
                            <i className="far fa-flag"></i> Gửi phản hồi
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardTitle>

                <div className="row"
                     style={{
                       display: 'flex',
                       alignItems: 'center',
                       marginLeft: '15px',
                       marginRight: '15px'
                     }}>
                  <p>
                    Chính chủ cần bán đất trong khu dân cư Tân Đô -
                    Diện tích 5x26m = 1.4 tỷ 6x19m = 1.35 tỷ 10x17.5m = 1.75
                    tỷ - Cơ sở hạ tầng hoàn thiện đầy đủ - Điện âm, nước sạch,
                    internet cáp quang - Đường trải nhựa, vỉa hè trồng cây
                    xanh - Sổ hồng riêng, xây dựng tự do - Liên hệ 0931 333
                    522 - Danh...
                  </p>
                </div>

                <CardImg top width='100%' style={{marginBottom: '10px'}}
                         src="https://dautucophieu.net/wp-content/uploads/2018/06/B%C4%90S.jpg"
                         alt="Card image cap"/>

                <hr style={{margin: '5px 20px'}}/>

                <div>
                  <ButtonGroup style={{width: '100%', padding: '0 20px'}}>
                    <Button
                        className="border-none-outline btn-like-share-comment"
                        onClick={() => this.handleLikePost()}>
                      <i className="far fa-thumbs-up"></i> Thích
                    </Button>
                    <Button
                        className="border-none-outline btn-like-share-comment"
                        onClick={() => this.handleCommentPost()}>
                      <i className="far fa-comment"></i> Bình luận
                    </Button>
                    <Button
                        className="border-none-outline btn-like-share-comment"
                        onClick={() => this.handleSharePost()}>
                      <i className="fas fa-share"></i> Chia sẻ
                    </Button>
                  </ButtonGroup>
                </div>

                <hr/>

                <div className="input-comment">
                  <a className="btn-user">
                    <img
                        src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                        className="rounded-circle icon-user"
                        alt="Username"/>
                  </a>{' '}
                  <Input style={{
                    borderRadius: '36px',
                    height: '40px',
                    backgroundColor: '#f2f3f5'
                  }}
                         type="text" id="comment"
                         placeholder="Viết phản hồi..."
                         onChange={(e) => this.setState(
                             {comment: e.target.value})}/>
                </div>
              </Card>
            </Card>
        ))
      }

    }
  };

  render() {
    const background = {
      height: '350px',
    };

    return (
      <div className="profile-container">
        <div className="container-fluid" style={{paddingLeft:"40px"}}>
          <div className="row">
            <div className="col col-md-2">
              <div className="sticky-top profile-info">
                <div className="profile-avatar">
                  {
                    this.props.currentUser ? (
                        <img src={this.props.currentUser.imageUrl}
                             alt={this.props.currentUser.name}/>
                    ) : (
                        <div className="text-avatar">
                      <span>{this.props.currentUser.name
                      && this.props.currentUser.name[0]}</span>
                        </div>
                    )
                  }
                </div>
                <div className="profile-name">
                  <h2>{this.props.currentUser.name}</h2>
                  <p className="profile-email">{this.props.currentUser.email}</p>
                </div>
              </div>
            </div>
            <div className="col col-md-8">
              <div className="row">
                <div className="col">
                  <Card style={{border:'none'}}>
                    <img src="/icon/background-profile.jpg" style={background}/>
                  </Card>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-7">
                  {this.createListCardItemUser()}
                  <Card className="card">
                    <Card className="card">
                      <CardTitle>
                        <div className="row"
                             style={{
                               display: 'flex',
                               alignItems: 'center',
                               marginTop: '15px'
                             }}>
                          <div className="col-md-9">
                            <a className="btn-circle btn-lg">
                              <img
                                  src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                                  className="rounded-circle img-profile"
                                  alt="Username"/>
                            </a>{' '}
                            <a href="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190"
                               className="username"
                            >
                              <strong>Lê Ngọc Thành</strong>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <div className="dropdown float-right">
                              <button className="btn border-none-outline"
                                      type="button" id="dropdownMenuButton"
                                      data-toggle="dropdown" aria-haspopup="true"
                                      aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                              </button>
                              <div className="dropdown-menu"
                                   aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">
                                  <i className="far fa-eye-slash"></i> Ẩn bài viết
                                </a>
                                <a className="dropdown-item">
                                  <i className="far fa-save"></i> Lưu bài viết
                                </a>
                                <a className="dropdown-item">
                                  <i className="far fa-flag"></i> Gửi phản hồi
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardTitle>

                      <div className="row"
                           style={{
                             display: 'flex',
                             alignItems: 'center',
                             marginLeft: '15px',
                             marginRight: '15px'
                           }}>
                        <p>
                          Chính chủ cần bán đất trong khu dân cư Tân Đô -
                          Diện tích 5x26m = 1.4 tỷ 6x19m = 1.35 tỷ 10x17.5m = 1.75
                          tỷ - Cơ sở hạ tầng hoàn thiện đầy đủ - Điện âm, nước sạch,
                          internet cáp quang - Đường trải nhựa, vỉa hè trồng cây
                          xanh - Sổ hồng riêng, xây dựng tự do - Liên hệ 0931 333
                          522 - Danh...
                        </p>
                      </div>

                      <CardImg top width='100%' style={{marginBottom: '10px'}}
                               src="https://dautucophieu.net/wp-content/uploads/2018/06/B%C4%90S.jpg"
                               alt="Card image cap"/>

                      <hr style={{margin: '5px 20px'}}/>

                      <div>
                        <ButtonGroup style={{width: '100%', padding: '0 20px'}}>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleLikePost()}>
                            <i className="far fa-thumbs-up"></i> Thích
                          </Button>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleCommentPost()}>
                            <i className="far fa-comment"></i> Bình luận
                          </Button>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleSharePost()}>
                            <i className="fas fa-share"></i> Chia sẻ
                          </Button>
                        </ButtonGroup>
                      </div>

                      <hr/>

                      <div className="input-comment">
                        <a className="btn-user">
                          <img
                              src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                              className="rounded-circle icon-user"
                              alt="Username"/>
                        </a>{' '}
                        <Input style={{
                          borderRadius: '36px',
                          height: '40px',
                          backgroundColor: '#f2f3f5'
                        }}
                               type="text" id="comment"
                               placeholder="Viết phản hồi..."
                               onChange={(e) => this.setState(
                                   {comment: e.target.value})}/>
                      </div>
                    </Card>
                  </Card>
                  <Card className="card">
                    <Card className="card">
                      <CardTitle>
                        <div className="row"
                             style={{
                               display: 'flex',
                               alignItems: 'center',
                               marginTop: '15px'
                             }}>
                          <div className="col-md-9">
                            <a className="btn-circle btn-lg">
                              <img
                                  src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                                  className="rounded-circle img-profile"
                                  alt="Username"/>
                            </a>{' '}
                            <a href="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190"
                               className="username"
                            >
                              <strong>Lê Ngọc Thành</strong>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <div className="dropdown float-right">
                              <button className="btn border-none-outline"
                                      type="button" id="dropdownMenuButton"
                                      data-toggle="dropdown" aria-haspopup="true"
                                      aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                              </button>
                              <div className="dropdown-menu"
                                   aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">
                                  <i className="far fa-eye-slash"></i> Ẩn bài viết
                                </a>
                                <a className="dropdown-item">
                                  <i className="far fa-save"></i> Lưu bài viết
                                </a>
                                <a className="dropdown-item">
                                  <i className="far fa-flag"></i> Gửi phản hồi
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardTitle>

                      <div className="row"
                           style={{
                             display: 'flex',
                             alignItems: 'center',
                             marginLeft: '15px',
                             marginRight: '15px'
                           }}>
                        <p>
                          Chính chủ cần bán đất trong khu dân cư Tân Đô -
                          Diện tích 5x26m = 1.4 tỷ 6x19m = 1.35 tỷ 10x17.5m = 1.75
                          tỷ - Cơ sở hạ tầng hoàn thiện đầy đủ - Điện âm, nước sạch,
                          internet cáp quang - Đường trải nhựa, vỉa hè trồng cây
                          xanh - Sổ hồng riêng, xây dựng tự do - Liên hệ 0931 333
                          522 - Danh...
                        </p>
                      </div>

                      <CardImg top width='100%' style={{marginBottom: '10px'}}
                               src="https://dautucophieu.net/wp-content/uploads/2018/06/B%C4%90S.jpg"
                               alt="Card image cap"/>

                      <hr style={{margin: '5px 20px'}}/>

                      <div>
                        <ButtonGroup style={{width: '100%', padding: '0 20px'}}>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleLikePost()}>
                            <i className="far fa-thumbs-up"></i> Thích
                          </Button>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleCommentPost()}>
                            <i className="far fa-comment"></i> Bình luận
                          </Button>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleSharePost()}>
                            <i className="fas fa-share"></i> Chia sẻ
                          </Button>
                        </ButtonGroup>
                      </div>

                      <hr/>

                      <div className="input-comment">
                        <a className="btn-user">
                          <img
                              src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                              className="rounded-circle icon-user"
                              alt="Username"/>
                        </a>{' '}
                        <Input style={{
                          borderRadius: '36px',
                          height: '40px',
                          backgroundColor: '#f2f3f5'
                        }}
                               type="text" id="comment"
                               placeholder="Viết phản hồi..."
                               onChange={(e) => this.setState(
                                   {comment: e.target.value})}/>
                      </div>
                    </Card>
                  </Card>
                  <Card className="card">
                    <Card className="card">
                      <CardTitle>
                        <div className="row"
                             style={{
                               display: 'flex',
                               alignItems: 'center',
                               marginTop: '15px'
                             }}>
                          <div className="col-md-9">
                            <a className="btn-circle btn-lg">
                              <img
                                  src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                                  className="rounded-circle img-profile"
                                  alt="Username"/>
                            </a>{' '}
                            <a href="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190"
                               className="username"
                            >
                              <strong>Lê Ngọc Thành</strong>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <div className="dropdown float-right">
                              <button className="btn border-none-outline"
                                      type="button" id="dropdownMenuButton"
                                      data-toggle="dropdown" aria-haspopup="true"
                                      aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                              </button>
                              <div className="dropdown-menu"
                                   aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">
                                  <i className="far fa-eye-slash"></i> Ẩn bài viết
                                </a>
                                <a className="dropdown-item">
                                  <i className="far fa-save"></i> Lưu bài viết
                                </a>
                                <a className="dropdown-item">
                                  <i className="far fa-flag"></i> Gửi phản hồi
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardTitle>

                      <div className="row"
                           style={{
                             display: 'flex',
                             alignItems: 'center',
                             marginLeft: '15px',
                             marginRight: '15px'
                           }}>
                        <p>
                          Chính chủ cần bán đất trong khu dân cư Tân Đô -
                          Diện tích 5x26m = 1.4 tỷ 6x19m = 1.35 tỷ 10x17.5m = 1.75
                          tỷ - Cơ sở hạ tầng hoàn thiện đầy đủ - Điện âm, nước sạch,
                          internet cáp quang - Đường trải nhựa, vỉa hè trồng cây
                          xanh - Sổ hồng riêng, xây dựng tự do - Liên hệ 0931 333
                          522 - Danh...
                        </p>
                      </div>

                      <CardImg top width='100%' style={{marginBottom: '10px'}}
                               src="https://dautucophieu.net/wp-content/uploads/2018/06/B%C4%90S.jpg"
                               alt="Card image cap"/>

                      <hr style={{margin: '5px 20px'}}/>

                      <div>
                        <ButtonGroup style={{width: '100%', padding: '0 20px'}}>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleLikePost()}>
                            <i className="far fa-thumbs-up"></i> Thích
                          </Button>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleCommentPost()}>
                            <i className="far fa-comment"></i> Bình luận
                          </Button>
                          <Button
                              className="border-none-outline btn-like-share-comment"
                              onClick={() => this.handleSharePost()}>
                            <i className="fas fa-share"></i> Chia sẻ
                          </Button>
                        </ButtonGroup>
                      </div>

                      <hr/>

                      <div className="input-comment">
                        <a className="btn-user">
                          <img
                              src={'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/57226516_130649268042776_946875555297361920_o.jpg?_nc_cat=110&_nc_oc=AQk9xTh7VU9OMW9GO0y3_Lw7sd1627-824YLpvz-MdAS5b4YRRVy-Oz-0IcIqRqNRqrLelyIgDDGvG4uYXQg3ghr&_nc_ht=scontent.fvca1-2.fna&oh=5a0d2ee5d36e31956be164b5c2d796cc&oe=5D9EE190'}
                              className="rounded-circle icon-user"
                              alt="Username"/>
                        </a>{' '}
                        <Input style={{
                          borderRadius: '36px',
                          height: '40px',
                          backgroundColor: '#f2f3f5'
                        }}
                               type="text" id="comment"
                               placeholder="Viết phản hồi..."
                               onChange={(e) => this.setState(
                                   {comment: e.target.value})}/>
                      </div>
                    </Card>
                  </Card>
                </div>
                <div className="col col-md-5">
                  <Card className="sticky-top" style={{zIndex:'1',top:'60px'}}>
                    <CardBody>
                      <strong style={{color:'#4b4f56'}}>Bất động sản được gợi ý</strong>
                    </CardBody>
                    <CardImg top width="100%"
                             src="https://www.ngoisaoso.vn/uploads/news/2014/02/19/thiet-ke-web-bat-dong-san-2.jpg"
                             alt="Card image cap"/>
                    <CardBody>
                      <CardText>With supporting text below as a natural lead-in to
                        additional content.</CardText>
                      <Button className="btn-detail">Chi tiết</Button>
                    </CardBody>
                  </Card>
                  <Card style={{display:'flex',flexDirection:'row',padding:'10px'}}>
                    <CardText style={{marginRight:'20px'}}>Tiếng Việt.</CardText>
                    <CardText style={{marginRight:'20px'}}>English.</CardText>
                  </Card>
                  <div style={{display: 'flex'}}>
                    <a href="https://mdbootstrap.com/education/bootstrap/" style={{color: '#616770', marginRight: '10px'}}>Điều khoản.</a>
                    <a href="https://mdbootstrap.com/education/bootstrap/" style={{color: '#616770'}}>Quảng cáo.</a>
                  </div>
                  <span style={{color: '#616770'}}>© 2019 Copyright: Rebook.com.vn</span>
                </div>
              </div>
            </div>
            <div className="col col-md-2">
              <div className="sticky-top" style={{top:"300px",zIndex:'100',width:'50px',float:'right'}}>
                <SocialIcon url="http://linkedin.com/in/jaketrent" />
                <SocialIcon network="twitter" bgColor="#ff5a01" />
                <SocialIcon network="facebook"/>
                <SocialIcon network="google"/>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile