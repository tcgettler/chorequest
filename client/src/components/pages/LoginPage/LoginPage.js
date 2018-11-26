import React, { Component } from "react";
// import { Route, Redirect } from 'react-router'
import axios from "axios";
import "./LoginPage.css";
import 'bulma/css/bulma.css';
import logo from "./ChoreQuestLogo.png";

class LoginPage extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {username: this.state.username, password: this.state.password};
        console.log(login);
        axios.post('/api/login', {content: login})
        .then((result) => {
            console.log(result)
            return(
                console.log('it worked')
                // <Redirect push to="/home" />
            )
        });
    }

    render(){
        return (
            <div className="columns is-mobile is-multiline is-centered is-vcentered loginPage">
                <div className="column is-four-fifths">
                    <div className="container">
                        <img src={logo} />
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input onChange={this.handleChange} className="input" name="username" type="text" placeholder="Text input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input onChange={this.handleChange} className="input" name="password" type="text" placeholder="Text input"/>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-two-thirds">
                               <div className="field">
                                    <label className="checkbox has-text-white">
                                        <input type="checkbox"/>
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="column">
                                <div className="control level-right">
                                    <button onClick={this.handleSubmit} className="button is-link">Submit</button>
                                </div>
                            </div>
                        </div>
                            <a href="/signup" >Signup</a>
                    </div>
                </div>
            </div>
        )   
    };
};

export default LoginPage;
