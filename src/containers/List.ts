import { connect } from "react-redux";
import { List } from "../components/List";

const mapStateToProps = (state: any) => {
  return {
    todos: state.reducerTodo,
  };
};

export default connect(mapStateToProps)(List);
