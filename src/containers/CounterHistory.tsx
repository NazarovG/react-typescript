import { connect } from 'react-redux';
import { getHistory } from '../selectors/counter';
import { IStoreState } from '../types/store';
import CounterHistory, { IStateProps } from '../components/Counter/CounterHistory';

const mapStateToProps = (state: IStoreState): IStateProps => ({
  history: getHistory(state),
});

export default connect(mapStateToProps, {})(CounterHistory);
