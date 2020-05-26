import React,{Component  } from "react";
import axios from "axios";

export default class Weather extends Component {

    constructor(){
    super();
    this.state={
        temp:" not yet got.",
    };

    }
    handleButtonClick=()=>{
        axios.get('/getweather').then(response =>
        {
            this.setState(
                {
                    temp:response.data.q,
                }

            )
            console.log(response.data);
        }

        );
    };


    render(){
    return (
      <div >
          <button onClick={this.handleButtonClick}>click here</button>
          <h2>temperature is :{this.state.temp}</h2>
        
      </div>
    );
    }
  }
  


