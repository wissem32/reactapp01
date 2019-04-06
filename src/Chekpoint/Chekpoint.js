import React ,{ Component } from 'react';
import '../App.css';
import '../index.css';
//import lion from './lion.jpg' ;
class Chekpoint extends Component {
    render() {
        return (
            <div className="checkpoint">
           <center> <img src={this.props.logo} className="image"/>
            <p><i>nom: {this.props.name}</i></p> 
            <p>seconde: {this.props.secondename}</p>
            </center>
            </div>
        );
    }
}
export default Chekpoint;