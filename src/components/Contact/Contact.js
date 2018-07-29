import React from "react";
import Aux from "../../hoc/Auxi";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

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

export default contact;
