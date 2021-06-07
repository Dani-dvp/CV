import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import "../Css/Project.css";

export default class Project extends Component {
  render() {
    return (
      <Container className="ProjectWrap container-fluid">
        <CardDeck>
          <Card className="col-xs-4">
            <Card.Img variant="top" src={this.props.imageOne} />
            <Card.Body>
              <Card.Title>{this.props.firstTitle}</Card.Title>
              <Card.Text>{this.props.firstText}</Card.Text>
              <Button
                className="btn btn-primary"
                a
                href={this.props.firstBtn}
                target="_blank"
              >
                {this.props.btnTxt}
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-xs-4">
            <Card.Img variant="top" src={this.props.imageTwo} />
            <Card.Body>
              <Card.Title>{this.props.secondTitle}</Card.Title>
              <Card.Text>{this.props.secondText}</Card.Text>
              <Button
                className="btn btn-primary"
                a
                href={this.props.secondBtn}
                target="_blank"
              >
                {this.props.btnTxtTwo}
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
        <br />
      </Container>
    );
  }
}
