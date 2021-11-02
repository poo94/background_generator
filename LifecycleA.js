import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             pname:'vishwas'
        }
        console.log('LifecycleA constructer')

    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerived state from props')
        return null
    }
    
    componentDidMount(){
        console.log('component did mount A')
    }
    
shouldComponentUpdate(prevprops,prevstate){
console.log('LifeCycleA should component update')
 return true
}

getSnapshotBeforeUpdate(){
  
    console.log('getsnapsot before update A')
    return null;
}
componentDidUpdate(){
    console.log('component did update A')
}
handleChange =()=>{
    this.setState({
        pname:'code change'
    })
}


    render() {
        
            console.log('render method')
            return (<div>
                <LifecycleB/>
                <div>LifecycleA</div>
                <button onClick={this.handleChange}>change state</button>
            </div>)
        
       
    }
}

export default LifecycleA
