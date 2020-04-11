import React from 'react';
import { withRouter } from 'react-router';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
    loginSubmit = () => {
      const { history } = this.props;
      history.replace("/AyurvedicMedicine");
    }
    componentDidMount() {
    }
    render() {
      return (
  <section className="content-section padding-bottom">
      <div className="container register">
          <div className="row">
              <div className="col-md-3 register-left">
                  <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                  <h3>Welcome</h3>
                  <p>You are 30 seconds away from earning your own money!</p>
                  <input type="submit" name="" value="Login" /><br />
              </div>
              <div className="col-md-9 register-right">
                  <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <h3 className="register-heading">Login as a user</h3>
                          <div className="row register-form justify-content-center align-item-center">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <input type="email" className="form-control" placeholder="Your Email *"  />
                                  </div>
                                  <div className="form-group">
                                      <input type="password" className="form-control" placeholder="Password *" />
                                  </div>
                                  <div className="" align="center">
                                      <button type="submit" onClick={this.loginSubmit} className="btnRegister">Login</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </section>
)
};
}

export default Login;
