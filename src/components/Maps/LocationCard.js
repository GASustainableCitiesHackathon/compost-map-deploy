import React, { useState } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { patchWeight } from "../../api/location.js";
import styled from "styled-components";
import "../../App.css";

const LocationCard = ({ alert, user, pin, randomNumber, randomImage }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("loc, weight, user", pin, weight, user);
    patchWeight(pin, weight, user)
      .then(() =>
        alert({
          heading: "Thank you for your compost!",
          variant: "success",
        })
      )
      .then(() => handleClose())
      .catch((error) => {
        alert({
          heading: "Sign In Failed with error: " + error.message,
          variant: "danger",
        });
      });
  };

  const totalWeight = () => {
    let total = 0;
    pin.weights.map((weight) => {
      total += weight.weightLbs;
    });
    return total;
  };
  totalWeight();

  return (
    <>
      <Row>
        <Col>
          <BusinessInfo>
            <Card.Title className="title">
              {pin.food_scrap_drop_off_site}
            </Card.Title>
            <FoodScrapDropOffSite>{pin.pin}</FoodScrapDropOffSite>
            <FoodScrapDropOffSite>
              {pin.borough}, NY {pin.zip_code}
            </FoodScrapDropOffSite>
            <SiteInfo>
              <img src="/icons/popup/phone.png" width="10px" alt="phone" />{" "}
              (718)
              {randomNumber[0]}-{randomNumber[1]}
            </SiteInfo>
            <SiteInfo>
              <img src="./icons/globe.svg" width="10px" alt="globe" />{" "}
              <a href={pin.website}>{pin.website}</a>
            </SiteInfo>
            <SiteInfo>
              <img
                src="./icons/popup/directions.png"
                width="10px"
                alt="directions"
              />{" "}
              Directions
            </SiteInfo>
          </BusinessInfo>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <SiteInfo>Total Compost: {totalWeight()} lbs</SiteInfo>
          <SiteInfo>Total Dropoffs: {pin.weights.length} lbs</SiteInfo>
          <SiteInfo>
            <img src="/icons/popup/calendar.png" width="10px" alt="calendar" />
            Hours: {pin.hours_from} - {pin.hours_to}
          </SiteInfo>
          <AdditionalInfo>
            <span>Operation Day: </span>
            {pin.operation_day}
            <br />
            <span>Open Months: </span>
            {pin.open_months}
          </AdditionalInfo>
          {user ? (
            <div className="d-flex">
              <Button
                className="mr-auto p-2"
                variant="success"
                onClick={handleShow}
              >
                Calculate Your Compost
              </Button>
            </div>
          ) : null}
        </Col>
        <Col xs={12} md={6}>
          <BusinessImage className="d-flex">
            <img src={`randomImages/${randomImage}.png`} alt="" width="120px" />
          </BusinessImage>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex flex-column">
          <Modal.Title className="title mx-auto">WELCOME BACK</Modal.Title>
          <ModalSubheading>calculate your compost!</ModalSubheading>
        </Modal.Header>
        <Modal.Body className="mx-auto">Enter pounds of compost</Modal.Body>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group controlId="weight">
            <Form.Control
              required
              type="text"
              name="weight"
              value={weight}
              placeholder="Enter weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>
          <Button
            className="mx-auto"
            variant="success"
            size="lg"
            type="submit"
            block
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

const BusinessInfo = styled.div`
  flex-direction: column;
  flex: 1;
`;
const BusinessImage = styled.div`
  display: flex;
`;

const FoodScrapDropOffSite = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #656565;
`;
const SiteInfo = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  img {
    margin-right: 1px;
  }
`;
const AdditionalInfo = styled.p`
  font-size: 12px;
  width: 30vw;
`;

const ModalSubheading = styled.p`
  color: #989898;
  font-size: 20px;
  margin: auto;
`;

export default LocationCard;
