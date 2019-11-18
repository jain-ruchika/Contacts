import React from "react";
import Aux from "../../hoc/Auxi";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Video = props => (
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
    >
      <CardContent>
        <h2>Name: {props.title}</h2>
        <div>Title: {props.description}</div>
      </CardContent>
    </Card>
  </Aux>
);

export default Video;
