import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  costructor(){
    super()
    this.state = {
      dataList:['cowboys','indians','cops','robbers','yoda','luke'],
      dataStr:''

    }
  }
 
  handleChange(filter){
this.setState({dataStr:filter})
  }  
  
  render() {
 
    let dataToDisplay = this.state.dataList
     .filter((ele,ind) => {
   return ele.includes(this.state.datastr);
 })
 
 .map((ele,ind) => {
   return <h2 key={ind}>{ele}</h2>
  })
  
  return (
    <div className="App">
    <input onChange={e => this.handleChange(e.target.value)} type='text'/>
    {datStr}
    </div>
  );
 }
}
 
 export default App;




