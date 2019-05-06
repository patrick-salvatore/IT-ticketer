import React, { Component } from 'react';
import {FaSearch} from 'react-icons/fa';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    clickHandler = () => {}

    render() {
        return (
        <div>
            <form>
                <button className = 'btn btn-primary' type ='submit'><FaSearch/></button>
                <input className = 'form-control' style= {{display:'inline', width: '30%', margin: '0 1em'}} type ='text'></input>
            </form>
        </div>
        )
    }
}
