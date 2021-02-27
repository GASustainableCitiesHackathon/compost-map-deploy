import React from 'react'
import styled from 'styled-components'
import { Accordion, Card } from 'react-bootstrap';


function Faq() {

    // const [toggleClass, setToggleClass] = useState(false)



    return (
        <FaqWrapper>
            <FaqDiv>
                <FaqHeader><span>FA</span>Q</FaqHeader>

                <FaqBody>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} color="blk" variant="link" eventKey="0" >
                                <h4 > What is composting? Why is it called “black gold?”</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><p>
                                    It is being turned into black gold—so called because compost, the mixture of decayed organic matter, is valuable as a nutrient-rich soil additive. In the United States, however, less than 3 percent of food waste is composted.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card >
                            <Accordion.Toggle as={Card.Header} eventKey="1" >
                                <h4 >How can I use compost in my garden?</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>  <p>Compost can be thought of as a natural fertilizer & soil booster. Add it into your flower beds, mix it into potting soil indoors & out or sprinkle it on top of tree beds & lawns. Your plants will thank you!</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <h4>How does composting actually help the environment?</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body><p>Composting adds nutrients and fosters the growth of beneficial microorganisms, insects and earthworms. It also helps to minimize wind and water erosion both by holding onto moisture in the soil and by encouraging healthy root growth</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                <h4>What sort of businesses do we partner with?</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body><p>The website has a number of applications that are effective for operating a food scraps collection service. Please find local businesses near you by using the map.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                <h4>I just found a new compost site. How do I add it?</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body> <p>Send us an email through the text box located in the footer, and we will verify the site and update our information accordingly.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                </FaqBody>
            </FaqDiv>
            <ImageDiv>
                <img src="./img/questions-bro.svg" alt="Questions Bro" />
            </ImageDiv>

        </FaqWrapper>
    )
}

const FaqWrapper = styled.div`
    display: grid;
    width: '100vh';
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5rem;
    @media (max-width: 768px ){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    
    `
const FaqDiv = styled.div`
    display: flex;
    width: 80%;
    padding: 2rem 5rem;
    background-color: #FFFFFF;
    justify-content: start;
    flex-direction: column;
    margin: 4rem 2rem;
    
    
    @media (max-width: 768px ){
        align-content:center;
        padding: 2px;
        h2{
            padding: 2rem ;
            margin: 0;
            text-align: center;
        }
    }
`



const FaqHeader = styled.h2`
    color: #1E8E00;
    font-family: 'Domine', serif;
    font-size: 50px;
    padding: 2rem 0;
    margin-bottom: 1rem;
    span{
        border-bottom: 5px solid red;
        /* padding-bottom: 1px; */
    }
    @media (max-width: 768px ){
        font-size: 25px;
    }
`
const FaqBody = styled.div`
    padding: 0 1rem;
    font-size: 30px;
    padding: 0 10px;
    h4{
        font-weight: bolder;
        :hover{
            text-decoration:underline;
        }
    }
    p {
        font-size: 15px;
        margin-bottom: 2rem;
    }
    .card, .card-header{
        /* background-color: green; */
        background-color: #FFFFFF;
        border: none;
    }
    @media (max-width: 768px ){
        font-size: 15px;
    }

`

const ImageDiv = styled.div`
    display: flex;
    width: 50vw;
    @media (max-width: 768px ){
        display: flex;
        align-self: center;
        img{
            width: 120px;
        }
    }
`

export default Faq
