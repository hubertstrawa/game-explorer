import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

form {
    height: 4rem;
    color: #fff;

    input[type=text]{
        font-size: 1.6rem;
        height: 90%;
        padding: 0 1rem;
        border-radius: 10px;
        color: ${({theme}) => theme.lightest};
        border: none;
        background-color: ${({theme}) => theme.secondGray};

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.3rem;
        }
    }

    input[type=submit]{
        font-size: 1.5rem;
        height: 98%;
        padding: 0.5rem 1.3rem;
        border-radius: 15px;
        border: none;
        background-color: ${({theme}) => theme.lightest};
        transform: translateX(-12px);
        transition: transform 0.2s ease-in-out;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.3rem;
        }

        &:hover {
        transform: translateX(-16px);
        }
    }
}
`

const Search = ({searchGames, setGames}) => {
    const [text, setText] = useState('');

    const onChangeHandler = e => {
        setText(e.target.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        setGames({})
        searchGames(text);
        setText('');
    }

    return (
        <Wrapper>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={text} onChange={onChangeHandler} placeholder="Search for games..."/>
                <input type="submit" value="Search 🤔"/>
            </form>
        </Wrapper>
    )
}

export default Search;