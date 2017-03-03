import React,{ Component } from "react";
import { render } from "react-dom";


class App extends Component{
  constructor(props) {
    super();
    this.state = {
      test:"test"
    }
  }
  componentWillReceiveProps(){
    console.log("receive");
  }
  shouldComponentUpdate(prevProps,prevState){
    console.log("should",prevProps,prevState);
    return true;

  }
  componentWillUpdate(){
    console.log("will update");
  }
  componentWillMount(){
    console.log("will mount");
  }
  render(){
    return <div>{this.state.test}</div>
  }
  componentDidUpdate(){
    console.log("did update");
  }
  componentDidMount(){
    console.log("did mount");
    setTimeout( () => {
      this.setState({
         test:"OK"
      })
    },1000 )
  }
};

render(<App />,document.getElementById('app'))
