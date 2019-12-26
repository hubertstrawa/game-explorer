import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
// STYLES
import GlobalStyles from './components/layout/globalStyles';
import theme from './components/layout/theme';
import Layout from './components/layout/Layout';
import gamepad from './components/assets/console.svg';
import Loading from './components/layout/Loading';
// GAME RELATED
import Search from './components/games/Search';
import Games from './components/games/Games';
import Game from './components/games/Game';
// PAGES
import Home from './components/pages/Home'
import About from './components/pages/About'

const Header = styled.header`
  grid-column: center-start / center-end;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.lightest};
  margin: 1.5rem 0 2.5rem 0;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 1rem 1rem 0 2rem;
  }
`;

const Container = styled.section`
  grid-column: center-start / center-end;
`

const App = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [game, setGame] = useState({});

  useEffect(() => {
    const popularGames = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added`,
        { headers: { 'User-Agent': 'GameExplorer' } }
      );
      const data = res.data.results;
      setPopularGames(data)
      setLoading(false);
    }
    popularGames()
  }, [])

  // SEARCH FOR GAMES
  const searchGames = async (query) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.rawg.io/api/games?search=${query}`,
      { headers: { 'User-Agent': 'GameExplorer' } }
    );
    const data = res.data.results;
    setGames(data)
    setLoading(false);
  }

  // GET SINGLE GAME
  const getGame = async (id) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.rawg.io/api/games/${id}`,
      { headers: { 'User-Agent': 'GameExplorer' } }
    );
    const data = res.data;
    setGame(data)
    setLoading(false);
  }

  const clearGames = () => setGames({});

  return (
    <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Header>
          <Link to='/'><img src={gamepad} onClick={clearGames} height="50px" alt="Logo"/></Link>
          <Search searchGames={searchGames} setGame={setGame} setGames={setGames}/>
        </Header>
        <Container>
          {loading && <Loading/>}
          <Switch>
            <Route exact path='/' render={props => {
              if (Object.keys(games).length === 0) {
                return <Home popularGames={popularGames} loading={loading}/>
              }  else {
                return <Games games={games} clearGames={clearGames}/>
              }
            }} />
            <Route exact path='/about' render={About} />
            <Route exact path='/game/:id' render={props => (
              <Game {...props} game={game} getGame={getGame} setGame={setGame} loading={loading}/>
          )} />
          </Switch>
        </Container>
      </Layout>
    </ThemeProvider>
    </Router>
  );
};

export default App;
