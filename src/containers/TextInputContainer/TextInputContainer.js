import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import { incrementBy } from '../../actions/counter';
import TextInput from '../../components/TextInput';

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = {
  addTodo,
  incrementBy
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);