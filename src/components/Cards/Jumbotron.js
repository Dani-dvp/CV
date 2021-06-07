import React, { Component } from "react";
import Jag from "../Images/Jag.jpg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../Css/Home.css";

export default class Jumbotron extends Component {
  render() {
    return (
      <Container className="container-fluid">
        <div class="jumbotron">
          <img src={Jag} className="rounded-circle" alt="..." />
          <h1 class="display-4">{this.props.intro}</h1>
          <h1 class="lead">{this.props.description}</h1>
          <hr class="my-4" />
          <p className="h3">{this.props.text}</p>
          <Button variant="primary" a href="#contact">
            Kontakta mig
          </Button>
        </div>
      </Container>
    );
  }
}
