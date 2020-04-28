import Input from "../components/Input";
import { addTodo } from "../actions/actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (text: string) => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(Input);
