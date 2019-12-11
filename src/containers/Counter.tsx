import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { increase, reset, decrease } from '@actions/counter';
import Counter, { IStateProps, IActionProps } from '@components/Counter/Counter';
import { getCount } from '@selectors/counter';

const mapStateToProps = (state: IStoreState): IStateProps => ({
  count: getCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => ({
  handleIncrease: (value: number) => dispatch(increase(value)),
  handleDecrease: (value: number) => dispatch(decrease(value)),
  handleReset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
