import { finishTodo } from "../actions/actions";
import { connect } from "react-redux";
import { ListItem } from "../components/ListItem";

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCheck: (id: string) => dispatch(finishTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(ListItem);
