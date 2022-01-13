import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    changeCounter(){
        this.setState({
            count: this.state.count+1
        },
        () => console.log('call back value - ', this.state.count)
        )

// this.setState(prevState => ({
//     count: prevState.count+1
// }))

        console.log(this.state.count)
    }

    incrementFive(){
        this.changeCounter()
        this.changeCounter()
        this.changeCounter()
        this.changeCounter()
        this.changeCounter()
    }
    
    render() {
        return (
            <div>
                <h1>counter - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
