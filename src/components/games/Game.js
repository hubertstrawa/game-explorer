import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import ReactPlayer from 'react-player';

const Wrap = styled.div`
grid-column: center-start / center-end;
display: flex;
font-size: 1.8rem;
height: 100%;
margin-bottom: 2rem;

@media (max-width: ${({ theme }) => theme.desktop}) {
  padding: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }

a {
    color: ${({theme}) => theme.light};
    text-decoration: none;
    font-size: 1.6rem;
}

h1 {
    margin: 1rem 0;
}

h3 {
    margin: 2rem 0 0.5rem 0;
}
`

const Left = styled.div`
flex: 6;

@media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 1.5rem;
}

header {
    display: flex;
    justify-content: space-between;
}

div {
    border-radius: 20px;

    video {
        border-radius: 20px;
    }
}
`

const Right = styled.div`
flex: 4;
padding: 1.5rem;

img {
    width: 100%;
    border-radius: 20px;
    opacity: 0.8;
    margin-bottom: 1rem;
}

div {
    margin-top: auto;
    display: flex;
    padding: 0.5rem 0;
    justify-content: space-between;
}
`

const Game = (props) => {
    useEffect(() => {
        props.setGame({});
        props.getGame(props.match.params.id);
      }, []);

    return (
        <Wrap>
            <Left>
                <header>
                    <Link to='/'><span role="img" aria-label="Back emoji">🔙</span> Back to search</Link>
                </header>
                <h1>{props.game.name}</h1>
                <p>{props.game.description_raw}</p>
                {props.game.clip && <h3>Watch a clip</h3>}
                <div>
                    {props.game.clip && <ReactPlayer url={props.game.clip.clip} width="100%" style={{marginBottom: '1rem', borderRadius: '20px'}} light={props.game.background_image_additional} controls={true}/>}
                </div>
            </Left>
            <Right>
                <img src={props.game.background_image} alt={props.game.name}/>
                <div>
                    <p><span role="img" aria-label="Star emoji">⭐️</span>{props.game.rating}</p>
                    <p><span role="img" aria-label="Gamepad emoji">🎮</span> {props.game.genres && props.game.genres.map(genre => {
                        return `${genre.name} `;
                    })}</p>
                </div>
                <div>
                    <p><span role="img" aria-label="Trophy emoji">🏆</span> {props.game.achievements_count}</p>
                    <p><span role="img" aria-label="Thumbs emoji">👍</span> {props.game.added}</p>
                </div>
            </Right>
        </Wrap>
    )
}

export default Game;
