import React from 'react';
import {envChoices} from './choices';
import {ChoiceSelect} from './choiceSelect';


// map through the choices array
const choiceItem = envChoices.map((choice) =>
    <div className="choice" key={choice.ID}>
        <h3>{choice.name}</h3>
        <p className="subtitle">{choice.subtitle}</p>
        {
            choice.children.map((child) => 
                <div key={child.ID} id={child.ID}>
                    <h4>{child.name}</h4>
                    <ChoiceSelect choiceName={child.ID} choiceValue={child.value}/>
                    {/* pass some data */}
                </div>
            )
        }
    </div>
);


export class Choice extends React.Component {
    render() {
        return (
               <div>{choiceItem}</div>
        )
    }
}