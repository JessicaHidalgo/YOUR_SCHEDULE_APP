import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email
    };

    axios
      .post("http://localhost:9000/auth", {
        email: this.state.email,
        password: (this.state.password)
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({employee_id:res.data.employee.employee_id})
          this.props.history.push("/Search");
        }
      });
  };
  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      [id]: value
    });
  };

  render() {
    console.log(this.state);
    return (
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            onChange={this.handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="something@idk.cool"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            onChange={this.handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Writte down your password!"
          />
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default withRouter(Forms);
