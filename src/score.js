import React from 'react';
import {ChoiceSelect} from './choiceSelect';



export class Score extends React.Component {
    
    render() {
        return (
            <div className="score">
                <h3>Current score</h3>
                <div className="score-number">0</div>
                {ChoiceSelect.currentScore}
            </div>
        ) 

    }
}