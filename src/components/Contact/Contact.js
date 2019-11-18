import React from "react";
import Aux from "../../hoc/Auxi";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const contact = props => (
  <Aux>
    <Card
      style={{
        flex: 1,
        margin: 20,
        padding: 20,
        maxWidth: 645,
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={props.click}
    >
      <CardMedia
        image={props.avatar}
        style={{ width: 100, height: 100 }}
        title="Contemplative Reptile"
      />
      <CardContent>
        <div>Name: {props.name}</div>
        <div>Title: {props.title}</div>
      </CardContent>
    </Card>
  </Aux>
);


export default contact;
