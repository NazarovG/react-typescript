import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Counter, { IStateProps, IActionProps } from '../components/Counter/Counter';
import { getCount } from '../selectors/counter';
import { increase, reset, decrease } from '../actions/counter';
import { IStoreState } from '../types/store';

const mapStateToProps = (state: IStoreState): IStateProps => ({
  count: getCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => ({
  handleIncrease: (value: number) => dispatch(increase(value)),
  handleDecrease: (value: number) => dispatch(decrease(value)),
  handleReset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
