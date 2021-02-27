import React from 'react'
import styled from 'styled-components'

function BoroughSelector({ setSelectedBorough }) {
    const handleClick = (e) => {
        e.preventDefault()
        setSelectedBorough(e.target.value)
    }
    return (
        <div>
            <Navigation>
                <UnorderedList>
                    <Lists>
                        <BoroughLinks value='Manhattan' onClick={handleClick}>
                            Manhattan
						</BoroughLinks>
                    </Lists>
                    <Lists>
                        <BoroughLinks value='Queens' onClick={handleClick}>
                            Queens
					</BoroughLinks>
                    </Lists>
                    <Lists>
                        <BoroughLinks value='Brooklyn' onClick={handleClick}>
                            Brooklyn
					</BoroughLinks>
                    </Lists>
                    <Lists>
                        <BoroughLinks value='Bronx' onClick={handleClick}>
                            Bronx
					</BoroughLinks>
                    </Lists>
                    <Lists>
                        <BoroughLinks value='Staten Island' onClick={handleClick}>
                            Staten Island
					</BoroughLinks>
                    </Lists>
                    <Lists>
                        <BoroughLinks value='All' onClick={handleClick}>
                            All Boroughs
					</BoroughLinks>
                    </Lists>
                </UnorderedList>
            </Navigation>
        </div>
    )
}

const Navigation = styled.nav`
    padding-top: 3rem;
`
const BoroughLinks = styled.button`
    background: none;
    font-size: 20px;
    color: #1E9E00;
    border: none;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
    @media (max-width: 768px ){
        font-size: 15px;
    }
`
const UnorderedList = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px ){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`

const Lists = styled.li`
    padding: 0;
`


export default BoroughSelector
