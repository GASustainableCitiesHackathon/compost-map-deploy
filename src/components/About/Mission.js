import React from "react";
import styled from "styled-components";
import { Image, Container, Row, Col } from "react-bootstrap";

function OurMission() {
    return (
        <HomePageWrapper>
            <Container>
                <Row>
                    <Col className="centerChild" md={4}>
                        <Image src="./img/mission.png" rounded />
                    </Col>
                    <Col md={1}></Col>
                    <Col md={7} className="centerChild">
                        <HomeDiv>
                            <BodyHeader>Our Mission</BodyHeader>
                            <BodyParagraph>
                                Founded in 2021, we energize the conversation by empowering
                                locals with nearby organizations to clear the air around urban
                                composting. Only 4% of available food was composted in 2018.
              				</BodyParagraph>
                            <BodyParagraph>
                                Where to go? What to do? Who to ask? We are here to answer - and
                                teach you ways to fight back against deforestation and food
                                waste along the way!
             				 </BodyParagraph>
                        </HomeDiv>
                    </Col>
                </Row>
            </Container>
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
  display: flex;
  width: "100vh";
  /* margin-bottom: 5rem; */
  .col-md-4{
    @media (max-width: 768px ){
        display: flex;
        align-self: center;
        img{
            width: 200px;
        }
    }
  }
`;

const HomeDiv = styled.div`
  display: flex;
  padding: 2rem 8rem;
  justify-content: start;
  flex-direction: column;
`;

const BodyHeader = styled.h2`
  color: #1e8e00;
  font-size: 65px;
  padding: 3rem 0 1rem 0;
`;

const BodyParagraph = styled.p`
  font-size: 25px;
  color: #989898;
`;

export default OurMission;
