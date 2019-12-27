import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import bug from '../assets/bug.jpg'

const Wrapper = styled.div`
width: 24rem;
height: 30rem;
font-size: 1.4rem;
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.secondGray};
color: ${({theme}) => theme.lightest};
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.33) 0px 4px 12px;

@media (max-width: ${({ theme }) => theme.mobile}) {
  width: 24rem;
  margin: 0 auto;
  }

img {
  height: 70%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  object-fit: cover;
}

h1 {
  font-size: 1.7rem;
  text-align: center;
  padding-top: 1rem;
}

div {
  margin-top: auto;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.6rem;
  }
}
`

const GameItem = ({game}) => {
  const limitGameName = (name, limit = 19) => {
    const newName = [];
    if (name.length > limit) {
      name.split(' ').reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newName.push(cur);
        }
        return acc + cur.length;
      }, 0)
      return `${newName.join(' ')} ...`;
    }
    return name;
  }

    return (
      <Link to={`/game/${game.id}`}>
        <Wrapper>
          <img alt={game.name} src={game.background_image === null ? bug : game.background_image}/>
          <h1>{limitGameName(game.name)}</h1> 
          <div>
            <p><span role="img" aria-label="Star emoji">⭐️</span> {game.rating}</p>
            <p><span role="img" aria-label="Thumbs Up emoji">👍</span> {game.added}</p>
          </div> 
        </Wrapper>
      </Link>
    )
}

export default GameItem