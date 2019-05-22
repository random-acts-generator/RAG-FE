import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/contact.css";

import { connect } from "react-redux";

class ContactsForm extends React.Component {
  state = {
    newContact: {
      id: "",
      name: ""
    }
  };
  handleChanges = e => {
    this.setState({
      contacts: {
        ...this.state.contacts,
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
            <div className="left-section-container-contact ">
              <form onSubmit={this.onSubmit}>
                <div className="form-text-contact">Contact Name</div>
                <div className="form-element-contact">
                  <input
                    className="form-input-contact"
                    type="text"
                    name="first"
                    placeholder="First Name"
                    value={this.state.newContact.name}
                    onChange={this.handleChanges}
                  />
                </div>

                <button className="contact-btn" onClick={this.onSubmit}>
                  Add Contact
                </button>
              </form>
            </div>
          </section>
          <section className="right-section" />
        </div>
        <div className="login-filler" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    ":: CONTACTS FORM USER OBJECT IS ::" + JSON.stringify(state.user)
  );
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    loggingIn: state.loggingIn,
    error: state.error,
    contacts: state.contacts
  };
};

export default connect(mapStateToProps)(ContactsForm);
