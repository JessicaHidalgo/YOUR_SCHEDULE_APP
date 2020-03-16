import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Row, Col, Container, Input, Label, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tittle: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      tasks: []
    };
  }
  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      [id]: value
    });
  };

  provideStartDate = date => {
    this.setState({
      startDate: date
    });
  };

  provideEndDate = date => {
    this.setState({
      endDate: date
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const task = {
      tittle: this.state.tittle
    };

    axios
      .post("http://localhost:9000/task/create", {
        tittle: this.state.tittle,
        description: this.state.description,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
      .then(res => {
        console.log(res);
        if (res.status >= 200 && res.status<=205) {
          this.props.history.push("/Search");
        }
      });
  };

  render() {
    const { tittle, description, startDate, endDate } = this.state;
    return (
      <>
        <Container>
          <Row>
            <Col md="2">
              <Label for="tittle"> TITTLE</Label>

              <Input
                onChange={this.handleChange}
                type="tittle"
                name="tittle"
                id="tittle"
              />
            </Col>
            <Col md="2">
              <Label for="description"> DESCRIPTION </Label>
              <Input
                onChange={this.handleChange}
                type="description"
                name="description"
                id="description"
              />
            </Col>
            <Col md="3">
              <Label Start Date>
                {" "}
                START DATE
              </Label>

              <DatePicker
                selected={this.state.startDate}
                onChange={this.provideStartDate}
                value={startDate}
                name="startDate"
              />
            </Col>
            <Col md="2">
              <Label>END DATE</Label>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.provideEndDate}
                value={endDate}
                name="endDate"
              />
            </Col>
          </Row>
          <Row>
            {" "}
            <Col md="3">
              <Button onClick={this.handleSubmit}>Add</Button>
            </Col>{" "}
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Add);
