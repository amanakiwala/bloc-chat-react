import React, { Component } from 'react';

class RoomList extends Component {
   constructor(props) {
   	super(props);
	
	this.state = {
		rooms: [],
		newRoom: ""
	};
	
	this.roomsRef = this.props.firebase.database().ref('rooms');
  }
	
	componentDidMount(){
		this.roomsRef.on('child_added', snapshot => {
			
			const room = snapshot.val();
			console.log(snapshot);
			room.key = snapshot.key;
			this.setState({ rooms: this.state.rooms.concat( room)})
		});
	}

	createRoom(newRoom){
		this.roomsRef.push({
			name: newRoom
		})
		this.setState({ newRoom: '' });
	}
	handleChange(event) {
        this.setState({newRoom: event.target.value });
    }

	render(){
		return(
		<section>	
			<div>
		      {this.state.rooms.map(room =>
		           <li key={room.key}>{ room.name }</li> 
		       )}
		  	</div>
		  	<form onSubmit ={(e) => {e.preventDefault();this.createRoom(this.state.newRoom)}} >
		  		<input type ="text" onChange={ this.handleChange.bind(this) }/>
		  		<input type ="submit" />
		  	</form>
        </section>
		)

		}
	}
  


export default RoomList;