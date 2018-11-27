import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import "../../../styles/global.css";
import "./SignupPage.css"
import 'bulma/css/bulma.css'
import { fromByteArray } from "ipaddr.js";

class SignupPage extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post('/api/newUser', {content: this.state})
        .then((result) => {
            return(
                 this.props.history.push('/') 
            )
        });
    }
    render(){
        return (
            <div className="columns is-mobile is-multiline is-centered is-vcentered loginPage">
                <div className="column is-four-fifths is-offset-1">
                    <div className="container">
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input value={this.state.username} onChange={this.handleChange} name="username" className="input" type="text" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input value={this.state.email} onChange={this.handleChange} name="email" className="input" type="text" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input value={this.state.password} onChange={this.handleChange} name="password" className="input" type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Confirm Password</label>
                            <div className="control">
                                <input value={this.state.confirmPassword} onChange={this.handleChange} name = "confirmPassword" className="input" type="password" placeholder="Confirm Password"/>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-offset-two-thirds">
                                <div className="control level-right">
                                    <button onClick={this.handleSubmit} className="button is-link">Submit</button>
                                </div>
                            </div>
                        </div>
                        <a href="/" >Sign-in</a>
                    </div>
                </div>
            </div>
        )   
    };
};

export default withRouter(SignupPage);
