import React from 'react';
import styled from 'styled-components';
import spinner from '../assets/loading.svg'

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 3.5rem 0;
`

const Loading = () => {
  return (
    <Spinner>
      <img src={spinner} alt='Loading spinner' />
    </Spinner>
  );
};

export default Loading;
