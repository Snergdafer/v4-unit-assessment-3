
import React, {Component} from "react"
import "../App.css"

class Booklist extends Component {
    constructor() {
        super()
        this.state = {
            booksArray: []
        }
    }

    
    render() {
        
    
        return(
            <div className="allDaBooks">
                {this.props.data.map(function(elem, i) {
                    return(
                        <li key={i} className="daBook">
                            <img src={elem.img} onClick={() => this.props.add(elem.title)}/>
                            <p>{`${elem.title}, ${elem.author}`}</p>
                        </li>)
                })
                }
            </div>
        )
    }
}

export default Booklist