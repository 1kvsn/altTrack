import React, { Component } from 'react'
import axios from 'axios';


 class Organization extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }
  
  onChangeHandler= (e) =>{
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:8000/api/v1/users/org", data, { 
       // receive two    parameter endpoint url ,form data
   })
   .then(res => { // then print response status
    console.log(res.statusText)
  })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onClickHandler} encType="multipart/form-data" className="ui form form_create">
          <div className="five wide field">
            <label>Create Organization</label>
            <input type="text"/>
          </div>
          <div className="five wide field">
            <label>upload image</label>
            <input name="file" onChange={this.onChangeHandler}  type="file"/>
          </div>
          <button  type="submit" className="ui button">Create</button>
        </form>
      </div>
    )
  }
}

export default Organization;