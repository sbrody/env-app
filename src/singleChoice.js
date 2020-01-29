import React from 'react';
import {envChoices} from './choices';
// import {ChoiceSelect} from './choiceSelect';
// import {Score} from './score';
// import {score} from './choiceSelect';


export class ChoiceSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            value: this.props.value,
            output: this.props.output
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            checked: event.target.checked,
            value: event.target.value,
            output: this.state.output + event.target.value
            });
        console.log('value: ' + this.state.value);
        console.log('output: ' + this.state.output);
    }

    render() {
        return (
            // map through the choices array
            <div>
            {envChoices.map((choice) =>
                <div className="choice" key={choice.ID}>
                    <h3>{choice.name}</h3>
                    <p className="subtitle">{choice.subtitle}</p>
                    {
                        choice.children.map((child) => 
                            <div key={child.ID} id={child.ID}>
                                <h4>{child.name}</h4>
                                <input type="checkbox" value={this.state.value} onChange={this.handleChange} output={this.state.output} />
                                {/* pass some data */}
                            </div>
                        )           
                    }
                </div>
            )}
            <div className="score">Current score: </div>
            </div>
        )
    }
}