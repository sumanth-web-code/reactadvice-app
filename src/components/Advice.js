import React, { Component } from 'react';
import axios from 'axios';

 class Advice extends Component {
     constructor(props){
         super(props);
         this.state={
             advice:''
         }
     }

    componentDidMount(){
        this.fetchAdvice();
    }


    fetchAdvice=()=>{
       axios.get(`https://api.adviceslip.com/advice`)
       .then((response)=>{
           const {advice} = response.data.slip;
            this.setState({ advice: advice});
       })
       .catch((error)=>{
            console.log(error);
       })
    }

  render() {
      const { advice }=this.state;
    return (
      <div className="app">
          <div className="card">
              <h2 className="heading">
                {advice}
              </h2>
              <button className="button" onClick={this.fetchAdvice}><span>Give me advice!</span></button>
          </div>
        </div>
    )
  }
}

export default Advice