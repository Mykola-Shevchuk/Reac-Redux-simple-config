import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterActions from '../actions/filterActions';
import FilterView from '../components/Filter';

const mapStateToProps = state => ({
  filterBy: state.filterReducer.filterBy
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterView);