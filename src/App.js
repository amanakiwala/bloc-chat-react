import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import  RoomList  from './components/RoomList.js';
import  MessageList  from './components/MessageList.js';
import  User  from './components/User.js';      

var config = {
    apiKey: "AIzaSyAH4XTELIa9p2T_NTD7DUSWTOAnweJha14",
    authDomain: "bloc-chat-react-4d7ec.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-4d7ec.firebaseio.com",
    projectId: "bloc-chat-react-4d7ec",
    storageBucket: "bloc-chat-react-4d7ec.appspot.com",
    messagingSenderId: "4907941999"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        activeRoom : '',
        user:'',
        

      }
      
  }
  setRoom(room){
    this.setState({activeRoom: room});
    console.log(this.state.activeRoom.key)
  }

  setUser(user){
    this.setState({user: user});
    console.log(this.state.user.displayName)
  }

  
  
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setRoom={this.setRoom.bind(this)} user={this.state.user}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} user={this.state.user} />
        <User firebase={ firebase } user={this.state.user} setUser={this.setUser.bind(this)}
          />
      
      </div>
      
      
    );
  }
}

export default App;
