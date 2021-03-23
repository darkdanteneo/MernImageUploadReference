import React, { Component } from 'react'
import './image.css'
export default class Image extends Component {
    render() {
        let date = new Date(parseInt(this.props.image.filename.substring(0, 13)));
        let printdate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        
        return (
            <div className="image-box">
                <img src={`http://localhost:5000/${this.props.image.filename}`} alt={this.props.image.filename}/>
                <p className="name">{this.props.image.name}</p>
                <p className="date">{printdate}</p>
            </div>
        )
    }
}
