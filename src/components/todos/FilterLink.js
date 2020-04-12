import { connect } from "react-redux";
import { setVisibilityFilter } from "../../redux/actions";
import Link from "./Link";
///mapping state to link components state.
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibiltyFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
