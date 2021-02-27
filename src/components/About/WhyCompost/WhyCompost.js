import React from 'react'
import styled from 'styled-components'
import { Container, CardDeck, Card } from 'react-bootstrap'
import './WhyCompost.css'

function WhyCompost() {
    return (
        <HomePageWrapper>
            <HomeDiv className='centerChild mx-auto'>
                <BodyHeader>WHY COMPOST?</BodyHeader>
                <Container>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src='./img/card1.png' />
                            <Card.Title className='header text-center mt-4'>Food Waste &amp; Hunger</Card.Title>
                            <Card.Body className='text-center'>
                                Americans generate about 295 million tons of MSW every year.
                                The largest portion of that trash is food and kitchen scraps,
                                resulting in the waste of about 40% of our food supply.
                                With food insecurity issues on the rise, lets change that!
							</Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src='./img/card2.png' />
                            <Card.Title className='header text-center mt-4'>Landfills &amp; Landscapes</Card.Title>
                            <Card.Body className='text-center'>
                                More than half of the yearly MSW that Americans
                                ends up in a landfill with the largest portion
                                of that supply being food scraps.
                                Studies suggest that we will run out of landfill
                                space in less than 20 years. Reducing landfill
                                deposits saves 35% of that area for forests
                                and other natural ecosystems.
							</Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src='./img/card3.png' />
                            <Card.Title className='header text-center mt-4'>Cost Savings &amp; Sustainability</Card.Title>
                            <Card.Body className='text-center'>
                                The average household throws out 43% of total food,
                                equating to a loss of $1,500 per year for a 4-person home!
                                And that’s not even larger food providers, such as restaurants and retail.
                                Composting is a sustainable way to prolong both food and finances without
                                toxic unnatural pesticides or chemicals.
							</Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </HomeDiv>
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
    display: flex;
    width: '100vh';
    /* margin-bottom: 5rem; */
`

const HomeDiv = styled.div`
    display: flex;
    padding: 2rem 8rem;
    justify-content: start;
    flex-direction: column;
    @media (max-width: 768px ){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 2rem 1rem;
    }
`

const BodyHeader = styled.h2`
	color: #1E8E00;
	text-align: center;
    font-size: 65px;
    padding: 3rem 0 1rem 0;
    @media (max-width: 768px ){
        display: flex;
        justify-content: center;
        font-size: 50px;
    }
`

/* const BodyParagraph = styled.p`
    font-size: 15px;
` */


export default WhyCompost
