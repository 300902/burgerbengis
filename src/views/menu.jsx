import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rendangImage from "../assets/image/rendang.jpeg";
import oporImage from "../assets/image/opor.jpeg";
import downloadImage from "../assets/image/download.jpeg";
import gulaiImage from "../assets/image/gulai.jpeg";
import sotoImage from "../assets/image/soto.webp";
import semurImage from "../assets/image/semur.jpeg";
import NavigationBar from "../components/NavigationBar";

function Menu() {
  const cards = [
    { image: rendangImage, title: "Rendang", text: "This is a basic example of a React component." },
    { image: oporImage, title: "Opor", text: "This is a basic example of a React component." },
    { image: downloadImage, title: "Satai", text: "This is a basic example of a React component." },
    { image: gulaiImage, title: "Gulai", text: "This is a basic example of a React component." },
    { image: sotoImage, title: "Soto", text: "This is a basic example of a React component." },
    { image: semurImage, title: "Semur", text: "This is a basic example of a React component." },
    // ...other cards...
  ];

  return (
    <>
    <NavigationBar />

    <div className="menu">
      {cards.map((card, index) => (
        <div className="card-container" key={index}>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={card.image} />
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

export default Menu;