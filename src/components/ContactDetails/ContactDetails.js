import React from "react";
import Aux from "../../hoc/Auxi";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const contactDetail = props => (
  <Aux style={{ float: "right" }}>
    <Card
      style={{
        flex: 1,
        margin: 20,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={props.click}
    >
      <CardMedia
        image={props.avatar}
        style={{ width: 300, height: 300 }}
        title="Contemplative Reptile"
      />
      <CardContent>
        <div>Name: {props.name}</div>
        <div>title: {props.title}</div>
        <div>email: {props.email}</div>
        <div>phone: {props.phone}</div>
        <div>address: {props.address}</div>
      </CardContent>
    </Card>
  </Aux>
);

export default contactDetail;
