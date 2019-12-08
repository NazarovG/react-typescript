import { connect } from 'react-redux';
import { getVisibleNumbers } from '../selectors/counter';
import { IStoreState } from '../types/store';
import CounterHistory, { IStateProps } from '../components/Counter/CounterHistory';

const mapStateToProps = (state: IStoreState): IStateProps => ({
  history: getVisibleNumbers(state),
});

export default connect(mapStateToProps, {})(CounterHistory);
