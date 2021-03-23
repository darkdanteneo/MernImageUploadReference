import React, { Component } from 'react';
import axios from 'axios';
import './teams-list.css'
import Image from './Image';
    
export default class ImagesList extends Component{
    constructor(props){
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state = { 
            images: [],
            filter: [],
            search: ''
        };
    }
    filter = () =>{
        
        
        console.log(this.state.filter);
    }
    recievedData(){
        axios.get('http://localhost:5000/')
        .then(response => {
            let images = response.data;
            images.sort((a,b) => {
                let x = a.filename, 
                    y = b.filename;
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            });;
            this.setState({images:images, postData:images.map(currentImage => <Image key={currentImage._id} image={currentImage} />)});
            
        })
        .catch((error) => {console.log(error);})
    }
    componentDidMount(){
        this.recievedData()
    }
    
    onChangeSearch = (e) =>{
        this.setState({search:e.target.value,
                        postData: this.state.images.filter((image) => { return image.name.indexOf(e.target.value) !== -1})
                                                .map(currentImage => <Image key={currentImage._id} image={currentImage} />)

                    })
    }
    ImagesList() {
        console.log(this.state.teams);
        return this.state.teams.map(currentTeam => {
              return <Image key={currentTeam._id} image={currentTeam} />;
          });
    }
    render(){
        return(
            <div>
                <input type="text" className="form-control" value={this.state.search} onChange={this.onChangeSearch}/>
                <h3> Logged Images</h3>
                    {this.state.postData}
            </div>
        )
    }
}