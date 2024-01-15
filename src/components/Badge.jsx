import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Badge({ player }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>{player.team}</Card.Text>
        <Card.Text variant="primary">{player.nationality}</Card.Text>
        <Card.Text>{player.jerseyNumber}</Card.Text>
        <Card.Text>{player.age}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Badge;
