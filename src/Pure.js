import React, { Component } from 'react';

class Pure extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    
    render() { 
        console.log('pure');
        return (
            <div>
                this is pure
            </div>
        )
  }
}

export default Pure;