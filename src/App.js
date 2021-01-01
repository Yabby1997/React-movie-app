import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }))
  }

  sub = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  }

  componentDidUpdate(){
    console.log('updated');
  }
  
  componentDidMount(){
    console.log('rendering finished');
  }

  componentWillUnmount(){
    console.log('good bye');
  }

  render() {
    console.log('rendering');
    return (
      <div>
        <h1>Hello World {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
      </div >
    )
  }
}

export default App 
