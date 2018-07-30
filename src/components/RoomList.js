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

	createRoom(e){
		e.preventDefault()
		
		this.roomsRef.push({
			name: this.state.newRoom
		})
		this.setState({ newRoom: '' });
	}
	handleChange(e) {
        e.preventDefault()
        
        this.setState({newRoom: e.target.value });


    }

	render(){
		return(
		<section>	
			<div>
		      {this.state.rooms.map(room =>
		           <li key={room.key} > 
		           <button onClick={ () => this.props.setRoom(room) }>{ room.name }</button>
                   </li>
		       )}
		  	</div>
		  	<form onSubmit ={ this.createRoom.bind(this)}>
		  	           
                <input type ="text" value={this.state.newRoom} onChange={ this.handleChange.bind(this) } placeholder="Create room"/>
		  		<input type ="submit" />
		  	</form>
        </section>
		)

		}
	}
  


export default RoomList;