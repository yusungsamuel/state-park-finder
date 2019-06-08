import React, { Component } from "react"
import API from "../utils/API"
import "./style.css"

export default class SearchForm extends Component {
    state = {
        searchValue: "",
        searchResult: null
    }

    handleInputChange = (event)=>{
        event.preventDefault();
        const value = event.target.value
        this.setState(
            {searchValue: value}
        )
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.SearchByName(this.state.searchValue)
        .then(res =>{
            this.setState({
                searchResult: res.data.data
            })
            this.props.helper(this.state.searchResult)
        })
    }

    render() {
        return(
        <form
        className="text-center"
        onSubmit={this.handleFormSubmit}
        >
            <div className="form-group searchForm mx-2">
                <input onChange={this.handleInputChange} value={this.state.searchValue} type="text" className="form-control" id="parkName" placeholder="Which park are you looking for?" />
            </div>
            <button type="submit" class="btn search-button">Search</button>
        </form>
        )
    }
}