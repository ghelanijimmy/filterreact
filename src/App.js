import React, { Component } from 'react';
import './styles/style.css';
import Test from './components/test';
import "antd/dist/antd.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = ({
      input: ""
    })

    this.changeText = this.changeText.bind(this);
  }

  changeText = (e) => {
    var inputText = e.target.value;
    this.setState({
      input: inputText
    }, ()=>{
      let strArray = this.state.input.split(" ");
      var regStr = "";
      strArray.forEach(function(strItem, index){
          if(index < strArray.length - 1){
              regStr += '(?:' + strItem + ')|';
          } else {
              regStr += '(?:' + strItem + ')';
          }
      });
      var reg = new RegExp(regStr, 'ig');
      var blocks = document.querySelectorAll('.blocks');
      blocks.forEach((block)=> {
        var myregex = block.textContent.match(reg);
        if(myregex !== null){
          block.style.display = 'initial'
        } else {
            block.style.display = 'none'
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Test changetext={this.changeText} inputText={this.state.input}></Test>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
