import React, { Component } from "react";
// import { Route, Redirect } from 'react-router'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import axios from "axios";
import logo from "./ChoreQuestMenuLogo.png";
import DisplayCard from './displaycard.js';
import Guild from './guild.js';
import './MainPage.css';
import styles from './styles.css';
import money from './money.png';

export default class MainPage extends Component {
    state = {   
        isMenuOpened: false,
        isModalOpened: false,
        menuOption: "Guild",
        createChore: {
            chore:"",
            area: "",
            reward: 0
        },
        createReward: {
            description: "",
            cost: 0
        },
        createGuild: "",
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

    setMenu = (event) => {
        event.preventDefault();
        let menuOption = this.state.menuOption;
        menuOption = event.target.name;
        this.setState({menuOption: menuOption});
        this.setState({isMenuOpened: false});
    }

    openCreate = (event) => {
        event.preventDefault();
        let isModalOpened = !this.state.isModalOpened;
        this.setState({isModalOpened: isModalOpened});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    renderCards() {
        console.log(this.state.menuOption);
            switch(this.state.menuOption) {
                case 'Guild':
                    return <Guild guildmaster={this.props.user.username}/>
                case 'Quests':
                    return <DisplayCard value="Quests" />;
                case 'Encounters':
                    return <DisplayCard value="Encounters" />;
                case 'Bosses':
                    return <DisplayCard value="Bosses" />;
                case 'Shop':
                    return <DisplayCard value="Shop" />;
               default:
                return 'foo';
            }
    }

    createGuild = (event) => {
        event.preventDefault();
        axios.post('/api/createGuild', {guildname: this.state.createGuild, userId: this.props.user.userId})
        .then((result)=>{
            this.setState({isModalOpened: !this.state.isModalOpened});
        })
    }

    render(){
        console.log(this.props.user)
        return(
            <div>
                <div className={"modal " + (this.state.isModalOpened ? 'is-active': '')}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        {this.state.menuOption !== 'Shop' && this.state.menuOption !== 'Guild' ? 
                        <div className="columns is-mobile is-multiline is-vcentered createModal">
                            
                            <div className="column is-3">
                                <div className="type has-text-centered">
                                    <i className="fas fa-broom fa-3x imageType" > </i>
                                    <i className="fas fa-caret-down" > </i>
                                </div>
                            </div>
                            <div className="column is-5 has-text-centered">
                                <input onChange={this.handleChange} className="input" type="text" placeholder="Chore"/>
                            </div>
                            <div className="column is-4">
                                <input className="input" type="text" placeholder="Area" />
                            </div>
                            <div className="column is-2">
                                <img src={money} alt="money"/>
                            </div>
                            <div className="column is-3">
                                <input class="input" type="number" placeholder="Reward" />
                            </div>
                            <div className="column is-offset-4 is-3">
                                <button className="button submitButton">Create</button>
                            </div>
                        </div>
                        : ''}
                        {this.state.menuOption === 'Shop' ? 
                        <div className="columns is-mobile is-multiline is-vcentered createModal">
                            
                            <div className="column is-3">
                                <div className="type has-text-centered">
                                    <i className="fas fa-broom fa-3x imageType" > </i>
                                    <i className="fas fa-caret-down" > </i>
                                </div>
                            </div>
                            <div className="column is-5 has-text-centered">
                                <input className="input" type="text" placeholder="Chore"/>
                            </div>
                            <div className="column is-4">
                                <input className="input" type="text" placeholder="Area" />
                            </div>
                            <div className="column is-2">
                                <img src={money} alt="money"/>
                            </div>
                            <div className="column is-3">
                                <input class="input" type="number" placeholder="Reward" />
                            </div>
                            <div className="column is-offset-4 is-3">
                                <button className="button submitButton">Create</button>
                            </div>
                        </div>
                        : ''}
                        {this.state.menuOption === 'Guild' ? 
                        <div className="columns is-mobile is-multiline is-vcentered createModal">
                            
                            <div className="column is-3">
                                <div className="type has-text-centered">
                                    <i className="fas fa-broom fa-3x imageType" > </i>
                                    <i className="fas fa-caret-down" > </i>
                                </div>
                            </div>
                            <div className="column is-8 has-text-centered">
                                <input value={this.state.email} onChange={this.handleChange} className="input" type="text" name="createGuild" placeholder="Guild Name"/>
                            </div>
                            <div className="column is-offset-9 is-3">
                                <button onClick={this.createGuild}className="button submitButton">Create</button>
                            </div>
                        </div>
                        : ''}
                    </div>
                    <button onClick={this.openCreate} className="modal-close is-large" aria-label="close"></button>
               </div>
               <div className="columns is-mobile is-centered is-vcentered menu">
                    <div className="column is-one-fifth"> 
                    <OffCanvas isMenuOpened={this.state.isMenuOpened}>
                        <OffCanvasBody width={0} className='bodyClass' style={{fontSize: '30px'}}>
                            <a href="#" onClick={this.handleClick.bind(this)}><i className="fas fa-book fa-lg"></i></a> 
                        </OffCanvasBody>
                        
                    </OffCanvas>
                    </div>
                <div className="column">
                <figure className="image is-4by2">
                    <img src={logo} alt="chore quest logo"/>
                </figure>
                    
                </div>
                </div>
           
                <div className="columns is-mobile is-multiline is-centered mainPage">
                <OffCanvas  isMenuOpened={this.state.isMenuOpened}>
                <OffCanvasMenu  width={300} transitionDuration={300}  position={"left"} className="menuClass">
                        <ul>
                            {this.props.user.role === 'guildmaster' ? <li><a onClick={this.setMenu} name="Approvals">Approvals</a></li> : <div></div>}
                            <li><a onClick={this.setMenu} name="Notification"><i className="fas fa-exclamation"></i>Notifications</a></li>
                            <li><a onClick={this.setMenu} name="Quests"><i className="fab fa-wolf-pack-battalion"></i>Quests</a></li>
                            <li><a onClick={this.setMenu} name="Encounters">Encounters</a></li>
                            <li><a onClick={this.setMenu} name="Bosses">Bosses</a></li>
                            <li><a onClick={this.setMenu} name="Shop">Shop</a></li>
                            <li><a onClick={this.setMenu} name="Guild">Guild</a></li>
                            <li><a href="#" onClick={this.handleClick.bind(this)}><i className="fas fa-times-circle"></i></a></li>
                        </ul>
                        </OffCanvasMenu>
                    </OffCanvas>
                    <div className="columns is-mobile is-centered is-multiline">
                        <div className="column is-10 is-offset-1"> 
                            {this.props.guild.guildname ? <div></div> : <button onClick={this.openCreate} className="button guildmasterBtn"><i className="fas fa-plus"></i>Create Guild</button> }
                            {this.props.user.role === 'guildmaster' && this.state.menuOption != 'Approvals'? <button onClick={this.openCreate} className="button guildmasterBtn"><i className="fas fa-plus"></i>Create {this.state.menuOption}</button> : <div></div>}
                            {this.renderCards()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}