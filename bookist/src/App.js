import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import Booklist from "./components/Booklist.js"
import Shelf from "./components/Shelf.js"
import data from "./data.js"

class App extends Component {
  constructor(){
    super()
    this.state = {
      shelf: [],
      data: data
    }
    this.addToShelf =this.addToShelf.bind(this)
  }

  addToShelf(i) {
    let arr = this.state.shelf
    arr.push(i)
    this.setState({shelf: arr})
  }

  search() {
    
  }

  render() {
   return (
      <div className="App">
        <header><h1>bookist</h1></header>
        <div className="everythingButTheHeader">
          <Booklist data={this.state.data} add={this.addToShelf}/>
          <Shelf shelf={this.state.shelf}/>
        </div>
      </div>
    );
  } 
}
export default App;
