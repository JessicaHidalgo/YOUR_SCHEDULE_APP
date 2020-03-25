import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Row, Col, Container, Input, Label, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import moment from "moment";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const dateParser = date => {
  const parsing = new Date(date);
  const month = parsing.getMonth()+1;
  const year = parsing.getFullYear();
  const day = parsing.getDate();
  console.log(year)
  console.log(month)
  console.log(day)
  return `${year}-${month}-${day}`;
};
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tittle: "",
      description: "",
      star_date: new Date(),
      end_date: new Date(),
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
    console.log(date)
    console.log(dateParser(date));
    this.setState({
      star_date: dateParser(date)
    });
  };

  provideEndDate = date => {
    console.log(date)
    console.log(dateParser(date));
   
    this.setState({
      end_date: dateParser(date)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const task = {
      tittle: this.state.tittle
    };
    //I need to send the employee_id trough the body
    axios
      .post("http://localhost:9000/timer", {
        employee_id: this.state.employee_id,
        tittle: this.state.tittle,
        description: this.state.description,
        star_date: this.state.star_date,
        end_date: this.state.end_date
      })
      .then(res => {
        console.log(res);
        console.log(res.status >= 200 && res.status <= 205);
        if (res.status >= 200 && res.status <= 205) {
          this.props.history.push(`/Search/${this.state.employee_id}`);
        }
      });
  };

  render() {
    const { tittle, description, star_date, end_date } = this.state;
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
              <Label for="tittle">EMPLOYEEID:</Label>

              <Input
                onChange={this.handleChange}
                type="employee_id"
                name="employee_id"
                id="employee_id"
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
                onChange={this.provideStartDate}
                value={star_date}
                name="star_date"
              />
            </Col>
            <Col md="2">
              <Label>END DATE</Label>
              <DatePicker
                onChange={this.provideEndDate}
                value={end_date}
                name="end_date"
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
