import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Bin from "../assets/rag_pic_bin.png";
import Pencil from "../assets/rag_pic_pencil.png";
import Save from "../assets/rag_pic_save.png";
import "../styles/contact.css";

import { connect } from "react-redux";

class ContactsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {
        first: "",
        last: "",
        phone: ""
      },
      isEditable: false
    };
  }
  handleChanges = e => {
    e.persist();
    this.setState({
      newContact: {
        ...this.state.newContact,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(":: ON SUBMIT CLICKED IN CONTACT FORM ::");
  };

  handleEditButton = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isEditable: true
    });
  };
  render() {
    return (
      <div>
        <Nav isLoggedIn={this.props.isLoggedIn} />
        <div className="body-container">
          <section className="left-section">
            <div className="left-section-container-contact ">
              <form onSubmit={this.onSubmit}>
                <div className="form-text-contact">First Name</div>
                <div className="form-element-contact">
                  <input
                    className="form-input-contact"
                    type="text"
                    name="first"
                    placeholder="First Name"
                    value={this.state.newContact.first}
                    onChange={this.handleChanges}
                  />
                </div>
                <div className="form-text-contact">Last Name</div>
                <div className="form-element-contact">
                  <input
                    className="form-input-contact"
                    type="text"
                    name="last"
                    placeholder="Last Name"
                    value={this.state.newContact.last}
                    onChange={this.handleChanges}
                  />
                </div>
                <div className="form-text-contact">Phone Number</div>
                <div className="form-element-contact">
                  <input
                    className="form-input-contact"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={this.state.newContact.phone}
                    onChange={this.handleChanges}
                  />
                </div>

                <button className="contact-btn" onClick={this.onSubmit}>
                  Add Contact
                </button>
              </form>
            </div>
          </section>
          <section className="right-section-contact">
            <div className="right-section-contact-heading">
              <div className="contact-heading1a">First Name</div>
              <div className="contact-heading1b">Last Name</div>
              <div className="contact-heading2">Phone Number</div>
              <div className="contact-heading3" />
            </div>
            {this.state.isEditable && (
              <div className="right-section-contact-content">
                <div className="contact-heading1a-content">
                  {" "}
                  <input type="text" value="Melissa" />{" "}
                </div>
                <div className="contact-heading1b-content">
                  {" "}
                  <input type="text" value="Murphy" />
                </div>
                <div className="contact-heading2-content">
                  <input type="text" value="123-234-4567" />
                </div>
                <div className="contact-heading3-content">
                  <img
                    className="contact-form-img"
                    src={Save}
                    onClick={this.handleEditButton}
                  />
                </div>
              </div>
            )}
            {!this.state.isEditable && (
              <div className="right-section-contact-content">
                <div className="contact-heading1a-content"> Melissa </div>
                <div className="contact-heading1b-content"> Murphy</div>
                <div className="contact-heading2-content">123-234-4567</div>
                <div className="contact-heading3-content">
                  <img
                    className="contact-form-img"
                    src={Pencil}
                    onClick={this.handleEditButton}
                  />
                  <img className="contact-form-img" src={Bin} />
                </div>
              </div>
            )}
          </section>
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
    contacts: state.contacts,
    isEditable: false
  };
};

export default connect(mapStateToProps)(ContactsForm);
