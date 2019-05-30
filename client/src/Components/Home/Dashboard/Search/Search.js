import React, { Component } from 'react';
import {FaSearch} from 'react-icons/fa';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: {
                value: '',
                paramater: ''
            }
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target.placeholder === "Search" ? e.target.value : this.state.search.value
        const paramater = e.target.placeholder === "Paramater" ? e.target.value : this.state.search.paramater
        this.setState({
            search: { 
                value: searchValue,
                paramater: paramater
            }
        }, _ => {this.props.onSearch(this.state.search)}) 
    }


    render() {
        return (
        <div>
            <form onSubmit = {this.handleSubmit}>
                <button className = 'btn btn-primary'><FaSearch/></button>
                <input className = 'form-control' style= {{display:'inline', width: '30%', marginLeft: '1em'}} type ='text' placeholder = 'Search' onChange = {this.handleSubmit}/>
                <div className = 'search-param-container' style = {{display: 'inline-block'}}>
                    <input list = 'search-params' className = 'form-control' type ='text' placeholder = 'Paramater' onChange = {this.handleSubmit}/>
                    <datalist id = 'search-params'>
                        <option value = 'ID'/>                    
                        <option value = 'Date'/>
                        <option value = 'Title'/>
                        <option value = 'Author'/>
                        <option value = 'Severity'/>
                    </datalist>
                </div>
            </form>
        </div>
        )
    }
}
