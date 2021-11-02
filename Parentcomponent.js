import React, { Component} from 'react'
import Purecomp from './Purecomp'
import Regularcomponent from './Regularcomponent'


class Parentcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pname:'Pooja'
        }
    }
    componentDidMount(){
        setInterval(()=>{
          this.setState({
              pname:'Pooja'
          })
        },7000)
    }
    render() {
        console.log('Parent component render')
        return (
            <div>
                Parent component
                <Purecomp name={this.state.pname}/>
                <Regularcomponent name={this.state.pname}/>
            </div>
        )
    }
}

export default Parentcomponent
