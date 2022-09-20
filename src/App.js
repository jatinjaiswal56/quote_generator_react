import logo from "./logo.svg";
import React from "react";
import axios from "axios";
import "./App.css";
//commit
class App extends React.Component {
  state = {
    advice: "",


  };
  componentDidMount() {
    //this.fetchadvice();
    this.setState({advice:"HOLLA USER"})
  }
  fetchadvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const {advice}=response.data.slip;
        console.log(advice);
        this.setState({advice:advice})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate() {}
 componentWillUnmount() {}

  render() {
    return(
      <div className="app">
      <div className="card">
      <h1 className="heading">{this.state.advice}</h1>
      <button className="button" onClick={this.fetchadvice}><span>GIVE ME ADVICE!</span></button>
      </div>
    </div>
    ) 
   
  }
}

export default App;
