import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Bin from "../assets/rag_pic_bin.png";
import Pencil from "../assets/rag_pic_pencil.png";
import "../styles/kindacts.css";
import { connect } from "react-redux";

class KindActsForm extends React.Component {
  state = {
    newAct: {
      act: ""
    }
  };
  handleChanges = e => {
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
  };
  render() {
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
                    name="act"
                    placeholder="Enter a new act of kindness"
                    value={this.state.newAct.act}
                    onChange={this.handleChanges}
                  />
                </div>

                <button className="kindact-btn" onClick={this.onSubmit}>
                  Add a kind act
                </button>
              </form>
            </div>
          </section>
          <section className="right-section-kindact">
            <div className="right-section-kindact-heading">
              <div className="kindact-heading1">Act of kindness</div>
              <div className="kindact-heading3" />
            </div>
            <div className="right-section-kindact-content">
              <div className="kindact-heading1-content">
                Help set up a lemonade stand in your community and involve
                children to participate.
              </div>
              <div className="kindact-heading3-content">
                <img className="kindact-form-img" src={Pencil} />
                <img className="kindact-form-img" src={Bin} />
              </div>
            </div>
            <div className="right-section-kindact-content" />
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
    acts: state.acts
  };
};

export default connect(null)(KindActsForm);
