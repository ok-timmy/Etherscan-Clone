import React, { FC } from "react";
import { Card, Container, Hero, Section } from "react-bulma-components";
// import { Row } from 'react-bootstrap'

const Address: FC = () => {
  return (
    <>
      <Section>
        <Hero className="px-3 is-flex-direction-row">
          <Card className="col-6">This is My first card</Card>{" "}
          <Card className="col-6">This is My first card</Card>{" "}
        </Hero>
      </Section>

      {/* <Row className=''>
        <Col > Card 1</Col>
        <Col>Card 2</Col>
    </Row> */}
      {/* </Grid> */}
    </>
  );
};

export default Address;
