import React from 'react';


// abstract out the selection functionality
let total = 0;
export class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: this.props.score,
            test: 5,
            selected: false   
        };
        
       this.handleChange = this.handleChange.bind(this);
    }

    
    
    handleChange() {
        total += this.state.score;
        this.setState(state => ({
            selected: !state.selected,
            score: state.score,
            total: state.total + state.score
        }));
        
        console.log('Selected: ' + this.state.selected);
        console.log('score is ' + this.state.score);
        console.log('total is ' + total + this.state.total);

    }
    //     this.setState({
    //         checked: event.target.checked,
    //         });
    //         // total += this.state.value;
            
    //     console.log('value: ' + this.state.value);
    //     // console.log('output: ' + total);
    // }

    
render() {
        
        return (
            
        )
        
    }
}





