import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import  RoomList  from './components/RoomList.js';      

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
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
       
      
      </div>
      
      
    );
  }
}

export default App;
