import React from "react";
import Aux from "../../hoc/Auxi";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

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
const styles = {
  card: {
    margin: 120
  },
  media: {
    height: 100,
    width: 100,
    paddingTop: "56.25%" // 16:9
  }
};

export default Video;
