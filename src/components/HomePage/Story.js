import styled from "styled-components";
import React from "react";
import Faq from "./Faq";

const OurStory = () => {
    return (
        <>
            <Story>
                <ImageBox>
                    <img src="./img/children-planting.svg" alt="children planting" />
                </ImageBox>
                <Body>
                    <Title>OUR STORY</Title>
                    <Paragraph>
                        A tech team of General Assembly grads, we wanted to fuse our powers
                        of engineering, data and design to give back to Mother Nature. A
                        mutual interest in sustainable cities led to a focus on composting,
                        a movement that helps both people and planet as it grows by the day!
                        Want to join us?
          </Paragraph>
                    <LearnMore>
                        <div>
                            <button>Learn More</button>
                        </div>
                    </LearnMore>
                </Body>
            </Story>
            <Faq />
        </>
    );
};

const Story = styled.div`
  display: grid;
  width: "100vh";
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5rem 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const bodyColor = "#1E8E00";
const Body = styled.div`
  display: flex;
  /* padding: 2rem 8rem; */
  justify-content: start;
  flex-direction: column;
  padding: 5rem 10rem;
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Title = styled.h2`
  color: ${bodyColor};
  font-family: "Domine", serif;
  font-size: 50px;
  text-align: center;
  padding: 2rem 0;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Paragraph = styled.p`
  color: #737573;
  font-size: 25px;
  padding: 0 4rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const ImageBox = styled.div`
  display: flex;
  width: 50vw;
  @media (max-width: 768px) {
    display: flex;
    align-self: center;
    justify-content:center;
    img {
      /* width: 200px; */
      height: 80px;
    }
  }
`;
const LearnMore = styled.div`
  background-color: white;
  width: 30vh;
  padding: 5px 2px;
  align-self: center;
  /* box-align:center; */
  border: 2px solid #196d01;
  text-align: center;
  border-radius: 2rem;
  box-shadow: 0 2px #666;
  button {
    padding: 5px 10px;
    background-color: white;
    color: ${bodyColor};
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
  :hover {
    background-color: ${bodyColor};
    button {
      background-color: ${bodyColor};
      color: white;
    }
  }
  :active {
    transform: translateY(2px);
    box-shadow: 0 1px #666;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export default OurStory;
