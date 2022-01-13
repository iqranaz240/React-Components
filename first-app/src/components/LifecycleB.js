import React, { Component } from 'react'

class LifecycleB extends Component {
constructor(props) {
    super(props)

    this.state = {
         name: 'Iqra'
    }
    console.log('LifecycleB Constructor')
}

static getDerivedStateFromProps(props, state){
    console.log('LifecycleB getDerivedFromProps')
    return null
}

componentDidMount(){
    console.log('LifecycleB componentDidMount')
}

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
