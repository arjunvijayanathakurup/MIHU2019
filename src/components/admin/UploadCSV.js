import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";
import "./style2.css";

// const 

export default class UploadCSV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',data: ''};
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
    handleChange(e) {
        this.setState({value: e.target.value});
        // console.log(this.state);
    }

    handleForce = data => {
        this.setState({data: data});
        // console.log(this.state);
    };

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        var name = this.state.value;
        var data = this.state.data;
        var model = {
            col: data[0].toString(),
            data: data.slice(1,-1)
        }
        console.log(model.col);
        console.log(model.data);
    }

      render(){
        return (
            <div className="container">
                <form className="form-horizontal">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <CSVReader
                    cssClass="react-csv-input"
                    label="Select CSV File"
                    onFileLoaded={this.handleForce}
                    />
                </form>
                <button type="button" onClick={this.onSubmit} className="btn">Submit</button>

            </div>
            
        );
      }
}
    