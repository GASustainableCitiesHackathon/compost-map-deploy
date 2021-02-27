import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

//TODO: import { signIn } from "../../api/auth";
//TODO: import messages from "../AutoDismissAlert/messages";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (event) =>
        this.setState({
            [event.target.name]: event.target.value,
        });

    //TODO:      onSignIn = (event) => {
    //TODO:          event.preventDefault();

    //TODO:          const { msgAlert, history, setUser } = this.props;

    //TODO:          signIn(this.state)
    //TODO:              .then((res) => setUser(res.data.user))
    //TODO:              .then(() =>
    //TODO:                  msgAlert({
    //TODO:                      heading: "Sign In Success",
    //TODO:                      message: messages.signInSuccess,
    //TODO:                      variant: "success",
    //TODO:                  })
    //TODO:              )
    //TODO:              .then(() => history.push("/"))
    //TODO:              .catch((error) => {
    //TODO:                  this.setState({ email: "", password: "" });
    //TODO:                  msgAlert({
    //TODO:                      heading: "Sign In Failed with error: " + error.message,
    //TODO:                      message: messages.signInFailure,
    //TODO:                      variant: "danger",
    //TODO:                  });
    //TODO:              });
    //TODO:      };

    render() {
        const { email, password } = this.state;

        return (
            <div className="row">
                <div className="col-sm-10 col-md-8 mx-auto mt-5">
                    <h3>Sign In</h3>
                    <Form autoComplete="off" onSubmit={this.onSignIn}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter email"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                value={password}
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
            </Button>
                        <Button variant="link" type="submit">
                            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);
