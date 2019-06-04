import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../App.css';

function DataTable(props) {
    console.log("props in child", props);
    const { data } = props;
    return (
        <div>
            <h1>Game Data Set Table</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th> 
                        <th>Platform</th> 
                        <th>Year</th> 
                        <th>Genre</th> 
                        <th>Publisher</th> 
                        <th>Global_Sale</th> 
                    </tr>
                    {
                        data? (
                            data.map((game) => {
                                return (
                                    <tr key={game}>
                                        {
                                            game.map((topic) => {
                                                return (
                                                    <td>{topic}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                                
                            })
                        ) : null
                
                    }
                    </tbody>
            </table>
           
        </div>
    )
}

export default DataTable;