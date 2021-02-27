import React from 'react'
import styled from 'styled-components'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './CompostBenefits.css'

function CompostBenefits() {
    return (
        <HomePageWrapper>
            <Container>
                <Row>
                    <BodyHeader>
                        BENEFITS OF COMPOSTING
					</BodyHeader>
                </Row>
                <Row>
                    <Col md={9}>
                        <HomeDiv>
                            <Container>
                                <Row>
                                    <Col md={1}>
                                        <ImageDiv>
                                            <Image className='small' src='./img/dirt.png' />
                                        </ImageDiv>
                                    </Col>
                                    <Col md={10}>
                                        <BodySubHeader>Compost Improves Soil Structure &amp; Functioning = More Crop Growth! </BodySubHeader>
                                        <BodyParagraph>
                                            The organic material in compost allows soil to retain higher amounts of water, nutrients &amp; air.
                                            This reduces erosion and optimizes the ecosystem for larger yields of more nutritious product - without much extra effort!
										</BodyParagraph>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1}>
                                        <ImageDiv>
                                            <Image className='small' src='./img/carrots.png' />
                                        </ImageDiv>
                                    </Col>
                                    <Col md={10}>
                                        <BodySubHeader>With Better Soils, There Is Less Need for Synthetic Fertilizers</BodySubHeader>
                                        <BodyParagraph>
                                            Improved soils welcome friendly micro-organisms that ward off pests &amp; diseases for plants,
                                            much like probiotics do for us!  Nutrients from compost also last longer than man-made counterparts.
										</BodyParagraph>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1}>
                                        <ImageDiv>
                                            <Image className='small' src='./img/wheat.png' />
                                        </ImageDiv>
                                    </Col>
                                    <Col md={10}>
                                        <BodySubHeader>Smaller Landfills &amp; Greenhouse Gas Emissions</BodySubHeader>
                                        <BodyParagraph>
                                            Diverting kitchen scraps into compost reduces unsightly landfills and their methane gas.
                                            Unlike landfills, composting mimics nature’s way of breaking down material by introducing air into the system,
                                            while holding onto carbon and eliminating dangerous greenhouse gases.
										</BodyParagraph>
                                    </Col>
                                </Row>
                            </Container>
                        </HomeDiv>
                    </Col>
                    <Col md={3}>
                        <Image className='benefits' src='./img/benefits.png' />
                    </Col>
                </Row>
            </Container>
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
    display: flex;
    width: '100vh';
    /* margin-bottom: 5rem; */
    @media (max-width: 768px ){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        .benefits{
            display:none;
        }
    }

    `

const HomeDiv = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px; */
	padding-top: 200px;
    .row{
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-gap: 1px;
    }
    .col-md-10{
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 768px ){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        .col-md-1{
         display: flex;
        justify-content: center;
        }
    .row{
            display: flex;
            flex-direction: column;
        }
}

`
const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    img{
        position: sticky;
    }
`

const BodyHeader = styled.h2`
	color: #1E8E00;
    font-size: 65px;
    padding: 0 0 0 5rem;
	position: relative;
	top: 150px;
    @media (max-width: 768px ){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        font-size: 35px;
        align-items: center;
    }
`

const BodySubHeader = styled.h2`
	color: #1E8E00;
    font-size: 25px;
    padding: 3rem 0 1rem 0;
`

const BodyParagraph = styled.p`
    font-size: 15px;
`


export default CompostBenefits
