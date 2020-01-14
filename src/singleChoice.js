import React from 'react';
import {envChoices} from './choices';



const choiceItem = envChoices.map((choice) =>
    <div className="choice" key={choice.key}>
        <h3>{choice.name}</h3>
        <p className="subtitle">{choice.subtitle}</p>
        <input type="checkbox" name="name" />
        {
            choice.children.map((child) => 
                <div key={child.key}>{child.name}</div>
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