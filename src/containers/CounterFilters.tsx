import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getFilter, getAllNumbersCount, getPositiveNumbersCount, getNegativeNumbersCount } from '../selectors/counter';
import { setVisibilityFilter } from '../actions/counter';
import { IStoreState } from '../types/store';
import CounterFilters, { IStateProps, IActionProps } from '../components/Counter/CounterFilters';
import { CounterFiltersList } from '../constants/counter';

const mapStateToProps = (state: IStoreState): IStateProps => ({
  filter: getFilter(state),
  allNumbersCount: getAllNumbersCount(state),
  positiveNumbersCount: getPositiveNumbersCount(state),
  negativeNumbersCount: getNegativeNumbersCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => ({
  setFilter: (filter: CounterFiltersList) => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterFilters);
