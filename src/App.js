import React from 'react';


// import logo from './logo.svg';
import './App.css';
import {envChoices} from './choices';


function Checkbox(props) {
    
    return (
        <div>
            <input 
                type="checkbox" 
                defaultChecked={props.defaultChecked}
                onClick={props.onClick} 
                
                
            />
            {props.score} 
                   
        </div>
    )
}


let total = 0;

export class App extends React.Component {

    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            score: 0,
            total: 0,
            selected: false  
        };
    }   
    
    handleClick(e, f) {
        let choice = e;
        let selected = f;
        // this.props({
        //     defaultChecked: 23
        // })
        console.log(this.props.selected)
        console.log(f);
        console.log('Selected status: ' + selected);
        console.log('State: ' + this.state.score);
        // if the checkbox is checked add to the total
        if (selected === true) {
            total += choice;
            this.setState({       
                score: choice,
                total: total,
                // selected: false
            }); 
        }
        else {
        // if the checkbox is not checked remove from the total
            total -= choice;
            this.setState({       
                score: choice,
                total: total,
                // selected: true
            });
        }
        
        
        
        console.log('New state ' + this.state.selected);
        }
    
 

    render() {
        
        return (
            // map through the choices array
            <div>
            {envChoices.map((choice) =>
                <div className="choice" key={choice.ID}>
                    <h3>{choice.name}</h3>
                    <h5 className="subtitle">{choice.subtitle}</h5>
                    <div className="description">{choice.description}</div>
                    {
                        choice.children.map((child) => 
                            <div key={child.ID} id={child.ID}>
                                <h4>{child.name}</h4>
                                <h5>{child.subtitle}</h5>
                                <Checkbox 
                                    score={child.value} 
                                    // selected={!this.state.selected}   
                                    onClick={(event) => {
                                        // on click pass the value of the option and its checked status                                     
                                        this.handleClick(child.value, event.target.checked);    
                                    }} 
                                />
                                {this.defaultChecked}
                            </div>
                        )           
                    }
                </div>
            )}
            Total: {this.state.total}
            </div>
        )
    }

}