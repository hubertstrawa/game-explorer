import React from 'react';
import styled from 'styled-components';
import GameItem from './GameItem'

const Grid = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 4rem;

@media (max-width: ${({ theme }) => theme.desktop}) {
  grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
  grid-template-columns: 1fr;
  }
`

const Button = styled.button`
padding: 0.7rem 1rem;
width: 12rem;
font-size: 1.5rem;
border-radius: 15px;
border: none;
margin: 2rem auto 2.5rem auto;
background-color: #393e46;
color: #eeeeee;
cursor: pointer;
transition: transform 0.3s ease-in-out;

&:hover {
  transform: translateY(-3px)
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  display: flex;
  justify-content: center;
  }
`

const Games = (props) => {

    return (
      <React.Fragment>
      <Button onClick={props.clearGames}>clear</Button>
      <Grid>
        {props.games.map(game => {
        return <GameItem game={game} key={game.id}/>
        })}
      </Grid>
      </React.Fragment>
    );
  };
  
  export default Games;