import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hotpromoImage from "../assets/image/hotpromo.png";
import beefImage from "../assets/image/beef.jpeg";
import burgerImage from "../assets/image/burger.jpeg";
import kentangImage from "../assets/image/kentang.jpeg";

function Tables() {
    const cards = [
      { image: beefImage, title: "Double Chees Burger", text: "Perpaduan roti burger dengan 2 Lapisan daging gurih dan 2 lapisan keju disajikan dengan saus tomat, acar, potongan bawang dan mustard." },
      { image: burgerImage, title: "Burger", text: "This is a basic example of a React component." },
      { image: kentangImage, title: "Kentang", text: "This is a basic example of a React component." },

    ];

    return (
        <>

      <div className="tables">
        {cards.map((card, index) => (
          <div className="table-container" key={index}>
            <Card style={{ backgroundColor: 'transparent', border:'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body className="daftar" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Card.Img variant="top" src={card.image} />
                <Card.Title className="menu1">{card.title}</Card.Title>
                <Card.Text className="menu2">{card.text}</Card.Text>
                <Button variant="outline-danger" style={{ display: "flex", justifyContent: "center" }}>Click Me</Button>{''}
              </Card.Body>
            </Card>
          </div>
        ))}
        <img src={hotpromoImage} alt="hotpromo" style={{ width: '1180px', height: '280px' }} />
      </div>
      </>
    );
}
    
    export default Tables;

