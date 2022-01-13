import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn :true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome</div>

        // return(
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Iqra</div> : 
        //     <div>Welcome Guest</div>
        // )

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Iqra</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return(
        //     <div>
        //         <div>
        //         Welcome Iqra
        //     </div>
        //     <div>Welcome Guest</div>
        //     </div>
        // ) (
            
    }
}

export default UserGreet
