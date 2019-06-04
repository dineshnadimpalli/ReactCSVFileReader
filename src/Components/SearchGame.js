import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../App.css';

class SearchGame extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            searchValue: ""
        }
    }

    filterData = (event) => {
        event.preventDefault();
        const totalData = this.props.data;
        console.log(totalData);
        const reqData = totalData.filter(data => data[1] === this.state.searchValue);
        if (reqData[0].length>0) {
            this.setState({
                searchResult: reqData
            })
        }
        console.log("-----reqData-------", reqData);
    }

    render() {
        const { searchResult, searchValue } = this.state;
        return (
            <div>
                <h1>Search Results</h1>
                <form onSubmit={this.filterData}>
                    <label>
                        Search here:
                        <input
                            type="text"
                            name="name"
                            value={searchValue}
                            onChange={(e) => {
                                console.log("the value is ", e.target.value);
                                this.setState({
                                    searchValue: e.target.value
                                })
                            }}
                        />
                    </label>
                </form>
                {
                    searchResult.length > 0 ? (
                        <table style={{marginTop: 30}}>
                            <tr>
                                {
                                    searchResult[0].map(data => {
                                        return (
                                            <td>{data}</td>
                                        )
                                       
                                    })
                                }
                            </tr>
                        </table>
                        
                    ): (
                          <p>Search Results will be displayed here if any!</p>  
                    )
                }
            </div>
        )
    }
}

export default SearchGame;