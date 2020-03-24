import React from "react";
import { Button, Card } from "semantic-ui-react";

const AdviceCard = ({ children, advice }) => (
  <Card>
    <Card.Content>
      <Card.Header>Tips of the day</Card.Header>
      <Card.Description>{children} </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="green" onClick={advice} >
          New Tip
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default AdviceCard;