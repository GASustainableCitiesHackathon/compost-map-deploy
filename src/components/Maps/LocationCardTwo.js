import React, { useState, useEffect } from "react";
import { patchWeight } from "../../api/location";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "../../App.css";

const LocationCardTwo = ({ alert, pin, randomImage, user }) => {
  const [weight, setWeight] = useState("");
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    patchWeight(pin, weight, user)
      .then(() => {
        setTotal(total + Number(weight));
        alert({
          heading: "Thank you for your compost!",
          variant: "success",
        });
      })
      .catch((error) => {
        alert({
          heading: "Sign In Failed with error: " + error.message,
          variant: "danger",
        });
      });
  };
  console.log(pin.weights);

  useEffect(() => {
    let a = [0];
    pin.weights.map((weight) => a.push(weight.weightLbs));
    const num = a.reduce((a, b) => a + b);
    setTotal(num);
  }, []);

  const location = pin.location.substr(0, pin.location.length - 5);
  return (
    <>
      <Card>
        <h5>{pin.food_scrap_drop_off_site}</h5>
        <div className="d-flex">
          <Cardimage
            src={`randomImages/${randomImage}.png`}
            alt=""
            width="120px"
          />
          <Infoblock>
            <Info>{location}</Info>
            <Info>{pin.ntaname}</Info>
            <Info>
              <img src="/icons/popup/clock.jpg" width="15px" alt="clock" />{" "}
              {pin.hours_from} - {pin.hours_to}
            </Info>
            <Info>
              <img
                src="/icons/popup/calendar.png"
                width="15px"
                alt="calendar"
              />{" "}
              {pin.operation_day}
            </Info>
            <Info>Total Compost: {total} lbs</Info>
          </Infoblock>
        </div>
        {user ? (
          <div className="d-flex">
            <Form autoComplete="off">
              <Form.Control
                required
                type="text"
                name="weight"
                value={weight}
                placeholder="Enter lbs of Scrap"
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form>
            <Button
              variant="outline-success"
              size="sm"
              type="submit"
              onClick={handleSubmit}
            >
              <img
                src="/icons/popup/calculator.png"
                width="20px"
                alt="calculator"
              />{" "}
              Calculate
            </Button>
          </div>
        ) : null}
      </Card>
    </>
  );
};

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Cardimage = styled.img`
  padding: 10px;
`;
const Infoblock = styled.div`
  dispay: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: block;
`;

export default LocationCardTwo;
