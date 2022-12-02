import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { addTask, deleteTask, getTask,updateTask } from "./action";

const mapStateToProps = (state) => ({
    ...state.dashboard
});

const mapDispatchToProps = (
    dispatch,
    ownProps
) => ({
    getTask: () => dispatch(getTask()),
    deleteTask: (data) => dispatch(deleteTask(data,ownProps)),
    addTask: (data) => dispatch(addTask(data,ownProps)),
    updateTask: (data) => dispatch(updateTask(data,ownProps)),

});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

