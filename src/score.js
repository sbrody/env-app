import React from 'react';

let currentScore = 0;
export class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
        
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.setState({state: event.target.checked});
        console.log('This is the value' + this.props.choiceValue);
        if (event.target.checked === true) {
            currentScore = currentScore + this.props.choiceValue;   
        }
    }

    render() {
        return (
            <div className="score">
                <h3>Current score</h3>
                <div className="score-number">{currentScore}</div>
                
            </div>
        ) 

    }
}