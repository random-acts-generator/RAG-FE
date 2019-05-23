import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import LeftImage from "../assets/rag_pic_firework.jpeg";
import { connect } from "react-redux";
import { getActs, getContacts } from "../actions";

class HomePage extends React.Component {
  state = {
    randomGenerated: {
      act: "",
      contact: ""
    }
  };
  componentDidMount() {
    console.log(":: IN COMPONENT DID MOUNT ::");
    const token = localStorage.getItem("token");
    this.props
      .getContacts(this.props.user.id, token)
      .then(() => {
        this.setState({ ...this.state, formContacts: this.props.contacts });
      })
      .then(() => {
        this.props.getActs(this.props.user.id, token);
      })
      .then(() => {
        this.setState({ ...this.state, formActs: this.props.acts });
      });
    this.handleGenerateRandom();
  }

  handleGenerateRandom = () => {
    console.log(":: HANDLE GENERATE RANDOM");
    var randomContact = this.props.contacts[
      Math.floor(Math.random() * this.props.contacts.length)
    ];
    var randomAct = this.props.acts[
      Math.floor(Math.random() * this.props.acts.length)
    ];
    if (randomContact !== undefined && randomAct !== undefined) {
      this.setState({
        randomGenerated: {
          act: randomAct.description,
          contact: `${randomContact.contactFirst} ${randomContact.contactLast}`
        }
      });
    }
  };
  render() {
    if (this.props.isGettingActs) {
      return <div>Loading ...</div>;
    }
    if (this.props.isGettingContacts) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <Nav isLoggedIn={this.props.isLoggedIn} />
        <div className="body-container">
          <section className="left-section">
            <img className="left-image" src={LeftImage} alt="Fireworks" />
          </section>
          <section className="right-section">
            <div>
              <div className="right-section-content">
                {this.state.randomGenerated.act}
              </div>
              <div className="right-section-content">
                for {this.state.randomGenerated.contact}
              </div>
            </div>
            <div className="generate-btn" onClick={this.handleGenerateRandom}>
              Generate a new act of kindness
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
  console.log(":: HOMEPAGE USER OBJECT IS ::" + JSON.stringify(state.user));
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    loggingIn: state.loggingIn,
    error: state.error,
    contacts: state.contacts,
    acts: state.acts,
    isGettingActs: state.isGettingActs,
    isGettingContacts: state.isGettingContacts
  };
};

export default connect(
  mapStateToProps,
  { getActs, getContacts }
)(HomePage);
