import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import MainPage from '../pages/MainPage/MainPage';
import {SET_IS_LOGGED_IN} from "../../store/app/actions.js";
import '../../styles/global.css';
import 'bulma/css/bulma.css';
import money from "../pages/MainPage/money.png";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="columns">
            <Route exact path='/' render={(props) => <LoginPage bindActionCreators={bindActionCreators} />} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/mainpage'  render={(props) => <MainPage  user={this.props.user} guild={this.props.guild} />} />
            <footer class="footer">
              <div class="content has-text-right">
                  <img src={money} alt="money"/>
                    100G
              </div>
          </footer>
          </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.app.user,
      guild: state.app.guild 
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({SET_IS_LOGGED_IN}, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(App);