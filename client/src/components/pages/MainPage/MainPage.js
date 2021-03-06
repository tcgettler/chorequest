import React, { Component } from "react";
// import { Route, Redirect } from 'react-router'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import axios from "axios";
import logo from "./ChoreQuestMenuLogo.png";
import DisplayCard from './displaycard.js';
import Guild from './guild.js';
import './MainPage.css';
import './styles.css';
import money from './money.png';

export default class MainPage extends Component {
    state = {   
        isMenuOpened: false,
        isModalOpened: false,
        menuOption: "Guild",
        chore:"",
        area: "",
        reward: 0,
        itemName: "",
        cost: 0,
        createGuild: "",
        memberName: ""
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

    addMembers = (input) => {
        console.log(input);
        console.log('click');
    }

    renderCards() {
        console.log(this.state.menuOption);
            switch(this.state.menuOption) {
                case 'Guild':
                    return <Guild onChange={this.handleChange} memberState={this.state.memberName} addMembers={this.addMembers} guildmaster={this.props.user.username}/>
                case 'Quests':
                    return (<div>{this.props.guild.quests.map((quest, index) => (<DisplayCard key={index} name={quest.questName} area={quest.area} reward={quest.reward} />))}</div>);
                case 'Encounters':
                return (<div>{this.props.user.encounters.map((encounter, index) => (<DisplayCard key={index} name={encounter.encounterName} area={encounter.area} reward={encounter.reward} />))}</div>);
                case 'Bosses':
                return (<div>{this.props.user.bosses.map((boss, index) => (<DisplayCard key={index} name={boss.bossName} area={boss.area} reward={boss.reward} />))}</div>);
                case 'Shop':
                return (<div>{this.props.guild.store.map((store, index) => (<DisplayCard key={index} name={store.itemName} storebutton="true" reward={store.cost} />))}</div>);
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

    createShopItem = (event) => {
        event.preventDefault();
        axios.post('/api/createGuild', {itemName: this.state.store.createItem, cost: this.state.store.cost})
        .then((results)=> {
            console.log(results);
            this.setState({isMOdalOpened: !this.state.isModalOpened});
        }).catch((error)=>{

        });
    }

    createQuest = (event) => {
        event.preventDefault();
        console.log(this.state.createChore)
        console.log(`/api/${this.state.menuOption}`)
        axios.post( `/api/${this.state.menuOption}`, {questName: this.state.chore, area: this.state.area, reward: this.state.reward, guildId: this.props.guild.guildId})
        .then((results) =>{
            console.log(results);
        }).catch((error)=>{

        }); 
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
                                <input onChange={this.handleChange} value={this.state.chore} name="chore" className="input" type="text" placeholder="Chore"/>
                            </div>
                            <div className="column is-4">
                                <input onChange={this.handleChange} className="input" value={this.state.area} name="area" type="text" placeholder="Area" />
                            </div>
                            <div className="column is-2">
                                <img src={money} alt="money"/>
                            </div>
                            <div className="column is-3">
                                <input onChange={this.handleChange} class="input" value={this.state.reward} name="reward" type="number" placeholder="Reward" />
                            </div>
                            <div className="column is-offset-4 is-3">
                                <button onClick={this.createQuest} className="button submitButton">Create</button>
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
                            <div className="column is-8 has-text-centered">
                                <input className="input" type="text" name="createStore.itemName" placeholder="Item"/>
                            </div>
                            <div className="column is-2">
                                <img src={money} alt="Cost"/>
                            </div>
                            <div className="column is-3">
                                <input class="input" type="number" name="createStore.cost" placeholder="Price" />
                            </div>
                            <div className="column is-offset-4 is-3">
                                <button onClick={this.createShopItem} className="button submitButton">Create</button>
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
                            {this.props.guild.guildname ? '' : <button onClick={this.openCreate} className="button guildmasterBtn"><i className="fas fa-plus"></i>Create Guild</button> }
                            {this.props.user.role === 'guildmaster' && this.state.menuOption !== 'Approvals' && this.state.menuOption !== 'Guild'? <button onClick={this.openCreate} className="button guildmasterBtn"><i className="fas fa-plus"></i>Create {this.state.menuOption}</button> : <div></div>}
                            {this.renderCards()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}