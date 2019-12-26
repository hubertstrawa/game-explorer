import React from 'react'
import GameItem from '../games/GameItem';
import styled from 'styled-components'
import rocket from '../assets/rocket.svg'

const Wrap = styled.section`
display: flex;
flex-direction: column;

span {
    font-size: 3rem;
    margin: 1rem 0 3.2rem 0;
    position: relative;

    @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 1rem;
    text-align: center;
    }


    @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2rem;
    }
}
`

const Grid = styled.div`
display: grid;
grid-column: center-start / center-end;
grid-gap: 5rem;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: min-content min-content;

@media (max-width: ${({ theme }) => theme.desktop}) {
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.tabletLandscape}) {
  grid-template-columns: 1fr;
  margin: 0 auto;
  }
`

const Home = (props) => {
    return (
        <Wrap>
            {!props.loading && <span>Most Popular Games Of 2019 <img src={rocket} alt="Rocket"/></span>}
        <Grid>
            {props.popularGames.map(popularGame => {
                return <GameItem game={popularGame} key={popularGame.id}/>
            })}
            {props.children}
        </Grid>
        </Wrap>
    )
}

export default Home