import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import './Registration.css';
import { fetchArticleDetails, fetchPosts } from '../../action/responseData';


const propTypes = {
  dispatch: PropTypes.func,
}

const defaultProps = {
  dispatch: () => null,
}

const mapStateToProps = state => {
  console.log("store_DATA_Showing", state);
  return state;
};



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchArticleDetails,
      fetchPosts,
    }, dispatch)
  };
}


class Registration extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
    }
    
  componentDidMount() {
    const { actions, dispatch } = this.props;
    dispatch(fetchArticleDetails(dispatch));
    dispatch(fetchPosts());
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
                    <div className="tab-pane fade show active" id="profile" role="tabpanel"
                        aria-labelledby="profile-tab">
                        <h3 className="register-heading">Register</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name *" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email *" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="User ID *" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password *"
                                        value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Grade *" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Work Address *"
                                        value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Patient Treated *"
                                        value="" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="" align="center">
                                    <button type="submit" className="btnRegister">Register</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
);
}
}

Registration.propTypes = propTypes;
Registration.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
