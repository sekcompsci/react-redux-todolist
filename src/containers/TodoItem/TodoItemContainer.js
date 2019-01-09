import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todos';
import TodoItem from '../../components/TodoItem';

const mapDispatchToProps = {
    removeTodo
};

export default connect(
    null,
    mapDispatchToProps
)(TodoItem);