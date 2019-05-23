import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Bin from "../assets/rag_pic_bin.png";
import Pencil from "../assets/rag_pic_pencil.png";
import "../styles/kindacts.css";
import { connect } from "react-redux";
import { addActs, getActs, deleteActs, updateActs } from "../actions";

class KindActsForm extends React.Component {
  state = {
    newAct: {
      description: "",
      related: "Family",
      actId: null
    }
  };

  componentDidMount() {
    console.log(":: IN COMPONENT DID MOUNT ::");
    const token = localStorage.getItem("token");
    this.props.getActs(this.props.user.id, token).then(() => {
      this.setState({ ...this.state, formActs: this.props.acts });
    });
  }

  handleChanges = e => {
    e.persist();
    this.setState({
      newAct: {
        ...this.state.newAct,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(":: ON SUBMIT CLICKED IN KIND ACTS ::");
    const token = localStorage.getItem("token");
    if (e.target.name === "add") {
      this.props.addActs(this.state.newAct, token);
    }
    if (e.target.name === "update") {
      // code for update
      this.props
        .updateActs(this.props.user.id, this.state.newAct, token)
        .then(() => this.props.getActs(this.props.user.id, token));
    }
    this.setState({
      newAct: {
        description: "",
        related: "famly",
        actId: null
      }
    });
  };

  handleEditButton = id => {
    console.log("CALLING HANDLE EDIT BUTTON");
    let updateAct = this.props.acts.filter(act => {
      return act.id === id;
    });
    console.log(":: UPDATE ACT ::" + JSON.stringify(updateAct));
    this.setState({
      ...this.state,
      newAct: {
        description: updateAct[0].description,
        related: "Friend",
        actId: updateAct[0].id,
        user_id: this.props.user.id
      }
    });
  };

  handleDeleteButton = id => {
    var userResponse = window.confirm(
      "Do you want to delete this act?",
      "Please Confirm"
    );
    if (userResponse) {
      const token = localStorage.getItem("token");
      console.log(":: CALLING DELETE BUTTON IN CONTACT FORM ::" + id);
      this.props
        .deleteActs(id, token)
        .then(() => this.props.getActs(this.props.user.id, token));
    }
  };

  handleCancelClick = e => {
    e.preventDefault();
    this.setState({
      newAct: {
        description: "",
        related: "famly",
        actId: null
      }
    });
  };

  render() {
    if (this.props.isAddingActs) {
      return <div>Loading ...</div>;
    }
    if (this.props.isDeletingActs) {
      return <div>Loading ...</div>;
    }
    if (this.props.isUpdatingActs) {
      return <div>Loading ...</div>;
    }
    if (this.props.isGettingActs) {
      return <div>Loading ...</div>;
    }
    console.log(
      ":: RENDER OF ACTS FORM - STATE ACT LIST IS ::" +
        JSON.stringify(this.state.formActs)
    );

    console.log(
      ":: RENDER OF ACTS FORM - PROP ACT LIST IS ::" +
        JSON.stringify(this.props.acts)
    );
    let isRender;
    if (
      this.state.formActs === undefined ||
      this.state.formActs === null ||
      (Object.entries(this.state.formActs).length === 0 &&
        this.state.formActs.constructor === Object)
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
            <div className="left-section-container-kindact ">
              <form onSubmit={this.onSubmit}>
                <div className="form-text-kindact">Act of kindness</div>
                <div className="form-element-kindact">
                  <input
                    className="form-input-kindact"
                    type="text"
                    name="description"
                    placeholder="Enter a new act of kindness"
                    value={this.state.newAct.description}
                    onChange={this.handleChanges}
                  />
                </div>

                {!this.state.newAct.actId && (
                  <button
                    className="contact-btn"
                    name="add"
                    onClick={this.onSubmit}
                  >
                    Add Kind Act
                  </button>
                )}
                {this.state.newAct.actId && (
                  <button
                    className="contact-btn-update"
                    name="update"
                    onClick={this.onSubmit}
                  >
                    Update Kind Act
                  </button>
                )}
                <button
                  className="contact-btn"
                  name="cancel"
                  onClick={this.handleCancelClick}
                >
                  Cancel
                </button>
              </form>
            </div>
          </section>
          <section className="right-section-kindact">
            <div className="right-section-kindact-heading">
              <div className="kindact-heading1">Act of kindness</div>
              <div className="kindact-heading3" />
            </div>

            {isRender &&
              this.props.acts.map(act => (
                <div key={act.id} className="right-section-kindact-content">
                  <div className="kindact-heading1-content">
                    {act.description}
                  </div>
                  <div className="kindact-heading3-content">
                    <img
                      className="kindact-form-img"
                      src={Pencil}
                      onClick={() => this.handleEditButton(act.id)}
                    />
                    <img
                      className="kindact-form-img"
                      src={Bin}
                      onClick={() => this.handleDeleteButton(act.id)}
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
    ":: KIND ACTS FORM USER OBJECT IS ::" + JSON.stringify(state.user)
  );
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    loggingIn: state.loggingIn,
    error: state.error,
    acts: state.acts,
    isGettingActs: state.isGettingActs,
    isUpdatingActs: state.isUpdatingActs,
    isDeletingActs: state.isDeletingActs,
    isAddingActs: state.isAddingActs
  };
};

export default connect(
  mapStateToProps,
  { addActs, getActs, deleteActs, updateActs }
)(KindActsForm);
