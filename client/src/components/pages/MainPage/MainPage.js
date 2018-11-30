import React, { Component } from "react";
// import { Route, Redirect } from 'react-router'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import axios from "axios";
import logo from "./ChoreQuestMenuLogo.png";
import './MainPage.css';
import styles from './styles.css';

export default class MainPage extends Component {
    state = {   
        isMenuOpened: false
    }

    componentWillMount() {
        // sets the initial state
        this.setState({
          isMenuOpened: false
        })
    }

    handleClick() {
        // toggles the menu opened state
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }
    
    render(){
        return(
            <div>
               <div className="columns is-mobile is-centered is-vcentered menu">
                    <div className="column is-one-fifth"> 
                    <OffCanvas isMenuOpened={this.state.isMenuOpened}>
                        <OffCanvasBody width={0} className='bodyClass' style={{fontSize: '30px'}}>
                            <a href="#" onClick={this.handleClick.bind(this)}><i class="fas fa-book fa-lg"></i></a> 
                        </OffCanvasBody>
                        
                    </OffCanvas>
                    </div>
                <div className="column">
                <figure class="image is-4by2">
                    <img src={logo} alt="chore quest logo"/>
                </figure>
                    
                </div>
                </div>
           
                <div className="columns is-mobile is-multiline is-centered mainPage">
                <OffCanvas  isMenuOpened={this.state.isMenuOpened}>
                <OffCanvasMenu  width={300} transitionDuration={300}  position={"left"} className="menuClass">
                        <ul>
                            <li><i class="fas fa-exclamation"></i>   Notifications</li>
                            <li><i class="fab fa-wolf-pack-battalion"></i>   Quests</li>
                            <li>Encounters</li>
                            <li>Bosses</li>
                            <li>Guild</li>
                            <li><a href="#" onClick={this.handleClick.bind(this)}><i class="fas fa-times-circle"></i></a></li>
                        </ul>
                        </OffCanvasMenu>
                    </OffCanvas>
                </div>
            </div>
        )
    }
}