import React, { Component } from 'react';

class MessageList extends Component{
	constructor(props){
		super(props);
        this.state = {
        	messages:[],
        	newMessage: ""
        }


		this.messagesRef = this.props.firebase.database().ref('Messages');
	}
	componentDidMount(){
		this.messagesRef.on('child_added', snapshot => {
			
			const message = snapshot.val();
			console.log(snapshot);
			message.key = snapshot.key;
			this.setState({ messages: this.state.messages.concat( message)})
		});
	}
	createMessage(e){
		e.preventDefault()
		 if (!this.props.activeRoom || !this.state.newMessage) { return }
		
		this.messagesRef.push({
			
		    username: "<USERNAME HERE>",
		    content: this.state.newMessage,
		    sentAt: Date.now(),
		    roomId: this.props.activeRoom.key

		})
		
		this.setState({ newMessage: '' });
	}

	handleChange(e) {
    this.setState({newMessage: e.target.value });
  }


  render(){
	return(
		<section>
		 <div>
		      {this.state.messages.map(message =>
		           <li key={message.key}> 
		            <div>
		              {message.content}
		            </div>  
                   </li>
		       )}
		</div>
		<form  onSubmit={ this.createMessage.bind(this) }>
          <input type="text" value={ this.state.newMessage } onChange={ this.handleChange.bind(this) } placeholder="Your Message"  />
          <input type="submit" />
        </form>
        </section>
		)
   }
  }

export default MessageList;