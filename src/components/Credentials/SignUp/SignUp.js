import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

//TODO: import { signUp, signIn } from '../../api/auth'
//TODO: import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    //TODO:  onSignUp = event => {
    //TODO:      event.preventDefault()

    //TODO:      const { msgAlert, history, setUser } = this.props

    //TODO:      signUp(this.state)
    //TODO:          .then(() => signIn(this.state))
    //TODO:          .then(res => setUser(res.data.user))
    //TODO:          .then(() => msgAlert({
    //TODO:              heading: 'Sign Up Success',
    //TODO:              message: messages.signUpSuccess,
    //TODO:              variant: 'success'
    //TODO:          }))
    //TODO:          .then(() => history.push('/'))
    //TODO:          .catch(error => {
    //TODO:              this.setState({ email: '', password: '', passwordConfirmation: '' })
    //TODO:              msgAlert({
    //TODO:                  heading: 'Sign Up Failed with error: ' + error.message,
    //TODO:                  message: messages.signUpFailure,
    //TODO:                  variant: 'danger'
    //TODO:              })
    //TODO:          })
    //TODO:  }

    render() {
        const { email, password, passwordConfirmation } = this.state

        return (
            <div className="row">
                <div className="col-sm-10 col-md-8 mx-auto mt-5">
                    <h3>Sign Up</h3>
                    <Form autocomplete="off" onSubmit={this.onSignUp}>
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
                        <Form.Group controlId="passwordConfirmation">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                required
                                name="passwordConfirmation"
                                value={passwordConfirmation}
                                type="password"
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                        >
                            Submit
            </Button>
                        <Button variant="link" type="submit">
                            <Nav.Link href='/sign-in'>Sign In</Nav.Link>
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp)
