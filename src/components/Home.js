import React, { Component } from "react";
import Project from "./Cards/Project";
import Contact from "./Cards/Contact";
import Jumbotron from "./Cards/Jumbotron";
import Button from "react-bootstrap/Button";
import "./Css/Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="wrapper">
        <p id="top"></p>
        <Jumbotron
          className="h-5"
          intro="Kevin Dani"
          description="Systemutvecklare"
          text="Jag är en entusiastisk och detaljorienterad student med en passion
          inom IT. Jobbar hårt för att uppnå de mål som förväntas av mig. Ser
          alltid fram emot nya utmaningar och är övertygad om att min kompetens
          och positiva inställning är till stor fördel i alla yrkesroller."
          Link="#contact"
        ></Jumbotron>
        <br />

        <h3 className="projects mx-auto d-block">Mina Projekt</h3>
        <br />
        <br />
        <div className="projects">
          <Project
            className="eCommerce"
            firstBtn="https://github.com/DonOllario/Projektarbete-E-Commerce"
            imageOne="https://webbhotells.se/wp-content/uploads/2019/08/085124-que-es-ecommerce.jpg"
            btnTxt="Github"
            firstTitle="Ett projekt där jag och fyra till skapade en e-handel för olika produkter i form av en konsolapplikation"
            secondBtn="https://github.com/Dani-dvp/WebbApplikation"
            imageTwo="https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"
            btnTxtTwo="Github"
            secondTitle="Vi skapade en hemsida där man kan läsa reviews på olika restauranger och lägga till nya restauranger om någon man vill ha saknas"
          ></Project>
          <br />
        </div>
        <br />
        <br />
        <h3 className="jobs mx-auto d-block">Arbetslivserfarenhet</h3>
        <br />
        <br />
        <div className="jobs mx-auto d-grid">
          <Project
            className="jobs"
            secondBtn="https://www.linkedin.com/company/stormgroup/?originalSubdomain=se"
            imageOne="https://cached-images.btdmtech.se/paf-e/s1/?p=/Globals/7f/2e/7f2e4da7-87c8-4074-a67a-da7e956797b7.jpg"
            btnTxt="Adient"
            firstTitle="Arbetade som eventsäljare hos StormGroup på uppdrag för E-on på olika platser runt om Västra Götaland från 2014 till 2015"
            firstBtn="https://www.adient.com/"
            imageTwo="https://i.ytimg.com/vi/akBwm8jM2As/maxresdefault.jpg"
            btnTxtTwo="StormGroup"
            secondTitle="Jag arbetade som montör på en underleverantör till Volvo vid namn Adient från 2015 till 2020. Här monterade vi ihop stolarna för Volvos personbilar."
          ></Project>
          <br />
        </div>
        <br />
        <br />
        <a id="contact"></a>
        <h3 className=" mx-auto d-block">Kontakt</h3>
        <br />
        <br />
        <Contact link="https://www.linkedin.com/in/kevin-dani-a27ab1172/"></Contact>
        <br />
        <br />
        <br />
        <Button variant="primary" a href="#top">
          Tillbaka till toppen
        </Button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
