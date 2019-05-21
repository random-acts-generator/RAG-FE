import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import LeftImage from "../assets/rag_pic_grandmom.jpeg";
import { connect } from "react-redux";

class ProfileForm extends React.Component {
  state = {
    credentials: {
      first: "",
      last: "",
      phone: "",
      email: "",
      password: ""
    }
  };
  componentDidMount() {
    this.setState({
      credentials: this.props.user
    });
  }
  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    console.log(":: ON SUBMIT CLICKED IN PROFILE FORM ::");
  };
  render() {
    return (
      <div>
        <Nav isLoggedIn={this.props.isLoggedIn} />
        <div className="body-container">
          <section className="left-section">
            <img className="left-image" src={LeftImage} alt="Fireworks" />
          </section>
          <section className="right-section">
            <div className="right-section-container-register">
              <form onSubmit={this.onSubmit}>
                <div className="form-text-register">First Name</div>
                <div className="form-element">
                  <input
                    className="form-input-register"
                    type="text"
                    name="first"
                    placeholder="First Name"
                    value={this.state.credentials.first}
                    onChange={this.handleChanges}
                  />
                </div>
                <div className="form-text-register">Last Name</div>
                <div className="form-element">
                  <input
                    className="form-input-register"
                    type="text"
                    name="last"
                    placeholder="Last Name"
                    value={this.state.credentials.last}
                    onChange={this.handleChanges}
                  />
                </div>
                <div className="form-text-register">Email</div>
                <div className="form-element">
                  {this.state.credentials.email}
                </div>
                <div className="form-text-register">Phone Number</div>
                <div className="form-element">
                  <input
                    className="form-input-register"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={this.state.credentials.phone}
                    onChange={this.handleChanges}
                  />
                </div>
                <div className="form-text-register">Password</div>
                <div className="form-element">
                  <input
                    className="form-input-register"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                  />
                  <button className="login-btn" onClick={this.onSubmit}>
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div className="login-filler" />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(":: PROFILE FORM USER OBJECT IS ::" + JSON.stringify(state.user));
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(mapStateToProps)(ProfileForm);
