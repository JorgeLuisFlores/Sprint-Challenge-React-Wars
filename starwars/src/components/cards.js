import React from "react";
import { Card } from "reactstrap";

const style = {
  width: "30%",
  border: "5px solid black",
  margin: "5px",
  padding: "5px",
  fontStyle: "italic"
};

function Cards(props) {
  return (
    <div>
      <Card style={style}>
        <p>Name: {props.name}</p>

        <p>Classification: {props.classification}</p>

        <p>Designation: {props.designation}</p>
      </Card>
    </div>
  );
}

export default Cards;
