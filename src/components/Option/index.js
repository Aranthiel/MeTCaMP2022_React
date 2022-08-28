import './styles.css';
//import React, { Component } from "react";

function Option ({text}){
    return (
        <div className="radio">
          <label>
            <input type="radio" value="{text}" />
            
          {text}

          </label>

        </div>
    )
}

export default Option;

//<input
//              type="radio"
//              value="Male"
//              checked={this.state.selectedOption === "Male"}
//              onChange={this.onValueChange}
//            />