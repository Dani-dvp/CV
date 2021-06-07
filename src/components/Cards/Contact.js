import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../Css/Contact.css";
import Container from "react-bootstrap/Container";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/dani-dvp/repos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          repos: data.length,
        });
      });
  }

  render() {
    return (
      <Container className="container-fluid">
        <CardGroup className="cardWrapper mx-auto d-grid">
          <Card>
            <Card.Img
              className="rounded-circle"
              variant="top"
              src="https://sweamfo.se/wp-content/uploads/2013/11/LinkedIn-icon-logo-+small.gif"
            />
            <Card.Body className="d-flex flex-column ">
              <Card.Title>{this.props.firstTitle}</Card.Title>
              <Card.Text className="mt-auto">
                <a
                  type="button"
                  className="btn btn-success"
                  a
                  href={this.props.link}
                  target="_blank"
                >
                  LinkedIn
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="rounded-circle"
              variant="top"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{this.props.secondTitle}</Card.Title>
              <Card.Text className="mt-auto">
                Här finns {this.state.repos} repos att kika igenom
              </Card.Text>
              <a
                type="button"
                className="btn btn-success mt-auto"
                href="https://github.com/Dani-dvp?tab=repositories"
                target="_blank"
              >
                Github
              </a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="rounded-circle"
              variant="top"
              src="https://www.cyclonis.com/images/2020/06/gmail-small-logo-765x402.png"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{this.props.thirdTitle}</Card.Title>
              <Card.Text className="mt-auto">Kevin1995dani@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
