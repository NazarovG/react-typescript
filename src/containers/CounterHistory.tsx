import { connect } from 'react-redux';
import { getVisibleNumbers } from '@selectors/counter';
import CounterHistory, { IStateProps } from '@components/Counter/CounterHistory';

const mapStateToProps = (state: IStoreState): IStateProps => ({
  history: getVisibleNumbers(state),
});

export default connect(mapStateToProps, {})(CounterHistory);
