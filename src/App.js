import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

const urlAPI = "http://localhost:35000/"

class App extends React.Component {

  state = {
    productName : "",
    productImage : ""
  }

  upload = ()=>{
    var fd = new FormData()
    fd.append("aneh", this.state.productImage)
    fd.append("name",this.state.productName)
    
    Axios.post(urlAPI+"uploadimage", fd)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  
  render () {
    console.log(this.state);
    
    return (
      <div className="container mt-5">
        Input product name : 
        <br></br>
        <input autoFocus type="text" placeholder="product_name" onChange={e=>this.setState({productName:e.target.value})} />
        <br></br>
        <br></br>
        Upload product picture :
        <br></br>
        <input type="file" ref="inputFile" onChange={e=>this.setState({productImage:e.target.files[0]})} />
        <br></br>
        <hr></hr>
        <input type="button" value="Submit" className="btn btn-secondary" onClick={()=>{this.upload()}} />
      </div>
    )
  }
}

export default App;
