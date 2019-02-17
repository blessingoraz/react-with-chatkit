import React, { Component } from 'react'
import ChatKit from '@pusher/chatkit';

import config from './config';

class App extends Component {
    componentDidMount() {
        const chatManager = new ChatKit.ChatManager({
            instanceLocator: config.instanceLocator,
            userId: 'blessingoraz',
            tokenProvider: new ChatKit.TokenProvider({
                url: config.tokenURL
            })
        });

        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: 28282889,
                hooks: {
                    onNewMessage: message => {
                        console.log('message herr', message.text);
                    }
                }
            })
        })
    }
    
  render() {
    return (
      <div>
        Hello miss
      </div>
    )
  }
}

export default App;
