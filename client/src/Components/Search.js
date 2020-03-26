import React from "react";
import List from "./List";
import { Button, Label } from "reactstrap";
import { Link } from "react-router-dom";
const Search = props => {
  console.log(props);
  return (
    <div>
      <List></List>
      <Link to="/Add">
        <ul><Button color="success">ADD more tasks</Button></ul>
      </Link>
      <div className='mediation-link-container'>
         <hr></hr>
         <ul> <Label>
          Feelind stressed? Why not a 10 minute meditation press the button and
          you will be redirect to a youtube meditation video!
        </Label>
        <Button
          
          outline color="success"  href="https://www.youtube.com/watch?v=ZToicYcHIOU&t=338s"
        >
          ENJOY
        </Button></ul>
      </div>
    </div>
  );
};

export default Search;
