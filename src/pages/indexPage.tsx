import React from 'react';
import Counter from '../containers/Counter';
import CounterHistory from '../containers/CounterHistory';
import CounterFilters from '../containers/CounterFilters';

interface IProps {}

const IndexPage = () => {
  return (
    <>
      <Counter />
      <CounterFilters />
      <CounterHistory />
    </>
  );
};

export default IndexPage;
