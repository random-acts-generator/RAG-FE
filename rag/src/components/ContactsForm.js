import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Bin from "../assets/rag_pic_bin.png";
import Pencil from "../assets/rag_pic_pencil.png";
import Save from "../assets/rag_pic_save.png";
import "../styles/contact.css";
import { addContacts, getContacts, URL, deleteContacts } from "../actions";
import axios from "axios";

import { connect } from "react-redux";

class ContactsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newContact: {
        contactFirst: "",
        contactLast: "",
        contactPhone: "",
        relation: "map",
        user_id: this.props.user.id
      },
      isLoading: "initial",
      isDeleting: "initial"
    };
  }

  componentDidMount() {
    console.log(":: IN COMPONENT DID MOUNT ::");
    const token = localStorage.getItem("token");
    //this.props.getContacts(this.props.user.id);
    this.props.getContacts(this.props.user.id, token).then(() => {
      this.setState({ ...this.state, formContacts: this.props.contacts });
    });

    // this.setState({ ...this.state, formContacts: this.props.contacts });

    // axios
    //   .get(`${URL}/api/users/${this.props.user.id}/contacts`, {
    //     headers: { Authorization: token }
    //   })
    //   .then(res => {
    //     console.log(
    //       ":: RESPONSE IN COMPONENT DID MOUNT IS ::" + JSON.stringify(res.data)
    //     );
    //     this.setState({
    //       ...this.state,
    //       contacts: res.data.account,
    //       isLoading: false
    //     });
    //   })
    //   .catch(err => {
    //     alert("Something is wrong, please try again.");
    //   });
  }

  componentDidUpdate(prevProps) {
    console.log("prev", prevProps);
    if (this.props.contacts !== prevProps.formContacts) {
      if (!this.props.isAddingContacts && !this.props.isGettingContacts) {
        this.setState({ ...this.state, formContacts: this.props.contacts });
      }
    }
  }

  handleChanges = e => {
    e.persist();
    this.setState({
      newContact: {
        ...this.state.newContact,
        [e.target.name]: e.target.value,
        user_id: this.props.user.id
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(":: ADD CONTACT FORM USER ID IS ::" + this.props.user.id);
    console.log(
      ":: ON SUBMIT CLICKED IN CONTACT FORM ::",
      JSON.stringify(this.state.newContact)
    );
    this.props.addContacts(this.state.newContact, token);

    this.setState({
      newContact: {
        contactFirst: "",
        contactLast: "",
        contactPhone: "",
        relation: "map",
        user_id: this.props.user.id
      }
    });
  };

  handleEditButton = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isEditable: true
    });
  };

  handleDeleteButton = id => {
    const token = localStorage.getItem("token");
    console.log(":: CALLING DELETE BUTTON IN CONTACT FORM ::" + id);
    this.props
      .deleteContacts(id, token)
      .then(() => this.props.getContacts(this.props.user.id, token));
  };

  render() {
    console.log(
      ":: RENDER OF CONTACTS FORM - STATE CONTACT LIST IS ::" +
        JSON.stringify(this.state.formContacts)
    );

    console.log(
      ":: RENDER OF CONTACTS FORM - PROP CONTACT LIST IS ::" +
        JSON.stringify(this.props.contacts)
    );
    let isRender;
    if (
      this.state.formContacts === undefined ||
      this.state.formContacts === null ||
      (Object.entries(this.state.formContacts).length === 0 &&
        this.state.formContacts.constructor === Object)
    ) {
      isRender = false;
      console.log(":: THE VALUE OF IS RENDER IS ::" + isRender);
      return <div>Loading .... </div>;
    } else {
      isRender = true;
      console.log(":: THE VALUE OF IS RENDER IS ::" + isRender);
    }

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
                    name="contactFirst"
                    placeholder="First Name"
                    value={this.state.newContact.contactFirst}
                    onChange={this.handleChanges}
                  />
                </div>
                <div className="form-text-contact">Last Name</div>
                <div className="form-element-contact">
                  <input
                    className="form-input-contact"
                    type="text"
                    name="contactLast"
                    placeholder="Last Name"
                    value={this.state.newContact.contactLast}
                    onChange={this.handleChanges}
                  />
                </div>
                <div className="form-text-contact">Phone Number</div>
                <div className="form-element-contact">
                  <input
                    className="form-input-contact"
                    type="text"
                    name="contactPhone"
                    placeholder="Phone Number"
                    value={this.state.newContact.contactPhone}
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

            {isRender &&
              this.state.formContacts.map(contact => (
                <div key={contact.id} className="right-section-contact-content">
                  <div className="contact-heading1a-content">
                    {contact.contactFirst}
                  </div>
                  <div className="contact-heading1b-content">
                    {" "}
                    {contact.contactLast}
                  </div>
                  <div className="contact-heading2-content">
                    {contact.contactPhone}
                  </div>
                  <div className="contact-heading3-content">
                    <img
                      className="contact-form-img"
                      src={Pencil}
                      onClick={() => this.handleEditButton(contact.id)}
                    />
                    <img
                      className="contact-form-img"
                      src={Bin}
                      onClick={() => this.handleDeleteButton(contact.id)}
                    />
                  </div>
                </div>
              ))}
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
  console.log(
    ":: CONTACTS FORM CONTACTS OBJECT IS ::" + JSON.stringify(state.contacts)
  );
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    loggingIn: state.loggingIn,
    error: state.error,
    contacts: state.contacts,
    isGettingContacts: state.isGettingContacts,
    isUpdatingContacts: state.isUpdatingContacts,
    isDeletingContacts: state.isDeletingContacts,
    isAddingContacts: state.isAddingContacts
  };
};

export default connect(
  mapStateToProps,
  { addContacts, getContacts, deleteContacts }
)(ContactsForm);

// {this.state.isEditable && (
//   <div className="right-section-contact-content">
//     <div className="contact-heading1a-content">
//       {" "}
//       <input type="text" value="Melissa" />{" "}
//     </div>
//     <div className="contact-heading1b-content">
//       {" "}
//       <input type="text" value="Murphy" />
//     </div>
//     <div className="contact-heading2-content">
//       <input type="text" value="123-234-4567" />
//     </div>
//     <div className="contact-heading3-content">
//       <img
//         className="contact-form-img"
//         src={Save}
//         onClick={this.handleEditButton}
//       />
//     </div>
//   </div>
// )}
