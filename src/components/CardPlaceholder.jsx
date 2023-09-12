import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function CardPlaceholder() {
  return (
    <Col>
      <Card className="placeholder-card rounded-3 shadow border-0">
        <Card.Body>
          <Card.Img variant="top" src="" />
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} />
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} />
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} />
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={5} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardPlaceholder;
