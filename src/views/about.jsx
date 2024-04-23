import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";
import "../style/landingpage.css";
import Card from "react-bootstrap/Card"
import coklatImage from "../assets/image/coklat.jpeg";
import colaImage from "../assets/image/cola.jpeg";
import jerukImage from "../assets/image/jeruk.jpeg";
import pepsiImage from "../assets/image/pepsi.jpeg";
import tehImage from "../assets/image/teh.jpeg";
import waterImage from "../assets/image/water.jpeg";

function About() {
  const cards = [
    { image: coklatImage, title: "Rendang", text: "This is a basic example of a React component." },
    { image: colaImage, title: "Opor", text: "This is a basic example of a React component." },
    { image: jerukImage, title: "Satai", text: "This is a basic example of a React component." },
    { image: pepsiImage, title: "Gulai", text: "This is a basic example of a React component." },
    { image: tehImage, title: "Soto", text: "This is a basic example of a React component." },
    { image: waterImage, title: "Semur", text: "This is a basic example of a React component." },
    // ...other cards...
  ];

  return (
    <>
      <NavigationBar />

      <div className="about">
      {cards.map((card, index) => (
        <div className="card-container" key={index}>
          <Card style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body>
              <Card.Img variant="top" src={card.image} style={{ width: '150px', height: '150px' }} />
              <Card.Title className="text-center">{card.title}</Card.Title>
              <Card.Text className="text-left">{card.text}</Card.Text>
              <Button variant="primary">Click Me</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>

    </>
  );
}

export default About;
