import React, {Component} from 'react';
import CsvUploader from './Components/CsvUploader';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  render() {
    return (
      <div className="App">
        <CsvUploader />
      </div>
    );
  }

}

export default App;
