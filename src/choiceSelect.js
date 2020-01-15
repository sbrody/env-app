import React from 'react';

let currentScore = 0;
// abstract out the selection functionality
export class ChoiceSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
        this.value = '';
        this.handleChange = this.handleChange.bind(this);
    }

    

    handleChange(event) {
        this.setState({state: event.target.checked});
        console.log('This is the value' + event.target.checked + this.name);
        if (event.target.checked === true) {
            console.log('hello' + this.props.choiceName);
            console.log(this.props.choiceValue);
            currentScore = currentScore + this.props.choiceValue;  
            console.log(currentScore);
            this.setState({value: currentScore});
        }
    }

    

    render() {
        return (
            <div>
                <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
                {currentScore};
            </div>
            

        )
    }
}



