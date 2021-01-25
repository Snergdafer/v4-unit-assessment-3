import React, {Component} from "react"
import "../App.css"

class Shelf extends Component {

    

    render() {
        return(
            <div className="daShelf">
                <h2>Your Shelf</h2>
                <button>clear shelf</button>
                <ul>
                    {this.props.shelf.map(function(elem, i) {
                        return <li key={i}>{elem}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Shelf