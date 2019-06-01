import React, { Component, Fragment} from 'react';
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

    handleChange = (e) => {
        const searchValue = e.target.placeholder === "Search" ? e.target.value : this.state.search.value
        const paramater = e.target.placeholder === "Paramater" ? e.target.value : this.state.search.paramater
        this.setState({
            search: { 
                value: searchValue,
                paramater: paramater
            }
        })
    }

    handleSearch = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:4000/API/reports/${this.state.search.paramater}/${this.state.search.value}`, 
            {method: 'get', headers: {"Content-Type": "application/json"}})
        const json = await res.json()
        this.props.onSearch(json)
    }

    render() {
        return (
        <Fragment>
            <form style = {{display: 'flex', width: '50%'}} onSubmit = {this.handleSearch}>
                <button className = 'btn btn-primary'><FaSearch/></button>
                <input className = 'form-control' style = {{marginLeft: '1em'}} type ='text' placeholder = 'Search' onChange = {this.handleChange}/>
                <div className = 'search-param-container' >
                    <input list = 'search-params' className = 'form-control' type ='text' placeholder = 'Paramater' onChange = {this.handleChange}/>
                    <datalist id = 'search-params'>
                        <option value = 'id'/>                    
                        <option value = 'Date'/>
                        <option value = 'Title'/>
                        <option value = 'Author'/>
                        <option value = 'Severity'/>
                    </datalist>
                </div>
            </form>
        </Fragment>
        )
    }
}
