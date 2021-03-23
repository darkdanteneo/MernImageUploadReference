import React, { Component } from 'react';
import axios from 'axios';
export default class AddImage extends Component{
    constructor(props){
        super(props);

        this.onChangeImageName = this.onChangeImageName.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            image_name: '',
            file:null
        }
    }
    onChangeImageName(e){
        this.setState({
            image_name: e.target.value
        });
    }
    fileSelectedHandler = e =>{

        this.setState({file: e.target.files[0]});
    }
    onSubmit(e){
        
        e.preventDefault();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        
        const fd = new FormData();
        fd.append('uploadImage', this.state.file);
        fd.append('name', this.state.image_name);
        axios.post('http://localhost:5000/upload', fd, config)
        .then(res=>{
           alert("The file is successfully uploaded");
           // window.location = '/';
        });
        //
    }
    render(){
        return(
            <div>
                <h3>Add New Image</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label type="text">Image Name:</label>
                        <input type="text" required className="form-control" value={this.state.image_name} onChange={this.onChangeImageName}/>
                        <input type="file" required className="form-control"  onChange={this.fileSelectedHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Image" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}