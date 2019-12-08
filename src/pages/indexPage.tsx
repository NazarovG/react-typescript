import React from 'react';
import Counter from '../containers/Counter';
import CounterHistory from '../containers/CounterHistory';

interface IProps {}

const IndexPage = () => {
  return (
    <>
      <Counter />
      <CounterHistory />
    </>
  );
};

export default IndexPage;
