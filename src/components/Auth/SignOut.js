import { Component } from "react";
import { withRouter } from "react-router-dom";
import { signOut } from "../../api/auth";

class SignOut extends Component {
  componentDidMount() {
    const { alert, history, setUser, user } = this.props;

    signOut(user)
      .finally(() =>
        alert({
          heading: "Signed Out Successfully",
          variant: "success",
        })
      )
      .finally(() => history.push("/"))
      .finally(() => setUser(null));
  }

  render() {
    return "";
  }
}

export default withRouter(SignOut);
