import { connect } from 'react-redux';
import actions from 'store/app/actions';
import App from './App';

const mapStateToProps = state => ({
    isLoggedIn: state.app.isLoggedIn,
    user: state.app.user,
    guild: state.app.guild,
});

const mapDispatchToProps = dispatch => ({
    handleChange: () => dispatch(actions.setUsername())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);