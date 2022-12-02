import { connect } from "react-redux";
import { loginUser } from "./action";
import Login from "./Login";
const mapStateToProps = (state) => ({
    ...state.user.auth
  });
  
  const mapDispatchToProps = (
    dispatch,
    ownProps
  ) => ({
    loginUser: (data) => dispatch(loginUser(data,ownProps)),
   
  });
export default connect(mapStateToProps, mapDispatchToProps)(Login)

  
