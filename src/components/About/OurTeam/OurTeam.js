import React from "react";
import styled from "styled-components";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./OurTeam.css";

function OurTeam() {
    return (
        <HomePageWrapper>
            <HomeDiv>
                <Container>
                    <Row>
                        <Col>
                            <Image className="team" src="./img/team-work.png" />
                        </Col>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <BodyHeader className="text-center">
                                            MEET THE TEAM
                    </BodyHeader>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <a href="https://www.linkedin.com/in/arbydabu/">
                                            <Image src="./img/team/1.png" />
                                        </a>
                                    </Col>
                                    <Col md={4}>
                                        <a href="https://www.linkedin.com/in/lily-basile/">
                                            <Image src="./img/team/2.png" />
                                        </a>
                                    </Col>
                                    <Col md={4}>
                                        <a href="https://www.linkedin.com/in/naomilichtner/">
                                            <Image src="./img/team/3.png" />
                                        </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <a href="https://www.linkedin.com/in/jaimegoff/">
                                            <Image src="./img/team/4.png" />
                                        </a>
                                    </Col>
                                    <Col md={4}>
                                        <a href="https://www.linkedin.com/in/ebsano/"></a>
                                        <Image src="./img/team/5.png" />
                                    </Col>
                                    <Col md={4}>
                                        <a href="https://www.linkedin.com/in/willandreae/">
                                            <Image src="./img/team/6.png" />
                                        </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="centerChild">
                                        <a href="https://www.linkedin.com/in/taaseen71/">
                                            <Image src="./img/team/7.png" />
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </HomeDiv>
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
  display: flex;
  width: "100vh";
  /* margin-bottom: 5rem; */
  @media (max-width: 768px ){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        .team{
            display: none;
        }
    }
`;

const HomeDiv = styled.div`
  display: flex;
  padding: 2rem 8rem;
  justify-content: start;
  flex-direction: column;
  .col-md-4{
      display: flex;
      justify-content: center;
      :hover{
          transform: scale(1.2)
      }
    }
    .centerChild{
        :hover{
            transform: scale(1.2)
        }
    }
`;

const BodyHeader = styled.h2`
  text-align: center;
  font-family: "Domine", serif;
  color: #1e8e00;
  font-size: 65px;
  padding: 3rem 0 1rem 0;
  @media (max-width: 768px ){
      font-size: 30px;
    }
`;

export default OurTeam;
