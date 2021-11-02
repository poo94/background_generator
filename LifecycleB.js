import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             pname:'vishwas'
        }
        console.log('LifecycleB constructer')

    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerived state from props')
        return null
    }
    
    componentDidMount(){
        console.log('component did mount B')
    }
    shouldComponentUpdate(prevprops,prevstate){
        console.log('LifeCycleB should component update')
         return true
        }
        
        getSnapshotBeforeUpdate(){
            console.log('getsnapsot before update B')
            return null
        }
        componentDidUpdate(){
            console.log('component did update B')
        }
        
    
    render() {
        
            console.log('render method B')
            return <div>LifecycleB</div>
        
       
    }
}

export default LifecycleB
